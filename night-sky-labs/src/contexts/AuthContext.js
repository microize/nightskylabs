import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { googleLogout } from '@react-oauth/google';
import { getUserRole, getUserCapabilities } from '../config/userRoles';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    default:
      return state;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for stored user session on app load
    const storedUser = localStorage.getItem('nightsky_user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        
        // Update user role and capabilities if they don't exist or need refresh
        if (!userData.role || !userData.capabilities) {
          const userRole = getUserRole(userData.email);
          const capabilities = getUserCapabilities(userRole);
          userData.role = userRole;
          userData.capabilities = capabilities;
          localStorage.setItem('nightsky_user', JSON.stringify(userData));
        }
        
        dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('nightsky_user');
      }
    }
  }, []);

  const decodeJWT = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  };

  const login = async (credentialResponse) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      let userData;
      
      // Handle JWT credential (standard flow)
      if (credentialResponse.credential && !credentialResponse.userInfo) {
        const decoded = decodeJWT(credentialResponse.credential);
        
        if (!decoded) {
          throw new Error('Failed to decode Google credential');
        }

        const userRole = getUserRole(decoded.email);
        const capabilities = getUserCapabilities(userRole);

        userData = {
          id: decoded.sub,
          email: decoded.email,
          name: decoded.name,
          picture: decoded.picture,
          given_name: decoded.given_name,
          family_name: decoded.family_name,
          email_verified: decoded.email_verified,
          credential: credentialResponse.credential,
          loginTime: new Date().toISOString(),
          role: userRole,
          capabilities: capabilities
        };
      }
      // Handle userInfo (custom flow)
      else if (credentialResponse.userInfo) {
        const userInfo = credentialResponse.userInfo;
        const userRole = getUserRole(userInfo.email);
        const capabilities = getUserCapabilities(userRole);

        userData = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.name,
          picture: userInfo.picture,
          given_name: userInfo.given_name,
          family_name: userInfo.family_name,
          email_verified: userInfo.verified_email,
          credential: credentialResponse.credential,
          loginTime: new Date().toISOString(),
          role: userRole,
          capabilities: capabilities
        };
      }
      else {
        throw new Error('Invalid credential response format');
      }

      // Store user data in localStorage
      localStorage.setItem('nightsky_user', JSON.stringify(userData));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
      
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      throw error;
    }
  };

  const logout = () => {
    try {
      // Clear Google session
      googleLogout();
      
      // Clear local storage
      localStorage.removeItem('nightsky_user');
      
      // Update state
      dispatch({ type: 'LOGOUT' });
      
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateProfile = (profileData) => {
    try {
      const updatedUser = { ...state.user, ...profileData };
      localStorage.setItem('nightsky_user', JSON.stringify(updatedUser));
      dispatch({ type: 'UPDATE_PROFILE', payload: profileData });
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  const value = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
    login,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
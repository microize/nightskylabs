import axios from 'axios';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generate session ID for analytics
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get or create session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add session ID for analytics tracking
    config.headers['x-session-id'] = getSessionId();
    
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add timestamp for cache busting if needed
    if (config.method === 'get' && config.bustCache) {
      config.params = {
        ...config.params,
        _t: Date.now()
      };
    }

    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error);

    // Handle specific error cases
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - redirect to login
          localStorage.removeItem('authToken');
          window.location.href = '/signin';
          break;
        
        case 403:
          // Forbidden - show error message
          console.warn('Access forbidden:', data.message);
          break;
        
        case 404:
          // Not found - handle gracefully
          console.warn('Resource not found:', error.config.url);
          break;
        
        case 429:
          // Rate limited
          console.warn('Rate limited. Please try again later.');
          break;
        
        case 500:
        case 502:
        case 503:
        case 504:
          // Server errors
          console.error('Server error:', data.message || 'Internal server error');
          break;
      }
    } else if (error.request) {
      // Network error
      console.error('Network error. Please check your connection.');
    }

    return Promise.reject(error);
  }
);

// Helper methods for common operations
export const apiHelpers = {
  // Set authentication token
  setAuthToken: (token) => {
    if (token) {
      localStorage.setItem('authToken', token);
      apiClient.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      localStorage.removeItem('authToken');
      delete apiClient.defaults.headers.Authorization;
    }
  },

  // Clear authentication
  clearAuth: () => {
    localStorage.removeItem('authToken');
    delete apiClient.defaults.headers.Authorization;
  },

  // Check if authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },

  // Handle file upload
  uploadFile: async (file, onProgress) => {
    const formData = new FormData();
    formData.append('file', file);

    return apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentCompleted);
        }
      },
    });
  },

  // Retry failed requests
  retry: async (originalRequest, maxRetries = 3) => {
    let retries = 0;
    
    const executeRequest = async () => {
      try {
        return await apiClient(originalRequest);
      } catch (error) {
        retries++;
        
        if (retries < maxRetries && error.response?.status >= 500) {
          // Exponential backoff
          const delay = Math.pow(2, retries) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return executeRequest();
        }
        
        throw error;
      }
    };

    return executeRequest();
  }
};

export default apiClient;
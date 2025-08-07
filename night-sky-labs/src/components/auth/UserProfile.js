import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ChevronDownIcon, UserCircleIcon, ArrowRightOnRectangleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const UserProfile = ({ showDropdown = true, size = 'md' }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!isAuthenticated || !user) {
    return null;
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  if (!showDropdown) {
    return (
      <div className="flex items-center space-x-2">
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-gray-200`}>
          {user.picture ? (
            <img 
              src={user.picture} 
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
              {user.name?.charAt(0).toUpperCase() || '?'}
            </div>
          )}
        </div>
        <div className="hidden md:block">
          <p className="text-sm font-medium text-black">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-small font-thin transition-colors relative text-black/80 hover:text-black">
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-gray-200`}>
          {user.picture ? (
            <img 
              src={user.picture} 
              alt={user.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
              {user.name?.charAt(0).toUpperCase() || '?'}
            </div>
          )}
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-thin text-black">{user.name}</p>
          <p className="text-xs font-thin text-gray-500">{user.email}</p>
        </div>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        <span className="absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 w-0 group-hover:w-full"></span>
      </button>

      {/* User Dropdown - Navigation Style */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-white shadow-xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="px-8 py-8">
          {/* User info header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 mx-auto mb-4">
              {user.picture ? (
                <img 
                  src={user.picture} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-lg">
                  {user.name?.charAt(0).toUpperCase() || '?'}
                </div>
              )}
            </div>
            <h3 className="text-xl font-thin text-black mb-1">{user.name}</h3>
            <p className="text-sm font-thin text-gray-600 mb-2">{user.email}</p>
            <div className="flex items-center justify-center space-x-2">
              {user.email_verified && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 font-thin">
                  ✓ Verified
                </span>
              )}
              {user.role && (
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-thin ${
                  user.role === 'admin' ? 'bg-red-100 text-red-800' :
                  user.role === 'editor' ? 'bg-blue-100 text-blue-800' :
                  user.role === 'author' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
              )}
            </div>
          </div>

          {/* Menu items */}
          <div className="space-y-2">
            {user.capabilities?.canAccessAdmin && (
              <a 
                href="/admin"
                className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Cog6ToothIcon className="w-5 h-5 text-gray-500" />
                  <div>
                    <h4 className="text-sm font-thin text-black">Admin Panel</h4>
                    <p className="text-xs font-thin text-gray-500">Manage content and users</p>
                  </div>
                </div>
              </a>
            )}
            
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-5 h-5 text-gray-500" />
                <div>
                  <h4 className="text-sm font-thin text-black">View Profile</h4>
                  <p className="text-xs font-thin text-gray-500">Manage your account settings</p>
                </div>
              </div>
            </button>

            <hr className="my-4 border-gray-100" />
            
            <button 
              onClick={handleLogout}
              className="w-full text-left p-3 rounded-lg hover:bg-red-50 transition-colors text-red-600"
            >
              <div className="flex items-center space-x-3">
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                <div>
                  <h4 className="text-sm font-thin">Sign Out</h4>
                  <p className="text-xs font-thin text-red-500">End your current session</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
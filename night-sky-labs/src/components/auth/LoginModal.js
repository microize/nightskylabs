import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import GoogleAuthButton from './GoogleAuthButton';

const LoginModal = ({ isOpen, onClose, title = "Sign in to continue" }) => {
  const [error, setError] = useState(null);
  const [useCustomLogin, setUseCustomLogin] = useState(false);

  if (!isOpen) return null;

  const handleSuccess = (userData) => {
    console.log('Login successful:', userData);
    setError(null);
    onClose();
  };

  const handleError = (error) => {
    console.error('Login error:', error);
    setError('Failed to sign in with Google. Please try again.');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 z-[60]"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[61] flex items-center justify-center p-6 pointer-events-none">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm pointer-events-auto" style={{ margin: 'auto' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-thin text-black">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <div className="text-center mb-6">
              <p className="text-gray-600 font-thin mb-6 text-sm leading-relaxed">
                Join the NightSkyLabs community to participate in discussions, share your projects, and connect with other developers.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-black mb-3 text-sm">What you'll get:</h3>
                <ul className="text-xs text-gray-600 font-thin space-y-1 text-left">
                  <li>• Create and reply to community posts</li>
                  <li>• Get help with technical issues</li>
                  <li>• Share your projects and ideas</li>
                  <li>• Connect with the development team</li>
                </ul>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-center">
                <p className="text-red-600 text-xs font-thin">{error}</p>
              </div>
            )}

            {/* Google Auth Button */}
            <div className="space-y-4">
              <GoogleAuthButton 
                onSuccess={handleSuccess}
                onError={handleError}
                text="sign_in_with"
                useCustom={useCustomLogin}
              />
              
              {/* Alternative login method */}
              <div className="text-center">
                <button 
                  onClick={() => setUseCustomLogin(!useCustomLogin)}
                  className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline font-thin"
                >
                  {useCustomLogin ? 'Try standard login' : 'Having popup issues? Try alternative method'}
                </button>
              </div>
              
              <p className="text-xs text-gray-400 text-center font-thin">
                By signing in, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
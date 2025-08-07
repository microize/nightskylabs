import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import GoogleAuthButton from '../components/auth/GoogleAuthButton';

const SignInPage = () => {
  const [error, setError] = useState(null);
  const [useCustomLogin, setUseCustomLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const redirectTo = location.state?.from || '/';
      navigate(redirectTo);
    }
  }, [isAuthenticated, navigate, location]);

  const handleSuccess = (userData) => {
    console.log('Login successful:', userData);
    setError(null);
    
    // Redirect to intended page or home
    const redirectTo = location.state?.from || '/';
    navigate(redirectTo);
  };

  const handleError = (error) => {
    console.error('Login error:', error);
    setError('Failed to sign in with Google. Please try again.');
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-thin text-white mb-4">Welcome to NightSkyLabs</h1>
            <p className="text-xl font-thin text-gray-300 leading-relaxed">
              Join our community of developers building the future with AI
            </p>
          </div>
          
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-thin text-white mb-1">Community Access</h3>
                <p className="text-sm font-thin">Participate in discussions and connect with fellow developers</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-thin text-white mb-1">Technical Support</h3>
                <p className="text-sm font-thin">Get help with our AI tools and development challenges</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-thin text-white mb-1">Early Access</h3>
                <p className="text-sm font-thin">Be first to try new features and product updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16">
        <div className="w-full max-w-sm mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <a href="/" className="text-2xl font-thin text-black">
                NightSkyLabs
              </a>
            </div>
            <h2 className="text-3xl font-thin text-black mb-2">Sign in to your account</h2>
            <p className="text-gray-600 font-thin">
              Access your community and start building with AI
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-center">
              <p className="text-red-600 text-sm font-thin">{error}</p>
            </div>
          )}

          {/* Sign In Form */}
          <div className="space-y-6">
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

            {/* Terms */}
            <p className="text-xs text-gray-400 text-center font-thin leading-relaxed">
              By signing in, you agree to our{' '}
              <a href="/terms" className="underline hover:text-gray-600">Terms of Service</a>{' '}
              and{' '}
              <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <a 
              href="/"
              className="text-sm font-thin text-gray-500 hover:text-black transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
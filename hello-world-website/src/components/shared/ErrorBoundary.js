import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-thin text-black mb-4">Something went wrong</h2>
            <p className="text-base font-thin text-gray-600 mb-8">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
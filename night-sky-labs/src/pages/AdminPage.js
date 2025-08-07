import React, { useState, useEffect } from 'react';
import Navigation from '../components/common/layout/Navigation';
import AdminDashboard from '../components/admin/AdminDashboard';
import ContentManager from '../components/admin/ContentManager';
import AnalyticsDashboard from '../components/admin/AnalyticsDashboard';
import UserManager from '../components/admin/UserManager';
import { useAuth } from '../contexts/AuthContext';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, isAuthenticated } = useAuth();

  // Check if user has admin access
  useEffect(() => {
    if (!isAuthenticated || !user) {
      window.location.href = '/signin';
      return;
    }
    
    if (!user.capabilities?.canAccessAdmin) {
      window.location.href = '/';
      return;
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated || !user || !user.capabilities?.canAccessAdmin) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-thin text-black mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">
            {!isAuthenticated 
              ? 'Please sign in to access this area.' 
              : 'You don\'t have permission to access the admin panel.'
            }
          </p>
          <div className="space-x-4">
            {!isAuthenticated ? (
              <a 
                href="/signin"
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors"
              >
                Sign In
              </a>
            ) : (
              <a 
                href="/"
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors"
              >
                Go Home
              </a>
            )}
          </div>
          {user && (
            <div className="mt-4 text-sm text-gray-500">
              Signed in as: {user.email} ({user.role})
            </div>
          )}
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'chart-bar' },
    { id: 'content', label: 'Content', icon: 'document-text' },
    { id: 'analytics', label: 'Analytics', icon: 'chart-line' },
    { id: 'users', label: 'Users', icon: 'users' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'content':
        return <ContentManager />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'users':
        return <UserManager />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="relative w-full bg-white min-h-screen">
      <Navigation currentPage="admin" />
      
      <div style={{ paddingTop: '80px' }} className="min-h-screen">
        {/* Admin Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-thin text-black">Admin Dashboard</h1>
                <p className="text-gray-600 font-thin mt-1">
                  Manage content, users, and analytics for NightSkyLabs
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-thin text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.role}</p>
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-thin">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-thin text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
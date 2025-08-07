import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalContent: 0,
    publishedContent: 0,
    draftContent: 0,
    totalViews: 0,
    totalUsers: 0,
    activeUsers: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [popularContent, setPopularContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Simulate API calls
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock data
        setStats({
          totalContent: 247,
          publishedContent: 198,
          draftContent: 49,
          totalViews: 125847,
          totalUsers: 1234,
          activeUsers: 89
        });

        setRecentActivity([
          {
            id: 1,
            type: 'content_published',
            description: 'Soul CLI API Reference was published',
            user: 'John Doe',
            timestamp: '2 hours ago'
          },
          {
            id: 2,
            type: 'user_registered',
            description: 'New user registered: jane.smith@company.com',
            user: 'System',
            timestamp: '4 hours ago'
          },
          {
            id: 3,
            type: 'content_updated',
            description: 'Voice Platform Getting Started guide was updated',
            user: 'Mike Johnson',
            timestamp: '6 hours ago'
          },
          {
            id: 4,
            type: 'content_created',
            description: 'New blog post: AI Ethics in Practice created',
            user: 'Sarah Wilson',
            timestamp: '1 day ago'
          }
        ]);

        setPopularContent([
          {
            id: 1,
            title: 'Soul CLI Getting Started',
            type: 'documentation',
            views: 12450,
            trend: 'up'
          },
          {
            id: 2,
            title: 'AI Ethics in Practice',
            type: 'blog',
            views: 8932,
            trend: 'up'
          },
          {
            id: 3,
            title: 'Voice Platform API Reference',
            type: 'documentation',
            views: 7231,
            trend: 'down'
          },
          {
            id: 4,
            title: 'Machine Learning Best Practices',
            type: 'research',
            views: 5687,
            trend: 'up'
          }
        ]);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const StatCard = ({ title, value, subtitle, icon, trend }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-thin text-gray-600">{title}</p>
          <p className="text-3xl font-thin text-black mt-2">{value.toLocaleString()}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        <div className="text-2xl">{icon}</div>
      </div>
      {trend && (
        <div className={`mt-4 text-xs ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? '↗️' : '↘️'} {trend === 'up' ? '+12%' : '-3%'} from last month
        </div>
      )}
    </div>
  );

  const getActivityIcon = (type) => {
    switch (type) {
      case 'content_published': return '🚀';
      case 'content_updated': return '✏️';
      case 'content_created': return '📝';
      case 'user_registered': return '👤';
      default: return '📊';
    }
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? '📈' : '📉';
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Content"
          value={stats.totalContent}
          subtitle={`${stats.publishedContent} published, ${stats.draftContent} drafts`}
          icon="📚"
          trend="up"
        />
        <StatCard
          title="Total Views"
          value={stats.totalViews}
          subtitle="Last 30 days"
          icon="👁️"
          trend="up"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          subtitle={`of ${stats.totalUsers} total users`}
          icon="👥"
          trend="up"
        />
      </div>

      {/* Content by Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-thin text-black">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-6">
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{getActivityIcon(activity.type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-thin text-black">
                      {activity.description}
                    </p>
                    <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                      <span>by {activity.user}</span>
                      <span>{activity.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Content */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-thin text-black">Popular Content</h3>
            <p className="text-sm text-gray-600 font-thin mt-1">Most viewed content this month</p>
          </div>
          <div className="divide-y divide-gray-200">
            {popularContent.map((content) => (
              <div key={content.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-thin text-black truncate">
                      {content.title}
                    </p>
                    <div className="mt-1 flex items-center space-x-4 text-xs text-gray-500">
                      <span className="capitalize">{content.type}</span>
                      <span>{content.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  <span className="text-lg ml-3">{getTrendIcon(content.trend)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-thin text-black mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl mb-2">📝</div>
            <div className="text-sm font-thin text-black">Create Blog Post</div>
            <div className="text-xs text-gray-500 mt-1">Write a new article</div>
          </button>
          
          <button className="p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl mb-2">📚</div>
            <div className="text-sm font-thin text-black">Add Documentation</div>
            <div className="text-xs text-gray-500 mt-1">Create product docs</div>
          </button>
          
          <button className="p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl mb-2">👤</div>
            <div className="text-sm font-thin text-black">Manage Users</div>
            <div className="text-xs text-gray-500 mt-1">User roles & access</div>
          </button>
          
          <button className="p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm font-thin text-black">View Analytics</div>
            <div className="text-xs text-gray-500 mt-1">Content performance</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
import React, { useState, useEffect } from 'react';

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: [],
    popularContent: [],
    userBehavior: {},
    loading: true
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // Mock analytics data - replace with actual API calls
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setAnalyticsData({
          pageViews: [
            { date: '2024-01-01', views: 1250 },
            { date: '2024-01-02', views: 1380 },
            { date: '2024-01-03', views: 1420 },
            { date: '2024-01-04', views: 1680 },
            { date: '2024-01-05', views: 1890 },
            { date: '2024-01-06', views: 2100 },
            { date: '2024-01-07', views: 1950 }
          ],
          popularContent: [
            { title: 'Soul CLI Getting Started', views: 3420, product: 'soul' },
            { title: 'Voice API Authentication', views: 2890, product: 'voice' },
            { title: 'Qurious Course Creation', views: 2650, product: 'qurious' },
            { title: 'AI Ethics Guidelines', views: 2100, product: 'general' }
          ],
          userBehavior: {
            avgTimeOnPage: '3:42',
            bounceRate: '24%',
            totalSessions: 8750,
            newUsers: 2340
          },
          loading: false
        });
      } catch (error) {
        console.error('Error fetching analytics:', error);
        setAnalyticsData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchAnalytics();
  }, []);

  const StatCard = ({ title, value, subtitle, trend }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-thin text-gray-600">{title}</p>
          <p className="text-2xl font-thin text-black mt-1">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        {trend && (
          <div className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '↗️' : '↘️'} {Math.abs(trend)}%
          </div>
        )}
      </div>
    </div>
  );

  const SimpleChart = ({ data, title }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-thin text-black mb-4">{title}</h3>
      <div className="space-y-3">
        {data.slice(0, 5).map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-thin text-black truncate">{item.title}</p>
              <p className="text-xs text-gray-500">{item.product}</p>
            </div>
            <div className="ml-4 flex items-center">
              <div className="text-sm font-thin text-gray-900">
                {item.views.toLocaleString()} views
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PageViewsChart = ({ data }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-thin text-black mb-4">Page Views (Last 7 Days)</h3>
      <div className="flex items-end space-x-2 h-32">
        {data.map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-black rounded-t"
              style={{
                height: `${(day.views / Math.max(...data.map(d => d.views))) * 100}%`,
                minHeight: '4px'
              }}
            ></div>
            <div className="text-xs text-gray-500 mt-2 transform -rotate-45">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (analyticsData.loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-16 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-20"></div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Page Views"
          value={analyticsData.pageViews.reduce((sum, day) => sum + day.views, 0).toLocaleString()}
          subtitle="Last 7 days"
          trend={12}
        />
        <StatCard
          title="Total Sessions"
          value={analyticsData.userBehavior.totalSessions.toLocaleString()}
          subtitle="This month"
          trend={8}
        />
        <StatCard
          title="New Users"
          value={analyticsData.userBehavior.newUsers.toLocaleString()}
          subtitle="This month"
          trend={15}
        />
        <StatCard
          title="Avg. Time on Page"
          value={analyticsData.userBehavior.avgTimeOnPage}
          subtitle={`Bounce rate: ${analyticsData.userBehavior.bounceRate}`}
          trend={-2}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PageViewsChart data={analyticsData.pageViews} />
        <SimpleChart data={analyticsData.popularContent} title="Popular Content" />
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-thin text-black">Content Performance</h3>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
            Export Report
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider">
                  Content
                </th>
                <th className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-thin text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analyticsData.popularContent.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-thin text-gray-900">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-thin text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                      {item.product}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-thin text-gray-900">
                    {item.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-thin text-green-600">
                    ↗️ +{Math.floor(Math.random() * 20 + 5)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
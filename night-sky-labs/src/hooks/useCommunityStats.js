import { useState, useEffect } from 'react';
import communityService from '../services/communityService';

export const useCommunityStats = (refreshInterval = 300000) => { // 5 minutes default
  const [stats, setStats] = useState({
    activeMembers: 0,
    totalPosts: 0,
    onlineNow: 0,
    totalMembers: 0,
    postsToday: 0,
    lastUpdated: null,
    isLoading: true,
    error: null
  });

  const fetchStats = async () => {
    try {
      setStats(prev => ({ ...prev, isLoading: true, error: null }));
      const data = await communityService.fetchCommunityStats();
      setStats(prev => ({
        ...prev,
        ...data,
        isLoading: false
      }));
    } catch (error) {
      setStats(prev => ({
        ...prev,
        error: error.message,
        isLoading: false
      }));
    }
  };

  useEffect(() => {
    fetchStats();

    // Set up auto-refresh
    const interval = setInterval(fetchStats, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  const refreshStats = () => {
    fetchStats();
  };

  return {
    stats,
    refreshStats,
    isLoading: stats.isLoading,
    error: stats.error
  };
};

export const useRealtimeStats = () => {
  const [stats, setStats] = useState({
    activeMembers: 0,
    totalPosts: 0,
    onlineNow: 0,
    isLoading: true
  });

  useEffect(() => {
    // WebSocket connection for real-time updates
    const wsUrl = process.env.REACT_APP_WS_URL || 'wss://ws.nightskylabs.com/community';
    
    const connectWebSocket = () => {
      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        console.log('Connected to community stats WebSocket');
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'stats_update') {
            setStats(prev => ({
              ...prev,
              ...data.stats,
              isLoading: false
            }));
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setStats(prev => ({ ...prev, isLoading: false }));
      };

      ws.onclose = () => {
        console.log('WebSocket connection closed, attempting to reconnect...');
        setTimeout(connectWebSocket, 5000); // Reconnect after 5 seconds
      };

      return ws;
    };

    const ws = connectWebSocket();

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  return stats;
};
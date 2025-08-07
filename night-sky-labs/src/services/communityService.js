// Community Service - Handles fetching real community data
class CommunityService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'https://api.nightskylabs.com';
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  async fetchCommunityStats() {
    try {
      const response = await fetch(`${this.baseURL}/community/stats`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch community stats');
      }

      const data = await response.json();
      return {
        activeMembers: data.active_members || 0,
        totalPosts: data.total_posts || 0,
        onlineNow: data.online_now || 0,
        totalMembers: data.total_members || 0,
        postsToday: data.posts_today || 0,
        lastUpdated: data.last_updated || new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching community stats:', error);
      // Return fallback data if API fails
      return this.getFallbackStats();
    }
  }

  async fetchRecentPosts(limit = 10, category = null) {
    try {
      const params = new URLSearchParams();
      params.append('limit', limit);
      if (category) params.append('category', category);

      const response = await fetch(`${this.baseURL}/community/posts?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  async fetchUserStats(userId) {
    try {
      const response = await fetch(`${this.baseURL}/community/users/${userId}/stats`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user stats');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching user stats:', error);
      return null;
    }
  }

  getFallbackStats() {
    // Fallback stats when API is unavailable
    return {
      activeMembers: 0,
      totalPosts: 0,
      onlineNow: 0,
      totalMembers: 0,
      postsToday: 0,
      lastUpdated: new Date().toISOString()
    };
  }

  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
}

export default new CommunityService();
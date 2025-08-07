import React, { useState, useEffect } from 'react';

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    role: '',
    isActive: '',
    search: ''
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Mock user data
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockUsers = [
          {
            id: '1',
            name: 'John Doe',
            email: 'john@nightskylabs.com',
            role: 'admin',
            isActive: true,
            createdAt: '2024-01-15T10:00:00Z',
            lastLoginAt: '2024-01-20T14:30:00Z',
            loginCount: 45,
            productAccess: ['all']
          },
          {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@nightskylabs.com',
            role: 'editor',
            isActive: true,
            createdAt: '2024-01-10T09:15:00Z',
            lastLoginAt: '2024-01-19T16:45:00Z',
            loginCount: 23,
            productAccess: ['soul', 'voice']
          },
          {
            id: '3',
            name: 'Mike Johnson',
            email: 'mike@nightskylabs.com',
            role: 'author',
            isActive: true,
            createdAt: '2024-01-12T11:30:00Z',
            lastLoginAt: '2024-01-18T13:20:00Z',
            loginCount: 67,
            productAccess: ['qurious']
          },
          {
            id: '4',
            name: 'Sarah Wilson',
            email: 'sarah@example.com',
            role: 'reader',
            isActive: false,
            createdAt: '2024-01-08T08:45:00Z',
            lastLoginAt: '2024-01-15T10:10:00Z',
            loginCount: 12,
            productAccess: ['soul']
          }
        ];

        setUsers(mockUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'editor':
        return 'bg-blue-100 text-blue-800';
      case 'author':
        return 'bg-green-100 text-green-800';
      case 'contributor':
        return 'bg-yellow-100 text-yellow-800';
      case 'reader':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      // Mock API call
      console.log(`Changing user ${userId} role to ${newRole}`);
      
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === userId 
            ? { ...user, role: newRole }
            : user
        )
      );
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleToggleActive = async (userId) => {
    try {
      // Mock API call
      console.log(`Toggling active status for user ${userId}`);
      
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === userId 
            ? { ...user, isActive: !user.isActive }
            : user
        )
      );
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  const filteredUsers = users.filter(user => {
    if (filters.role && user.role !== filters.role) return false;
    if (filters.isActive !== '' && user.isActive.toString() !== filters.isActive) return false;
    if (filters.search && !user.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !user.email.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const UserEditModal = ({ user, onClose, onSave }) => {
    const [editData, setEditData] = useState({
      name: user?.name || '',
      email: user?.email || '',
      role: user?.role || 'reader',
      isActive: user?.isActive || true,
      productAccess: user?.productAccess || []
    });

    const handleSave = () => {
      onSave(user.id, editData);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-thin text-black mb-4">Edit User</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-thin text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg font-thin"
              />
            </div>
            
            <div>
              <label className="block text-sm font-thin text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg font-thin"
              />
            </div>
            
            <div>
              <label className="block text-sm font-thin text-gray-700 mb-1">Role</label>
              <select
                value={editData.role}
                onChange={(e) => setEditData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg font-thin"
              >
                <option value="reader">Reader</option>
                <option value="contributor">Contributor</option>
                <option value="author">Author</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isActive"
                checked={editData.isActive}
                onChange={(e) => setEditData(prev => ({ ...prev, isActive: e.target.checked }))}
                className="mr-2"
              />
              <label htmlFor="isActive" className="text-sm font-thin text-gray-700">
                Active Account
              </label>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-thin hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-black text-white rounded-lg font-thin hover:bg-gray-800"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-64"></div>
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="animate-pulse flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-thin text-black">User Management</h2>
          <p className="text-gray-600 font-thin mt-1">
            Manage user accounts, roles, and permissions
          </p>
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
          Invite User
        </button>
      </div>

      {/* Filters */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-thin text-gray-700 mb-2">Role</label>
            <select
              value={filters.role}
              onChange={(e) => setFilters(prev => ({ ...prev, role: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="author">Author</option>
              <option value="contributor">Contributor</option>
              <option value="reader">Reader</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-thin text-gray-700 mb-2">Status</label>
            <select
              value={filters.isActive}
              onChange={(e) => setFilters(prev => ({ ...prev, isActive: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="">All Users</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-thin text-gray-700 mb-2">Search</label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              placeholder="Search users..."
              className="w-full p-3 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* User List */}
      <div className="space-y-4">
        {filteredUsers.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-lg font-thin text-black mb-2">No users found</h3>
            <p className="text-gray-600 font-thin">
              No users match your current filters.
            </p>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-thin">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-thin text-black">{user.name}</h3>
                    <p className="text-gray-600 font-thin text-sm">{user.email}</p>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                      <span>Joined {formatDate(user.createdAt)}</span>
                      <span>•</span>
                      <span>{user.loginCount} logins</span>
                      {user.lastLoginAt && (
                        <>
                          <span>•</span>
                          <span>Last active {formatDate(user.lastLoginAt)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-thin ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                  
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${user.isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-xs text-gray-500">
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowEditModal(true);
                      }}
                      className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit user"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => handleToggleActive(user.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        user.isActive 
                          ? 'text-red-600 hover:bg-red-50' 
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                      title={user.isActive ? 'Deactivate user' : 'Activate user'}
                    >
                      {user.isActive ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Access */}
              {user.productAccess && user.productAccess.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Product Access:</span>
                    <div className="flex space-x-2">
                      {user.productAccess.map(product => (
                        <span
                          key={product}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {product === 'all' ? 'All Products' : product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedUser && (
        <UserEditModal
          user={selectedUser}
          onClose={() => {
            setShowEditModal(false);
            setSelectedUser(null);
          }}
          onSave={(userId, data) => {
            setUsers(prevUsers => 
              prevUsers.map(user => 
                user.id === userId 
                  ? { ...user, ...data }
                  : user
              )
            );
          }}
        />
      )}
    </div>
  );
};

export default UserManager;
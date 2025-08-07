/**
 * User Role Configuration
 * Manages user permissions and access levels based on email addresses
 */

// Admin email whitelist - Add your Google account email here
export const ADMIN_EMAILS = [
  'your-email@gmail.com',
  'admin@nightskylabs.com',
  'sripathi@nightskylabs.com',
  // Add more admin emails as needed
];

// Editor email whitelist
export const EDITOR_EMAILS = [
  'editor@nightskylabs.com',
  'content@nightskylabs.com',
  // Add more editor emails as needed
];

// Author email whitelist
export const AUTHOR_EMAILS = [
  'author@nightskylabs.com',
  'writer@nightskylabs.com',
  // Add more author emails as needed
];

// Role definitions
export const USER_ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor', 
  AUTHOR: 'author',
  READER: 'reader'
};

// Permission definitions
export const PERMISSIONS = {
  // Content permissions
  CONTENT_READ: 'content:read',
  CONTENT_CREATE: 'content:create',
  CONTENT_EDIT: 'content:edit',
  CONTENT_DELETE: 'content:delete',
  CONTENT_PUBLISH: 'content:publish',
  
  // User permissions
  USERS_READ: 'users:read',
  USERS_CREATE: 'users:create',
  USERS_EDIT: 'users:edit',
  USERS_DELETE: 'users:delete',
  
  // Admin permissions
  ADMIN_ACCESS: 'admin:access',
  ANALYTICS_READ: 'analytics:read',
  SETTINGS_EDIT: 'settings:edit'
};

// Role to permissions mapping
export const ROLE_PERMISSIONS = {
  [USER_ROLES.ADMIN]: [
    PERMISSIONS.CONTENT_READ,
    PERMISSIONS.CONTENT_CREATE,
    PERMISSIONS.CONTENT_EDIT,
    PERMISSIONS.CONTENT_DELETE,
    PERMISSIONS.CONTENT_PUBLISH,
    PERMISSIONS.USERS_READ,
    PERMISSIONS.USERS_CREATE,
    PERMISSIONS.USERS_EDIT,
    PERMISSIONS.USERS_DELETE,
    PERMISSIONS.ADMIN_ACCESS,
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.SETTINGS_EDIT
  ],
  [USER_ROLES.EDITOR]: [
    PERMISSIONS.CONTENT_READ,
    PERMISSIONS.CONTENT_CREATE,
    PERMISSIONS.CONTENT_EDIT,
    PERMISSIONS.CONTENT_PUBLISH,
    PERMISSIONS.USERS_READ,
    PERMISSIONS.ADMIN_ACCESS,
    PERMISSIONS.ANALYTICS_READ
  ],
  [USER_ROLES.AUTHOR]: [
    PERMISSIONS.CONTENT_READ,
    PERMISSIONS.CONTENT_CREATE,
    PERMISSIONS.CONTENT_EDIT,
    PERMISSIONS.ADMIN_ACCESS // Limited admin access for content management
  ],
  [USER_ROLES.READER]: [
    PERMISSIONS.CONTENT_READ
  ]
};

/**
 * Determine user role based on email address
 * @param {string} email - User's email address
 * @returns {string} - User role
 */
export const getUserRole = (email) => {
  if (!email) return USER_ROLES.READER;
  
  const normalizedEmail = email.toLowerCase().trim();
  
  if (ADMIN_EMAILS.map(e => e.toLowerCase()).includes(normalizedEmail)) {
    return USER_ROLES.ADMIN;
  }
  
  if (EDITOR_EMAILS.map(e => e.toLowerCase()).includes(normalizedEmail)) {
    return USER_ROLES.EDITOR;
  }
  
  if (AUTHOR_EMAILS.map(e => e.toLowerCase()).includes(normalizedEmail)) {
    return USER_ROLES.AUTHOR;
  }
  
  return USER_ROLES.READER;
};

/**
 * Check if user has specific permission
 * @param {string} userRole - User's role
 * @param {string} permission - Permission to check
 * @returns {boolean} - Whether user has permission
 */
export const hasPermission = (userRole, permission) => {
  if (!userRole || !permission) return false;
  
  const rolePermissions = ROLE_PERMISSIONS[userRole] || [];
  return rolePermissions.includes(permission);
};

/**
 * Check if user can access admin panel
 * @param {string} userRole - User's role
 * @returns {boolean} - Whether user can access admin
 */
export const canAccessAdmin = (userRole) => {
  return hasPermission(userRole, PERMISSIONS.ADMIN_ACCESS);
};

/**
 * Check if user can manage content
 * @param {string} userRole - User's role
 * @returns {boolean} - Whether user can manage content
 */
export const canManageContent = (userRole) => {
  return hasPermission(userRole, PERMISSIONS.CONTENT_CREATE) || 
         hasPermission(userRole, PERMISSIONS.CONTENT_EDIT);
};

/**
 * Check if user can manage other users
 * @param {string} userRole - User's role
 * @returns {boolean} - Whether user can manage users
 */
export const canManageUsers = (userRole) => {
  return hasPermission(userRole, PERMISSIONS.USERS_EDIT);
};

/**
 * Get user capabilities based on role
 * @param {string} userRole - User's role
 * @returns {object} - User capabilities object
 */
export const getUserCapabilities = (userRole) => {
  return {
    canAccessAdmin: canAccessAdmin(userRole),
    canManageContent: canManageContent(userRole),
    canManageUsers: canManageUsers(userRole),
    canViewAnalytics: hasPermission(userRole, PERMISSIONS.ANALYTICS_READ),
    canPublishContent: hasPermission(userRole, PERMISSIONS.CONTENT_PUBLISH),
    canDeleteContent: hasPermission(userRole, PERMISSIONS.CONTENT_DELETE),
    permissions: ROLE_PERMISSIONS[userRole] || []
  };
};
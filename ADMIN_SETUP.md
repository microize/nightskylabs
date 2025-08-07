# Admin Access Setup Guide

## 🔐 How to Become an Admin

The system uses **email-based role assignment** through Google OAuth. Here's how to get admin access:

### Step 1: Add Your Email to Admin List

1. **Open the role configuration file:**
   ```
   night-sky-labs/src/config/userRoles.js
   ```

2. **Add your Google account email to the ADMIN_EMAILS array:**
   ```javascript
   // Admin email whitelist - Add your Google account email here
   export const ADMIN_EMAILS = [
     '3sripathi@gmail.com'
   ];
   ```

3. **Save the file**

### Step 2: Sign In with Google

1. **Visit the sign-in page:**
   http://localhost:3000/signin

2. **Click "Sign in with Google"**

3. **Use the same Google account** whose email you added to the admin list

### Step 3: Access Admin Panel

1. **Navigate to admin panel:**
   http://localhost:3000/admin

2. **You should now see the admin interface** with full access

## 🎯 Role System Explained

### Available Roles

| Role | Permissions | Access Level |
|------|------------|--------------|
| **Admin** | Everything | Full admin panel access |
| **Editor** | Content + Publishing | Limited admin access |
| **Author** | Content creation/editing | Basic admin access |
| **Reader** | View only | No admin access |

### How It Works

1. **Email Detection**: When you sign in with Google, the system checks your email address
2. **Role Assignment**: Based on which email list contains your email, you get assigned a role
3. **Permission Check**: The admin panel checks if you have `canAccessAdmin` capability
4. **Access Granted**: If you have the right permissions, you can access admin features

## 🔧 Customizing Roles

### Adding More Admins
```javascript
export const ADMIN_EMAILS = [
  'admin1@company.com',
  'admin2@company.com',
  'boss@company.com'
];
```

### Adding Editors
```javascript
export const EDITOR_EMAILS = [
  'editor@company.com',
  'content-manager@company.com'
];
```

### Adding Authors
```javascript
export const AUTHOR_EMAILS = [
  'writer@company.com',
  'blogger@company.com'
];
```

## 🚨 Security Notes

1. **Email Verification**: Only verified Google accounts work
2. **Case Insensitive**: Email matching is case-insensitive
3. **Immediate Effect**: Role changes take effect on next login
4. **Client-Side**: This is client-side role assignment (good for development, upgrade to server-side for production)

## 🛠 Troubleshooting

### "Access Denied" Message

**Problem**: You see "You don't have permission to access the admin panel"

**Solutions:**
1. ✅ Check that your email is in the `ADMIN_EMAILS` array
2. ✅ Verify the email matches exactly (no typos)
3. ✅ Sign out and sign in again to refresh your role
4. ✅ Check browser console for any errors

### Admin Panel Not Loading

**Problem**: Admin page shows loading or errors

**Solutions:**
1. ✅ Restart the development server (`npm start`)
2. ✅ Clear browser cache and localStorage
3. ✅ Check that all admin components are created
4. ✅ Verify no console errors

### Role Not Updating

**Problem**: Changes to role config don't take effect

**Solutions:**
1. ✅ Sign out completely (`localStorage.removeItem('nightsky_user')`)
2. ✅ Sign in again with Google
3. ✅ Hard refresh the page (Ctrl+Shift+R)

## 🎉 Quick Test

1. **Add your email** to `ADMIN_EMAILS` in `userRoles.js`
2. **Sign in** at http://localhost:3000/signin
3. **Visit** http://localhost:3000/admin
4. **You should see**: Dashboard, Content, Analytics, and Users tabs

## 🔮 Production Considerations

For production deployment, consider:

- **Server-side role management** with database storage
- **JWT tokens** with role claims
- **API-based permission checking**
- **Audit logging** for admin actions
- **Two-factor authentication** for admin accounts

The current system is perfect for development and small teams!
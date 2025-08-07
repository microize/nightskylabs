# NightSkyLabs - Product-Specific Documentation & CMS Implementation

## Overview

This implementation provides a complete product-specific documentation system with content management backend following industry best practices from Stripe, Atlassian, GitHub, and Notion.

## Architecture

### Frontend (React)
- **Product-Specific Documentation**: Separate docs for Soul CLI, Voice Platform, and Qurious
- **Admin Interface**: Complete CMS for content management
- **API Integration**: Service layer connecting to backend CMS
- **Responsive Design**: Mobile-first with NightSkyLabs design system

### Backend (Node.js/Express)
- **Content Management API**: Full CRUD operations with authentication
- **User Management**: Role-based access control (Admin, Editor, Author, Reader)
- **Analytics Tracking**: Real-time usage analytics and reporting
- **File Upload**: Image and document handling with optimization

## Implementation Details

### 1. Product-Specific Documentation Structure

```
/docs/soul/getting-started/installation
/docs/voice/api-reference/authentication  
/docs/qurious/guides/course-creation
```

**Key Features:**
- Industry-standard navigation patterns
- Breadcrumb navigation with product context
- Search functionality scoped by product
- Table of contents with active section highlighting
- Cross-product navigation

### 2. Content Management System

**Database Schema:**
- Content model with product/section/page organization
- User management with role-based permissions
- Analytics tracking for usage insights
- Version control and changelog support

**API Endpoints:**
```
GET    /api/content                     # List all content
GET    /api/content/product/:productId  # Get product content
POST   /api/content                     # Create content (auth required)
PUT    /api/content/:id                 # Update content (auth required)
DELETE /api/content/:id                 # Delete content (admin only)
```

### 3. Admin Interface

**Features:**
- Dashboard with analytics overview
- Content editor with markdown support
- User management with role assignment
- Real-time content preview
- Bulk operations and search

## Setup Instructions

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment configuration:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB:**
   ```bash
   # Using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   
   # Or install locally
   mongod --dbpath /path/to/your/db
   ```

5. **Start backend server:**
   ```bash
   npm run dev
   ```

   Server runs on http://localhost:5000

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd night-sky-labs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment configuration:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server:**
   ```bash
   npm start
   ```

   Frontend runs on http://localhost:3000

## Usage

### Accessing Documentation

- **General Docs**: http://localhost:3000/docs
- **Soul CLI**: http://localhost:3000/docs/soul
- **Voice Platform**: http://localhost:3000/docs/voice  
- **Qurious**: http://localhost:3000/docs/qurious

### Admin Access

1. **Access admin panel**: http://localhost:3000/admin
2. **Default admin credentials** (create manually in database):
   ```json
   {
     "email": "admin@nightskylabs.com",
     "password": "SecurePassword123!",
     "role": "admin"
   }
   ```

### Content Management

1. **Create Content**: Use admin interface or API
2. **Organize by Product**: Assign content to Soul, Voice, or Qurious
3. **Set Section/Page**: Structure content hierarchically
4. **Publish**: Set status to 'published' to make live

## API Documentation

### Authentication
All protected routes require Bearer token:
```bash
Authorization: Bearer <jwt-token>
```

### Content Operations

**Get Product Documentation:**
```bash
GET /api/content/product/soul/getting-started/installation
```

**Create Content:**
```bash
POST /api/content
Content-Type: application/json

{
  "title": "New Documentation Page",
  "slug": "new-doc-page", 
  "excerpt": "Brief description",
  "content": "# Main Content\n\nMarkdown content here...",
  "contentType": "documentation",
  "productId": "soul",
  "sectionId": "getting-started",
  "pageId": "new-page",
  "category": "Guide",
  "status": "published"
}
```

**Search Content:**
```bash
GET /api/content/search?q=authentication&productId=voice
```

### User Management

**Get Users (Admin Only):**
```bash
GET /api/users
```

**Update User Role (Admin Only):**
```bash
PATCH /api/users/:id/role
Content-Type: application/json

{
  "role": "editor"
}
```

### Analytics

**Get Dashboard Stats:**
```bash
GET /api/analytics/dashboard?days=30
```

**Get Popular Content:**
```bash
GET /api/analytics/popular-content?limit=10
```

## Features

### Documentation System
- ✅ Product-specific organization
- ✅ Hierarchical navigation (Product → Section → Page)
- ✅ Search functionality with product filtering
- ✅ Breadcrumb navigation
- ✅ Table of contents with active scrolling
- ✅ Responsive design
- ✅ Cross-product navigation

### Content Management
- ✅ WYSIWYG/Markdown editor
- ✅ Content versioning and changelog
- ✅ Status management (Draft, Published, Scheduled, Archived)
- ✅ Bulk operations
- ✅ File upload and media management
- ✅ SEO metadata management

### User Management
- ✅ Role-based access control
- ✅ Authentication with JWT
- ✅ User registration/login
- ✅ Permission management
- ✅ Activity tracking

### Analytics
- ✅ Page view tracking
- ✅ User behavior analytics
- ✅ Content performance metrics
- ✅ Dashboard reporting
- ✅ Export capabilities

## Industry Best Practices Implemented

### Stripe-Inspired
- Clean API documentation structure
- Interactive code examples
- Product-specific organization

### GitHub-Style
- Markdown-based content creation
- Version control integration
- Comprehensive search

### Notion-Like
- Hierarchical content organization
- Collaborative editing features
- Rich content types

### Atlassian Standards
- Role-based permissions
- Comprehensive user management
- Enterprise-grade features

## Production Deployment

### Backend Deployment
1. Set `NODE_ENV=production`
2. Use PM2 or similar process manager
3. Configure MongoDB replica set
4. Set up SSL/TLS certificates
5. Configure rate limiting and security headers

### Frontend Deployment
1. Build production bundle: `npm run build`
2. Deploy to CDN or static hosting
3. Configure HTTPS
4. Set up proper caching headers

### Security Considerations
- JWT secret rotation
- Database connection encryption
- File upload restrictions
- Rate limiting implementation
- Input validation and sanitization

## Monitoring & Maintenance

### Health Checks
- Backend: `GET /health`
- Database connectivity monitoring
- File system space monitoring

### Backup Strategy
- MongoDB regular backups
- File upload backup to cloud storage
- Environment configuration backup

## Support & Troubleshooting

### Common Issues
1. **CORS Errors**: Check FRONTEND_URLS in backend .env
2. **Database Connection**: Verify MongoDB is running
3. **File Uploads**: Check upload directory permissions
4. **Authentication**: Verify JWT_SECRET configuration

### Logs
- Backend logs: Console + file logging
- Frontend errors: Browser console
- Database logs: MongoDB logs

## Future Enhancements

- Real-time collaborative editing
- Advanced analytics dashboard
- Multi-language content support
- Advanced search with Elasticsearch
- Content approval workflows
- API rate limiting per user
- Advanced caching strategies
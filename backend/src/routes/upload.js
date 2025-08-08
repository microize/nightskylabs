const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const rateLimit = require('express-rate-limit');
const auth = require('../middleware/auth');
const permissions = require('../middleware/permissions');

// Rate limiting for file uploads
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 uploads per window
  message: {
    success: false,
    message: 'Too many upload attempts, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Comprehensive MIME type and extension validation
  const allowedMimeTypes = [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'image/svg+xml',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'text/markdown'
  ];
  
  const allowedExtensions = /\.(jpeg|jpg|png|gif|svg|pdf|doc|docx|txt|md)$/i;
  
  // Check file extension
  const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
  // Check MIME type
  const mimetype = allowedMimeTypes.includes(file.mimetype);
  
  // Security: Check for double extensions (e.g., file.jpg.exe)
  const filename = file.originalname.toLowerCase();
  const hasDoubleExtension = /\.(exe|bat|cmd|scr|pif|js|jar|com|vbs|ws|wsf)\./.test(filename);
  
  // Reject suspicious filenames
  const suspiciousPatterns = /[<>:"|?*]/;
  const hasSuspiciousChars = suspiciousPatterns.test(file.originalname);
  
  if (mimetype && extname && !hasDoubleExtension && !hasSuspiciousChars) {
    return cb(null, true);
  } else {
    const reason = !mimetype || !extname ? 'Invalid file type' :
                  hasDoubleExtension ? 'Double extension detected' :
                  'Suspicious filename characters';
    cb(new Error(`File rejected: ${reason}. Only safe images, PDFs, and documents are allowed.`));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 5 // Maximum 5 files at once
  },
  fileFilter: fileFilter
});

// Ensure upload directories exist
const ensureUploadDirs = async () => {
  const dirs = [
    'uploads',
    'uploads/images',
    'uploads/documents',
    'uploads/temp'
  ];

  for (const dir of dirs) {
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (error) {
      console.error(`Error creating directory ${dir}:`, error);
    }
  }
};

// Initialize upload directories
ensureUploadDirs();

// Generate unique filename
const generateFileName = (originalName) => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  const ext = path.extname(originalName);
  return `${timestamp}_${random}${ext}`;
};

// Single file upload
router.post('/single', uploadLimiter, auth, permissions.requireRole(['author', 'editor', 'admin']), upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const { buffer, originalname, mimetype, size } = req.file;
    const fileName = generateFileName(originalname);
    const isImage = mimetype.startsWith('image/');
    
    let filePath;
    let processedBuffer = buffer;

    if (isImage) {
      filePath = `uploads/images/${fileName}`;
      
      // Process image with sharp (resize and optimize)
      processedBuffer = await sharp(buffer)
        .resize(1200, 1200, { 
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: 85, progressive: true })
        .toBuffer();
    } else {
      filePath = `uploads/documents/${fileName}`;
    }

    // Save file
    await fs.writeFile(filePath, processedBuffer);

    const fileData = {
      filename: fileName,
      originalName: originalname,
      mimetype: isImage ? 'image/jpeg' : mimetype, // Converted images to JPEG
      size: processedBuffer.length,
      path: filePath,
      url: `${req.protocol}://${req.get('host')}/${filePath}`,
      uploadedBy: req.user.id,
      uploadedAt: new Date()
    };

    res.json({
      success: true,
      message: 'File uploaded successfully',
      data: fileData
    });
  } catch (error) {
    console.error('Single file upload error:', error);
    res.status(500).json({
      success: false,
      message: 'File upload failed',
      error: error.message
    });
  }
});

// Multiple files upload
router.post('/multiple', uploadLimiter, auth, permissions.requireRole(['author', 'editor', 'admin']), upload.array('files', 5), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No files uploaded'
      });
    }

    const uploadResults = [];

    for (const file of req.files) {
      try {
        const { buffer, originalname, mimetype, size } = file;
        const fileName = generateFileName(originalname);
        const isImage = mimetype.startsWith('image/');
        
        let filePath;
        let processedBuffer = buffer;

        if (isImage) {
          filePath = `uploads/images/${fileName}`;
          
          processedBuffer = await sharp(buffer)
            .resize(1200, 1200, { 
              fit: 'inside',
              withoutEnlargement: true
            })
            .jpeg({ quality: 85, progressive: true })
            .toBuffer();
        } else {
          filePath = `uploads/documents/${fileName}`;
        }

        await fs.writeFile(filePath, processedBuffer);

        uploadResults.push({
          filename: fileName,
          originalName: originalname,
          mimetype: isImage ? 'image/jpeg' : mimetype,
          size: processedBuffer.length,
          path: filePath,
          url: `${req.protocol}://${req.get('host')}/${filePath}`,
          uploadedBy: req.user.id,
          uploadedAt: new Date()
        });
      } catch (error) {
        console.error(`Error processing file ${file.originalname}:`, error);
        uploadResults.push({
          originalName: file.originalname,
          error: error.message,
          success: false
        });
      }
    }

    res.json({
      success: true,
      message: 'Files processed',
      data: uploadResults
    });
  } catch (error) {
    console.error('Multiple files upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Files upload failed',
      error: error.message
    });
  }
});

// Generate different image sizes (thumbnails, etc.)
router.post('/image/resize', uploadLimiter, auth, permissions.requireRole(['author', 'editor', 'admin']), upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image uploaded'
      });
    }

    const { buffer, originalname } = req.file;
    const baseName = path.parse(originalname).name;
    const sizes = [
      { name: 'thumbnail', width: 150, height: 150 },
      { name: 'small', width: 300, height: 300 },
      { name: 'medium', width: 600, height: 600 },
      { name: 'large', width: 1200, height: 1200 }
    ];

    const results = [];

    for (const size of sizes) {
      const fileName = `${baseName}_${size.name}_${Date.now()}.jpg`;
      const filePath = `uploads/images/${fileName}`;

      const processedBuffer = await sharp(buffer)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 85 })
        .toBuffer();

      await fs.writeFile(filePath, processedBuffer);

      results.push({
        size: size.name,
        filename: fileName,
        width: size.width,
        height: size.height,
        path: filePath,
        url: `${req.protocol}://${req.get('host')}/${filePath}`,
        fileSize: processedBuffer.length
      });
    }

    res.json({
      success: true,
      message: 'Image resized successfully',
      data: results
    });
  } catch (error) {
    console.error('Image resize error:', error);
    res.status(500).json({
      success: false,
      message: 'Image resize failed',
      error: error.message
    });
  }
});

// Delete uploaded file
router.delete('/:filename', auth, permissions.requireRole(['author', 'editor', 'admin']), async (req, res) => {
  try {
    const { filename } = req.params;
    
    // Security check: ensure filename doesn't contain path traversal
    if (filename.includes('../') || filename.includes('..\\')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid filename'
      });
    }

    const possiblePaths = [
      `uploads/images/${filename}`,
      `uploads/documents/${filename}`,
      `uploads/temp/${filename}`
    ];

    let deleted = false;
    for (const filePath of possiblePaths) {
      try {
        await fs.access(filePath);
        await fs.unlink(filePath);
        deleted = true;
        break;
      } catch (error) {
        // File doesn't exist at this path, continue
      }
    }

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'File not found'
      });
    }

    res.json({
      success: true,
      message: 'File deleted successfully'
    });
  } catch (error) {
    console.error('Delete file error:', error);
    res.status(500).json({
      success: false,
      message: 'File deletion failed',
      error: error.message
    });
  }
});

// Serve uploaded files (public endpoint)
router.use('/images', express.static('uploads/images'));
router.use('/documents', express.static('uploads/documents'));

module.exports = router;
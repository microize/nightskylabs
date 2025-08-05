# NightSkyLabs Local Development Setup

Complete setup instructions for running the NightSkyLabs website locally on Windows and Linux systems.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Windows Setup](#windows-setup)
- [Linux Setup](#linux-setup)
- [Project Setup](#project-setup)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)
- [IDE Configuration](#ide-configuration)

## Prerequisites

### System Requirements
- **Node.js**: Version 16.x or higher (18.x recommended)
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For version control
- **Code Editor**: VS Code recommended
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

### Hardware Requirements
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 2GB free space
- **CPU**: Any modern processor (development server is lightweight)

---

## Windows Setup

### Step 1: Install Node.js and npm

#### Option A: Using Official Installer (Recommended)
1. **Download Node.js**:
   - Visit [nodejs.org](https://nodejs.org/)
   - Download the "LTS" version (Long Term Support)
   - Choose "Windows Installer (.msi)" for your architecture (x64 for most systems)

2. **Run the Installer**:
   ```cmd
   # Double-click the downloaded .msi file
   # Follow the installation wizard
   # ✅ Check "Add to PATH" (should be checked by default)
   # ✅ Check "Install npm package manager"
   ```

3. **Verify Installation**:
   ```cmd
   # Open Command Prompt (cmd) or PowerShell
   node --version
   # Should output: v18.x.x or v16.x.x
   
   npm --version
   # Should output: 8.x.x or higher
   ```

#### Option B: Using Chocolatey (Advanced Users)
```powershell
# Install Chocolatey first (if not installed)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Node.js
choco install nodejs

# Verify installation
node --version
npm --version
```

#### Option C: Using winget (Windows 10/11)
```cmd
# Install Node.js using Windows Package Manager
winget install OpenJS.NodeJS

# Verify installation
node --version
npm --version
```

### Step 2: Install Git

#### Option A: Official Git for Windows
1. **Download**: Visit [git-scm.com](https://git-scm.com/download/win)
2. **Install**: Run the installer with default settings
3. **Verify**:
   ```cmd
   git --version
   # Should output: git version 2.x.x
   ```

#### Option B: Using Package Manager
```powershell
# Using Chocolatey
choco install git

# Using winget
winget install Git.Git
```

### Step 3: Install VS Code (Recommended)

#### Option A: Official Installer
1. **Download**: Visit [code.visualstudio.com](https://code.visualstudio.com/)
2. **Install**: Run the installer
3. **Recommended Extensions**:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier - Code formatter
   - Auto Rename Tag

#### Option B: Using Package Manager
```powershell
# Using Chocolatey
choco install vscode

# Using winget
winget install Microsoft.VisualStudioCode
```

### Step 4: Configure Development Environment

#### PowerShell Execution Policy (if needed)
```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Git Configuration
```cmd
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Linux Setup

### Step 1: Install Node.js and npm

#### Ubuntu/Debian Systems

##### Option A: Using NodeSource Repository (Recommended)
```bash
# Update package index
sudo apt update

# Install curl if not already installed
sudo apt install -y curl

# Add NodeSource repository for Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js and npm
sudo apt install -y nodejs

# Verify installation
node --version  # Should output v18.x.x
npm --version   # Should output 8.x.x or higher
```

##### Option B: Using Package Manager (May have older versions)
```bash
sudo apt update
sudo apt install -y nodejs npm

# Check versions and upgrade if needed
node --version
npm --version

# If versions are too old, use Option A instead
```

##### Option C: Using Snap
```bash
sudo snap install node --classic
```

#### CentOS/RHEL/Fedora Systems

##### For CentOS/RHEL:
```bash
# Install Node.js 18.x repository
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -

# Install Node.js and npm
sudo yum install -y nodejs

# Verify installation
node --version
npm --version
```

##### For Fedora:
```bash
# Using dnf
sudo dnf install -y nodejs npm

# Or using NodeSource repository
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo dnf install -y nodejs
```

#### Arch Linux
```bash
# Update package database
sudo pacman -Sy

# Install Node.js and npm
sudo pacman -S nodejs npm

# Verify installation
node --version
npm --version
```

### Step 2: Install Git

#### Ubuntu/Debian:
```bash
sudo apt update
sudo apt install -y git
```

#### CentOS/RHEL:
```bash
sudo yum install -y git
```

#### Fedora:
```bash
sudo dnf install -y git
```

#### Arch Linux:
```bash
sudo pacman -S git
```

#### Verify Git Installation:
```bash
git --version
```

### Step 3: Install Code Editor

#### VS Code on Linux

##### Ubuntu/Debian:
```bash
# Method 1: Using Snap
sudo snap install --classic code

# Method 2: Using Microsoft Repository
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

##### Fedora:
```bash
# Import Microsoft GPG key
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

# Add repository
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'

# Install
sudo dnf install code
```

##### Arch Linux:
```bash
# Using AUR helper (yay)
yay -S visual-studio-code-bin

# Or using official repositories
sudo pacman -S code
```

### Step 4: Configure Development Environment

#### Git Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Optional: Install build essentials (may be needed for some npm packages)
```bash
# Ubuntu/Debian
sudo apt install -y build-essential

# CentOS/RHEL
sudo yum groupinstall -y "Development Tools"

# Fedora
sudo dnf groupinstall -y "Development Tools"

# Arch Linux
sudo pacman -S base-devel
```

---

## Project Setup

Once you have Node.js, npm, and Git installed on your system, follow these steps:

### Step 1: Clone the Repository

```bash
# Clone the project
git clone <repository-url>
cd nightskylabs

# Navigate to the website directory
cd hello-world-website
```

### Step 2: Install Dependencies

```bash
# Install all project dependencies
npm install

# This will install:
# - React 18.2.0
# - React DOM 18.2.0
# - React Router DOM 6.30.1
# - Tailwind CSS 3.3.0
# - Testing libraries
# - And other dependencies listed in package.json
```

### Step 3: Start Development Server

```bash
# Start the development server
npm start

# The server will start on http://localhost:3000
# Your default browser should automatically open
# If not, manually navigate to http://localhost:3000
```

### Step 4: Verify Setup

1. **Check the website loads**: You should see the NightSkyLabs homepage
2. **Test navigation**: Click through different pages (Soul, Voice, Qurious)
3. **Test responsive design**: Resize your browser window or use mobile view
4. **Check console**: Open browser DevTools (F12) and ensure no errors

---

## Development Workflow

### Available Scripts

```bash
# Start development server (with hot reload)
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Eject from Create React App (⚠️ irreversible)
npm run eject
```

### Development Process

1. **Start development server**:
   ```bash
   npm start
   ```

2. **Make changes**: Edit files in `src/` directory
   - Components: `src/components/`
   - Pages: `src/pages/`
   - Styles: `src/styles/`

3. **Hot reload**: Changes automatically reflect in browser

4. **Test changes**: Use browser DevTools and test responsive design

5. **Build for production** (when ready):
   ```bash
   npm run build
   ```

### File Structure for Development

```
hello-world-website/
├── src/
│   ├── components/           # Edit React components here
│   │   ├── shared/          # Navigation, Footer, etc.
│   │   └── products/        # Product demos
│   ├── pages/               # Add/edit page components
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Global CSS
│   └── views/               # Main view components
├── public/                  # Static files (don't edit)
├── package.json             # Dependencies (don't edit manually)
└── tailwind.config.js       # Tailwind customization
```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: Node.js or npm not found
```bash
# Windows
echo $env:PATH
# Should include Node.js installation path

# Linux/macOS
echo $PATH
# Should include /usr/local/bin or similar
```

**Solution**: Reinstall Node.js and ensure "Add to PATH" is checked

#### Issue: Permission errors on Linux/macOS
```bash
# Error: EACCES permission denied
npm install -g npm  # This might fail

# Solution: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### Issue: Port 3000 already in use
```bash
# Error: Something is already running on port 3000

# Solution 1: Kill process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/macOS
lsof -ti:3000 | xargs kill -9

# Solution 2: Use different port
PORT=3001 npm start
```

#### Issue: npm install fails with network errors
```bash
# Clear npm cache
npm cache clean --force

# Try with different registry
npm install --registry https://registry.npmjs.org/

# Or set permanently
npm config set registry https://registry.npmjs.org/
```

#### Issue: Tailwind styles not working
1. **Check if Tailwind is installed**:
   ```bash
   npm list tailwindcss
   ```

2. **Rebuild if necessary**:
   ```bash
   npm run build
   ```

3. **Check tailwind.config.js** exists and is properly configured

#### Issue: Git clone fails
```bash
# If using HTTPS and getting authentication errors
git config --global credential.helper store

# Or use SSH instead
git clone git@github.com:username/repo.git
```

### Performance Issues

#### Slow npm install
```bash
# Use faster package manager
npm install -g yarn
yarn install  # Instead of npm install

# Or use npm with parallel downloads
npm install --parallel
```

#### Slow development server
```bash
# Disable source maps in development (if needed)
GENERATE_SOURCEMAP=false npm start

# Or increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=8192" npm start
```

### Windows-Specific Issues

#### PowerShell execution policy errors
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Long path issues
```cmd
# Enable long paths in Windows 10/11
git config --system core.longpaths true
```

### Linux-Specific Issues

#### Permission denied for global npm packages
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

#### Missing build tools
```bash
# Ubuntu/Debian
sudo apt install build-essential python3

# CentOS/RHEL
sudo yum groupinstall "Development Tools"
```

---

## IDE Configuration

### VS Code Recommended Settings

Create `.vscode/settings.json` in project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "html"
  }
}
```

### Recommended VS Code Extensions

Install these extensions for better development experience:

```bash
# Install via VS Code Extensions panel or command line
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension formulahendry.auto-rename-tag
code --install-extension christian-kohler.path-intellisense
```

### Browser DevTools Setup

1. **Install React Developer Tools**:
   - Chrome: Search "React Developer Tools" in Chrome Web Store
   - Firefox: Search in Firefox Add-ons

2. **Enable React DevTools**:
   - Open DevTools (F12)
   - Look for "Components" and "Profiler" tabs

---

## Quick Start Summary

### Windows (Command Prompt)
```cmd
# 1. Install Node.js from nodejs.org
# 2. Clone and setup
git clone <repo-url>
cd nightskylabs\hello-world-website
npm install
npm start
```

### Linux (Terminal)
```bash
# 1. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Clone and setup  
git clone <repo-url>
cd nightskylabs/hello-world-website
npm install
npm start
```

### Verification Checklist
- [ ] Node.js version 16+ installed
- [ ] npm version 8+ installed  
- [ ] Git installed and configured
- [ ] Project cloned successfully
- [ ] Dependencies installed without errors
- [ ] Development server starts on localhost:3000
- [ ] Website loads and navigation works
- [ ] No console errors in browser DevTools

---

**Need Help?** 
- Check the [Troubleshooting](#troubleshooting) section
- Contact: hello@nightskylabs.com
- Open an issue in the project repository
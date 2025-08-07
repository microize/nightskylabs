---
title: "Troubleshooting Common Issues"
excerpt: "Solutions to frequently encountered problems with NightSkyLabs AI products and services."
author: "Support Team"
date: "2025-01-15"
tags: ["Troubleshooting", "FAQ", "Support", "Common Issues"]
category: "Troubleshooting"
featured: true
difficulty: "All Levels"
lastUpdated: "2025-01-15"
---

# Troubleshooting Common Issues

This guide covers the most frequently reported issues across all NightSkyLabs products and their solutions.

## Soul CLI Issues

### Installation Problems

#### Issue: "Command not found: soul"
**Cause**: Soul CLI not properly installed or not in PATH

**Solution**:
```bash
# Check if installed
npm list -g @nightskylabs/soul-cli

# If not installed
npm install -g @nightskylabs/soul-cli

# If installed but not in PATH
echo 'export PATH="$PATH:$(npm config get prefix)/bin"' >> ~/.bashrc
source ~/.bashrc
```

#### Issue: "Permission denied" during installation
**Cause**: Insufficient permissions for global npm install

**Solution**:
```bash
# Option 1: Use sudo (not recommended)
sudo npm install -g @nightskylabs/soul-cli

# Option 2: Configure npm prefix (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm install -g @nightskylabs/soul-cli
```

### Authentication Issues

#### Issue: "Authentication failed" or "Invalid API key"
**Cause**: Expired or incorrect authentication credentials

**Solution**:
```bash
# Clear existing auth
soul auth logout

# Re-authenticate
soul auth login

# Verify authentication
soul auth whoami
```

#### Issue: "Network timeout" during authentication
**Cause**: Network connectivity or firewall issues

**Solution**:
```bash
# Check connection
curl -I https://api.nightskylabs.com

# Configure proxy if needed
soul config set proxy http://your-proxy:8080

# Try alternative authentication
export SOUL_API_KEY="your-api-key"
soul auth verify
```

### Performance Issues

#### Issue: Soul CLI running slowly
**Cause**: Large codebase or insufficient system resources

**Solution**:
```bash
# Exclude large directories
soul analyze --exclude node_modules,dist,build,.git

# Limit analysis scope
soul analyze --files-limit 1000

# Clear cache
soul cache --clear

# Check system resources
soul system --info
```

#### Issue: High memory usage
**Cause**: Large files being analyzed simultaneously

**Solution**:
```bash
# Configure memory limits
soul config set memory-limit 4GB

# Process files in batches
soul analyze --batch-size 10

# Use lightweight mode
soul analyze --mode lightweight
```

## Voice AI Issues

### Audio Problems

#### Issue: "Microphone not detected"
**Cause**: Browser permissions or hardware issues

**Solution**:
1. **Check browser permissions**:
   - Chrome: Settings → Privacy and Security → Site Settings → Microphone
   - Allow access for your domain

2. **Test microphone**:
   ```javascript
   navigator.mediaDevices.getUserMedia({ audio: true })
     .then(stream => console.log('Microphone working'))
     .catch(err => console.error('Microphone error:', err));
   ```

3. **Clear browser data**: Clear cookies and site data for the domain

#### Issue: Poor audio quality or dropouts
**Cause**: Network issues or audio settings

**Solution**:
1. **Check network**: Test with speed test, ensure stable connection
2. **Adjust quality**: Lower audio quality in settings if needed
3. **Close other apps**: Free up bandwidth and CPU resources
4. **Use wired connection**: Switch from WiFi to ethernet if possible

### Interview Platform Issues

#### Issue: "Session expired" during interview
**Cause**: Long periods of inactivity or network disconnection

**Solution**:
1. **Refresh the page** and rejoin the session
2. **Check session limits**: Most sessions are limited to 2 hours
3. **Contact support**: If data appears lost, contact support immediately

#### Issue: Responses not being recorded
**Cause**: Browser compatibility or permission issues

**Solution**:
1. **Use supported browsers**: Chrome 90+, Firefox 88+, Safari 14+
2. **Enable permissions**: Allow microphone and camera access
3. **Disable extensions**: Temporarily disable browser extensions
4. **Test in incognito mode**: Check if the issue persists

## Qurious Learning Platform Issues

### Login and Access

#### Issue: "Account not found" or login failures
**Cause**: Incorrect credentials or account issues

**Solution**:
1. **Reset password**: Use forgot password link
2. **Check email**: Verify the email address is correct
3. **Account activation**: Check email for activation link
4. **Contact admin**: For institutional accounts, contact your administrator

#### Issue: Course content not loading
**Cause**: Browser cache or connectivity issues

**Solution**:
```bash
# Clear browser cache
# Chrome: Ctrl+Shift+Delete
# Firefox: Ctrl+Shift+Delete
# Safari: Cmd+Option+E

# Try different browser
# Test with incognito/private mode
```

### Learning Progress Issues

#### Issue: Progress not saving
**Cause**: Network disconnection or browser issues

**Solution**:
1. **Check connection**: Ensure stable internet connection
2. **Manual save**: Click save button if available
3. **Avoid rapid navigation**: Allow time for auto-save to complete
4. **Browser compatibility**: Use updated, supported browsers

#### Issue: Incorrect difficulty levels
**Cause**: AI adaptation needs more data or manual override needed

**Solution**:
1. **Provide feedback**: Use difficulty adjustment buttons
2. **Complete more exercises**: AI improves with more data
3. **Manual adjustment**: Contact support for manual difficulty reset
4. **Review prerequisites**: Ensure foundational knowledge is solid

## General Issues

### Account and Billing

#### Issue: Subscription or billing problems
**Cause**: Payment method issues or account status

**Solution**:
1. **Check payment method**: Verify card details and expiration
2. **Review billing**: Check for failed payments or overdue amounts
3. **Contact billing support**: Email billing@nightskylabs.com
4. **Account status**: Verify account is in good standing

#### Issue: Feature access denied
**Cause**: Subscription tier limitations or permissions

**Solution**:
1. **Check subscription**: Verify your current plan includes the feature
2. **Account permissions**: For team accounts, check user permissions
3. **Upgrade plan**: Consider upgrading for additional features
4. **Trial access**: Some features may have trial periods

### Browser Compatibility

#### Supported Browsers
- **Chrome**: Version 90 or higher ✅
- **Firefox**: Version 88 or higher ✅
- **Safari**: Version 14 or higher ✅
- **Edge**: Version 90 or higher ✅

#### Unsupported Browsers
- Internet Explorer (all versions) ❌
- Chrome versions below 90 ❌
- Mobile browsers (limited support) ⚠️

### Network and Connectivity

#### Issue: Slow loading or timeouts
**Cause**: Network congestion or server issues

**Solution**:
1. **Check status page**: Visit status.nightskylabs.com
2. **Test connection**: Run speed test, check latency
3. **Try different location**: Use VPN if regional issues
4. **Contact support**: Report persistent issues

#### Issue: Features not working behind corporate firewall
**Cause**: Firewall blocking required domains or ports

**Solution**:
1. **Whitelist domains**:
   - *.nightskylabs.com
   - *.nightskycdn.com
   - api.nightskylabs.com

2. **Required ports**: 443 (HTTPS), 80 (HTTP)
3. **WebSocket support**: Ensure WebSocket connections are allowed
4. **Contact IT**: Work with your IT team for proper configuration

## Getting Additional Help

### Self-Service Resources
- **Knowledge Base**: Browse all help articles
- **Video Tutorials**: Step-by-step video guides
- **API Documentation**: Technical reference materials
- **Community Forum**: Ask questions and share solutions

### Contact Support
- **Email**: support@nightskylabs.com
- **Live Chat**: Available 9 AM - 6 PM EST
- **Priority Support**: Available for Pro and Enterprise plans
- **Emergency Contact**: For critical issues affecting production systems

### When Contacting Support

Please include:
1. **Product name** and version
2. **Browser type** and version
3. **Operating system**
4. **Steps to reproduce** the issue
5. **Screenshots or error messages**
6. **Account email** address

Our typical response times:
- **General inquiries**: 24 hours
- **Technical issues**: 12 hours  
- **Billing questions**: 8 hours
- **Critical/Production**: 2 hours (Pro/Enterprise)
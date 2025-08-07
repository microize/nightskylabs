---
title: "Getting Started with Soul CLI"
excerpt: "Complete guide to installing, configuring, and using Soul CLI for AI-powered development workflows."
author: "NightSkyLabs Team"
date: "2025-01-15"
tags: ["Soul CLI", "Getting Started", "Installation", "Setup"]
category: "API Reference"
featured: true
difficulty: "Beginner"
estimatedTime: "10 minutes"
---

# Getting Started with Soul CLI

Soul CLI is an AI-powered command-line tool that transforms your development workflow by providing intelligent code analysis, automated refactoring, and natural language programming assistance.

## Installation

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager
- Git (for repository analysis)

### Install Soul CLI

```bash
# Install globally via npm
npm install -g @nightskylabs/soul-cli

# Or using yarn
yarn global add @nightskylabs/soul-cli

# Verify installation
soul --version
```

![Soul CLI Installation|Screenshot showing successful Soul CLI installation|w-full max-w-3xl](soul-installation.png)

## Initial Setup

### Authentication
```bash
# Login to your NightSkyLabs account
soul auth login

# Verify authentication
soul auth whoami
```

### Project Configuration
```bash
# Initialize Soul in your project
cd your-project
soul init

# This creates a .soul directory with:
# - Configuration files
# - Local AI model cache
# - Project analysis data
```

## Basic Usage

### Natural Language Commands
Soul CLI understands natural language instructions:

```bash
# Code analysis
soul "analyze this component for performance issues"

# Refactoring
soul "extract this logic into a reusable function"

# Testing
soul "generate unit tests for the authentication module"

# Documentation
soul "add JSDoc comments to all public methods"
```

### File-Specific Operations
```bash
# Analyze specific files
soul analyze src/components/UserProfile.js

# Optimize a file
soul optimize --file src/utils/dataProcessor.js

# Generate tests
soul test --generate src/services/apiClient.js
```

## Configuration

### .soul/config.json
```json
{
  "version": "1.0",
  "preferences": {
    "codeStyle": "airbnb",
    "testFramework": "jest",
    "language": "javascript",
    "aiModel": "soul-dev-v2"
  },
  "integrations": {
    "git": true,
    "eslint": true,
    "prettier": true
  }
}
```

### Environment Variables
```bash
# Set API key (alternative to auth login)
export SOUL_API_KEY="your-api-key"

# Custom model endpoint
export SOUL_API_ENDPOINT="https://api.nightskylabs.com"

# Debug mode
export SOUL_DEBUG=true
```

## Core Features

### 1. Intelligent Code Analysis
```bash
# Full project analysis
soul analyze

# Specific analysis types
soul analyze --security
soul analyze --performance  
soul analyze --maintainability
```

### 2. Automated Refactoring
```bash
# Smart refactoring suggestions
soul refactor --suggest

# Apply specific refactoring
soul refactor --extract-function --selection "line:10-25"

# Rename with context awareness
soul refactor --rename oldFunction newFunction
```

### 3. Test Generation
```bash
# Generate comprehensive tests
soul test --generate --coverage 90

# Generate specific test types
soul test --unit src/utils/
soul test --integration src/api/
```

### 4. Documentation Generation
```bash
# Generate README
soul docs --readme

# API documentation
soul docs --api

# Code comments
soul docs --comments
```

## Integration Examples

### With Git Hooks
```bash
# Pre-commit hook
soul analyze --staged --fail-on-issues

# Pre-push hook  
soul test --verify --coverage-threshold 85
```

### With CI/CD
```yaml
# GitHub Actions example
- name: Soul CLI Analysis
  run: |
    soul analyze --reporter json > analysis.json
    soul test --generate --dry-run
```

### With IDEs
```bash
# VS Code integration
soul ide --vscode --install-extension

# WebStorm integration  
soul ide --webstorm --setup
```

## Best Practices

1. **Regular Analysis**: Run `soul analyze` daily
2. **Descriptive Commands**: Use natural language for better results
3. **Iterative Refactoring**: Apply suggestions gradually
4. **Test Coverage**: Maintain high test coverage with `soul test`
5. **Team Consistency**: Share `.soul/config.json` across team

## Troubleshooting

### Common Issues

**Authentication Errors**
```bash
# Clear and re-authenticate
soul auth logout
soul auth login
```

**Performance Issues**
```bash
# Clear cache
soul cache --clear

# Reduce analysis scope
soul analyze --exclude node_modules,dist
```

**Model Loading Issues**
```bash
# Download latest models
soul update --models

# Check model status
soul models --status
```

## Next Steps

- [API Reference](./soul-cli-api-reference) - Complete command reference
- [Advanced Usage](./soul-cli-advanced) - Power user features  
- [Integrations](./soul-cli-integrations) - IDE and tool integrations
- [Examples](./soul-cli-examples) - Real-world usage examples

Need help? Check our [Help Center](../../help) or join the community discussions.
/**
 * Case study content utilities
 * Handles loading and processing of case studies
 */

import { generateCategories as baseGenerateCategories } from './contentUtils';

// Load case study content
export const loadCaseStudies = async () => {
  try {
    // In a real application, this would fetch from an API or load from files
    // For now, returning mock data based on industry best practices
    
    const caseStudies = [
      {
        id: 'fintech-ai-transformation',
        title: 'FinTech AI Transformation: 40% Faster Loan Processing',
        slug: 'fintech-ai-transformation',
        date: '2024-11-15',
        client: 'Global Financial Services',
        industry: 'Financial Services',
        category: 'AI Transformation',
        challenge: 'Manual loan processing was taking 2-3 weeks, creating customer friction and competitive disadvantage.',
        solution: 'Implemented AI-powered document analysis, risk assessment algorithms, and automated decision workflows.',
        results: '40% reduction in processing time, 25% improvement in accuracy, $2M annual cost savings',
        technologies: ['Machine Learning', 'Computer Vision', 'NLP', 'API Integration'],
        excerpt: 'How we transformed a traditional financial institution\'s loan processing with AI, achieving dramatic improvements in speed and accuracy.',
        description: 'Complete digital transformation of loan processing systems using advanced AI technologies, resulting in significant operational improvements and customer satisfaction gains.',
        image: '/images/case-studies/fintech-transformation.jpg',
        content: `# FinTech AI Transformation Case Study

## Challenge
Our client, a major financial services company, was struggling with slow manual loan processing that took 2-3 weeks to complete. This created customer dissatisfaction and put them at a competitive disadvantage.

## Solution
We implemented a comprehensive AI solution that included:
- Automated document analysis using computer vision
- AI-powered risk assessment algorithms  
- Intelligent decision workflow automation
- Real-time processing dashboard

## Implementation
The project was completed in 3 phases over 6 months:
1. **Discovery & Planning** (2 months)
2. **Development & Integration** (3 months)  
3. **Testing & Deployment** (1 month)

## Results
- **40% faster processing** - Reduced average processing time from 18 days to 11 days
- **25% improved accuracy** - AI-powered risk assessment reduced human error
- **$2M annual savings** - Reduced operational costs through automation
- **95% customer satisfaction** - Improved customer experience scores

## Technologies Used
- TensorFlow for machine learning models
- OpenCV for document processing
- Natural Language Processing for text analysis
- REST APIs for system integration`,
        tags: ['Fintech', 'Automation', 'Cost Reduction'],
        featured: true,
        duration: '6 months',
        teamSize: '8 people'
      },
      {
        id: 'healthcare-predictive-analytics',
        title: 'Healthcare Predictive Analytics: 30% Reduction in Readmissions',
        slug: 'healthcare-predictive-analytics',
        date: '2024-10-20',
        client: 'Regional Hospital Network',
        industry: 'Healthcare',
        category: 'Predictive Analytics',
        challenge: 'High patient readmission rates were affecting quality scores and increasing costs.',
        solution: 'Built predictive models to identify high-risk patients and implemented intervention protocols.',
        results: '30% reduction in 30-day readmissions, improved patient outcomes, $5M cost avoidance',
        technologies: ['Python', 'Scikit-learn', 'Healthcare APIs', 'Dashboard Development'],
        excerpt: 'Leveraging predictive analytics to identify high-risk patients and reduce hospital readmissions through proactive interventions.',
        description: 'Implementation of machine learning models to predict patient readmission risk, enabling proactive care management and significantly improving patient outcomes.',
        image: '/images/case-studies/healthcare-analytics.jpg',
        content: `# Healthcare Predictive Analytics

## Overview
Developed predictive models to identify patients at high risk of readmission, enabling proactive interventions.

## Key Achievements
- 30% reduction in readmissions
- $5M cost avoidance
- Improved patient satisfaction scores`,
        tags: ['Healthcare', 'Predictive Analytics', 'Patient Care'],
        duration: '4 months',
        teamSize: '6 people'
      },
      {
        id: 'retail-personalization-engine',
        title: 'E-commerce Personalization: 45% Increase in Conversions',
        slug: 'retail-personalization-engine',
        date: '2024-09-10',
        client: 'Major E-commerce Platform',
        industry: 'Retail & E-commerce',
        category: 'Personalization',
        challenge: 'Generic product recommendations were leading to low conversion rates and poor user engagement.',
        solution: 'Developed advanced recommendation engine using collaborative filtering and deep learning.',
        results: '45% increase in conversions, 60% improvement in click-through rates, $10M additional revenue',
        technologies: ['TensorFlow', 'Apache Spark', 'Real-time Analytics', 'A/B Testing'],
        excerpt: 'Building an AI-powered personalization engine that dramatically improved e-commerce conversion rates and customer engagement.',
        description: 'Advanced recommendation system implementation that uses machine learning to deliver personalized shopping experiences, resulting in significant revenue growth.',
        image: '/images/case-studies/retail-personalization.jpg',
        content: `# E-commerce Personalization Engine

## The Challenge
Low conversion rates due to generic product recommendations that didn't match customer preferences.

## Our Solution
Built a sophisticated recommendation engine using:
- Collaborative filtering algorithms
- Deep learning for user behavior analysis
- Real-time personalization
- A/B testing framework

## Impact
- 45% increase in conversion rates
- 60% improvement in click-through rates  
- $10M additional annual revenue`,
        tags: ['Retail', 'Personalization', 'Revenue Growth'],
        featured: true,
        duration: '5 months',
        teamSize: '10 people'
      },
      {
        id: 'manufacturing-quality-control',
        title: 'Smart Manufacturing: 95% Defect Detection Accuracy',
        slug: 'manufacturing-quality-control',
        date: '2024-08-05',
        client: 'Automotive Manufacturer',
        industry: 'Manufacturing',
        category: 'Quality Control',
        challenge: 'Manual quality inspection was slow and inconsistent, leading to defects reaching customers.',
        solution: 'Implemented computer vision system for automated defect detection on production lines.',
        results: '95% detection accuracy, 70% faster inspection, 50% reduction in customer complaints',
        technologies: ['Computer Vision', 'Edge Computing', 'IoT Sensors', 'Real-time Processing'],
        excerpt: 'Transforming manufacturing quality control with AI-powered visual inspection systems for superior defect detection.',
        description: 'Computer vision implementation for automated quality control in manufacturing, achieving near-perfect defect detection rates and significantly improving product quality.',
        image: '/images/case-studies/manufacturing-qc.jpg',
        content: `# Smart Manufacturing Quality Control

## Problem Statement
Manual inspection processes were slow, inconsistent, and allowed defects to reach customers.

## AI Solution
Deployed computer vision systems with:
- High-resolution cameras on production lines
- Real-time image analysis
- Machine learning defect classification
- Automated rejection system

## Business Impact
- 95% defect detection accuracy
- 70% faster inspection process
- 50% reduction in customer complaints
- ROI achieved in 8 months`,
        tags: ['Manufacturing', 'Quality Control', 'Computer Vision'],
        duration: '7 months',
        teamSize: '12 people'
      }
    ];

    return caseStudies;
  } catch (error) {
    console.error('Error loading case studies:', error);
    return [];
  }
};

// Generate categories specific to case study content
export const generateCaseStudyCategories = (caseStudies) => {
  return baseGenerateCategories(caseStudies, 'case-studies');
};

// Get case study by slug
export const getCaseStudyBySlug = async (slug) => {
  const caseStudies = await loadCaseStudies();
  return caseStudies.find(study => study.slug === slug);
};

// Filter case studies by industry
export const filterByIndustry = (caseStudies, industry) => {
  if (!industry || industry === 'All') return caseStudies;
  return caseStudies.filter(study => study.industry === industry);
};

// Get featured case studies
export const getFeaturedCaseStudies = async (limit = 2) => {
  const caseStudies = await loadCaseStudies();
  return caseStudies
    .filter(study => study.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Get case studies by industry
export const getCaseStudiesByIndustry = async (industry, limit = null) => {
  const caseStudies = await loadCaseStudies();
  let filtered = caseStudies.filter(study => study.industry === industry);
  
  if (limit) {
    filtered = filtered.slice(0, limit);
  }
  
  return filtered;
};

// Get recent case studies
export const getRecentCaseStudies = async (limit = 4) => {
  const caseStudies = await loadCaseStudies();
  return caseStudies
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};
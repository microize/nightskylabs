/**
 * Research content utilities
 * Handles loading and processing of research papers and publications
 */

import { generateCategories as baseGenerateCategories } from './contentUtils';

// Load research content
export const loadResearchPapers = async () => {
  try {
    // In a real application, this would fetch from an API or load from files
    // For now, returning mock data based on the existing research content structure
    
    const researchPapers = [
      {
        id: 'neural-network-optimization',
        title: 'Neural Network Optimization Techniques for Large-Scale AI Systems',
        slug: 'neural-network-optimization',
        date: '2024-12-15',
        author: 'Dr. Sarah Chen',
        authorAvatar: '/images/authors/sarah-chen.jpg',
        methodology: 'Deep Learning',
        category: 'Machine Learning',
        keywords: ['Neural Networks', 'Optimization', 'Deep Learning', 'Performance Tuning'],
        abstract: 'This paper explores advanced optimization techniques for neural networks in large-scale AI systems, focusing on computational efficiency and scalability challenges.',
        excerpt: 'A comprehensive analysis of modern optimization techniques for neural networks, addressing the challenges of training large-scale AI models efficiently.',
        summary: 'Research into optimization methods that can significantly improve the training speed and performance of large neural networks while maintaining accuracy.',
        image: '/images/research/neural-optimization.jpg',
        content: `# Neural Network Optimization Techniques

## Introduction

The rapid growth of artificial intelligence applications has created an urgent need for more efficient neural network training methods. This research addresses the computational challenges faced when scaling neural networks to handle enterprise-level workloads.

## Methodology

Our approach combines several optimization techniques:
- Adaptive learning rate schedules
- Gradient compression algorithms
- Memory-efficient backpropagation
- Distributed training optimizations

## Key Findings

1. **Performance Improvements**: Our optimization techniques achieved a 40% reduction in training time
2. **Memory Efficiency**: Reduced memory usage by 35% without accuracy loss
3. **Scalability**: Successfully scaled to models with over 100 billion parameters

## Conclusion

The proposed optimization techniques demonstrate significant improvements in both training efficiency and resource utilization for large-scale neural networks.`,
        tags: ['AI', 'Performance', 'Scalability', 'Research'],
        readingTime: 12,
        featured: true
      },
      {
        id: 'conversational-ai-ethics',
        title: 'Ethical Considerations in Conversational AI Development',
        slug: 'conversational-ai-ethics',
        date: '2024-11-20',
        author: 'Prof. Michael Rodriguez',
        methodology: 'Qualitative Analysis',
        category: 'AI Ethics',
        keywords: ['AI Ethics', 'Conversational AI', 'Bias', 'Fairness'],
        abstract: 'An examination of ethical challenges and proposed solutions for developing responsible conversational AI systems.',
        excerpt: 'Exploring the ethical implications of conversational AI systems and proposing frameworks for responsible development and deployment.',
        image: '/images/research/ai-ethics.jpg',
        content: `# Ethical Considerations in Conversational AI

## Abstract

This research examines the ethical challenges inherent in conversational AI systems and proposes frameworks for responsible development.

## Key Ethical Challenges

- Bias in training data
- Privacy concerns
- Transparency requirements
- User manipulation risks

## Proposed Solutions

Our research suggests implementing comprehensive ethical guidelines throughout the development lifecycle.`,
        tags: ['Ethics', 'AI Policy', 'Responsible AI'],
        readingTime: 15
      },
      {
        id: 'quantum-ml-integration',
        title: 'Quantum-Classical Machine Learning Integration Patterns',
        slug: 'quantum-ml-integration',
        date: '2024-10-05',
        author: 'Dr. Elena Vasquez',
        methodology: 'Experimental',
        category: 'Quantum Computing',
        keywords: ['Quantum Computing', 'Machine Learning', 'Hybrid Systems'],
        abstract: 'Investigation of hybrid quantum-classical machine learning architectures and their practical applications.',
        excerpt: 'Research into the integration of quantum computing with classical machine learning systems for enhanced computational capabilities.',
        image: '/images/research/quantum-ml.jpg',
        content: `# Quantum-Classical ML Integration

## Introduction

The intersection of quantum computing and machine learning represents a frontier of computational possibility.

## Experimental Setup

We tested various hybrid architectures combining quantum circuits with classical neural networks.

## Results

Preliminary results show promising improvements in specific optimization problems.`,
        tags: ['Quantum Computing', 'Future Tech', 'Innovation'],
        readingTime: 18
      }
    ];

    return researchPapers;
  } catch (error) {
    console.error('Error loading research papers:', error);
    return [];
  }
};

// Generate categories specific to research content
export const generateResearchCategories = (papers) => {
  return baseGenerateCategories(papers, 'research');
};

// Get research paper by slug
export const getResearchPaperBySlug = async (slug) => {
  const papers = await loadResearchPapers();
  return papers.find(paper => paper.slug === slug);
};

// Filter research papers by methodology
export const filterByMethodology = (papers, methodology) => {
  if (!methodology || methodology === 'All') return papers;
  return papers.filter(paper => paper.methodology === methodology);
};

// Get featured research papers
export const getFeaturedResearch = async (limit = 3) => {
  const papers = await loadResearchPapers();
  return papers
    .filter(paper => paper.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Get recent research papers
export const getRecentResearch = async (limit = 5) => {
  const papers = await loadResearchPapers();
  return papers
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};
export const filterPostsBySearch = (posts, searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return posts;
  }

  const term = searchTerm.toLowerCase().trim();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(term) ||
    post.excerpt.toLowerCase().includes(term) ||
    post.author.toLowerCase().includes(term) ||
    post.tags.some(tag => tag.toLowerCase().includes(term)) ||
    post.category.toLowerCase().includes(term)
  );
};

export const filterPostsByCategory = (posts, category) => {
  if (!category || category === 'All') {
    return posts;
  }
  
  return posts.filter(post => post.category === category);
};

export const filterPostsByTag = (posts, tag) => {
  if (!tag) {
    return posts;
  }
  
  return posts.filter(post => post.tags.includes(tag));
};

export const sortPostsByDate = (posts, ascending = false) => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

export const paginatePosts = (posts, page = 1, postsPerPage = 6) => {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  return {
    posts: posts.slice(startIndex, endIndex),
    totalPages: Math.ceil(posts.length / postsPerPage),
    currentPage: page,
    totalPosts: posts.length,
    hasNextPage: endIndex < posts.length,
    hasPrevPage: page > 1
  };
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};
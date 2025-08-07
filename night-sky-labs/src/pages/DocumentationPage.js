import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import DocumentationContainer from '../components/features/documentation/DocumentationContainer';

const DocumentationPage = () => {
  return (
    <div className="relative w-full bg-white">
      <Navigation currentPage="resources" />
      
      {/* Full-height documentation interface with proper top spacing */}
      <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
        <DocumentationContainer />
      </div>
    </div>
  );
};

export default DocumentationPage;
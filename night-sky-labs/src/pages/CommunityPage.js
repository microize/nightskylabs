import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import CommunityContainer from '../components/features/community/CommunityContainer';

const CommunityPage = () => {
  return (
    <div className="relative w-full bg-white">
      <Navigation currentPage="resources" />
      
      {/* Full-height community interface with proper top spacing */}
      <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
        <CommunityContainer />
      </div>
    </div>
  );
};

export default CommunityPage;
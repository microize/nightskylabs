import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import HelpCenterContainer from '../components/features/help/HelpCenterContainer';

const HelpCenterPage = () => {
  return (
    <div className="relative w-full bg-white">
      <Navigation currentPage="resources" />
      
      {/* Full-height help center interface with proper top spacing */}
      <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
        <HelpCenterContainer />
      </div>
    </div>
  );
};

export default HelpCenterPage;
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/shared/ErrorBoundary';

// Lazy load components for better performance
const HomeView = React.lazy(() => import('./views/HomeView'));
const SoulPage = React.lazy(() => import('./pages/SoulPage'));
const VoicePage = React.lazy(() => import('./pages/VoicePage'));
const QuriousPage = React.lazy(() => import('./pages/QuriousPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const ResearchPage = React.lazy(() => import('./pages/ResearchPage'));
const DocumentationPage = React.lazy(() => import('./pages/DocumentationPage'));
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenterPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const IndustriesPage = React.lazy(() => import('./pages/IndustriesPage'));
const CareersPage = React.lazy(() => import('./pages/CareersPage'));
const InvestorsPage = React.lazy(() => import('./pages/InvestorsPage'));
const PressPage = React.lazy(() => import('./pages/PressPage'));
const OurStoryPage = React.lazy(() => import('./pages/OurStoryPage'));
const LeadershipPage = React.lazy(() => import('./pages/LeadershipPage'));
const AIEthicsPage = React.lazy(() => import('./pages/AIEthicsPage'));
const AIStrategyPage = React.lazy(() => import('./pages/services/AIStrategyPage'));
const AutomationDesignPage = React.lazy(() => import('./pages/services/AutomationDesignPage'));
const BehavioralAnalysisPage = React.lazy(() => import('./pages/services/BehavioralAnalysisPage'));
const SystemIntegrationPage = React.lazy(() => import('./pages/services/SystemIntegrationPage'));
const CustomDevelopmentPage = React.lazy(() => import('./pages/services/CustomDevelopmentPage'));
const TechnicalIntegrationPage = React.lazy(() => import('./pages/services/TechnicalIntegrationPage'));
const DeploymentOptimizationPage = React.lazy(() => import('./pages/services/DeploymentOptimizationPage'));
const PerformanceAnalysisPage = React.lazy(() => import('./pages/services/PerformanceAnalysisPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-sm font-thin text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/soul" element={<SoulPage />} />
              <Route path="/voice" element={<VoicePage />} />
              <Route path="/qurious" element={<QuriousPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/help" element={<HelpCenterPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/investors" element={<InvestorsPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/our-story" element={<OurStoryPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/ai-ethics" element={<AIEthicsPage />} />
              <Route path="/services/ai-strategy" element={<AIStrategyPage />} />
              <Route path="/services/automation-design" element={<AutomationDesignPage />} />
              <Route path="/services/behavioral-analysis" element={<BehavioralAnalysisPage />} />
              <Route path="/services/system-integration" element={<SystemIntegrationPage />} />
              <Route path="/services/custom-development" element={<CustomDevelopmentPage />} />
              <Route path="/services/technical-integration" element={<TechnicalIntegrationPage />} />
              <Route path="/services/deployment-optimization" element={<DeploymentOptimizationPage />} />
              <Route path="/services/performance-analysis" element={<PerformanceAnalysisPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={
                <div className="min-h-screen bg-white flex items-center justify-center px-6">
                  <div className="text-center max-w-md">
                    <h2 className="text-3xl font-thin text-black mb-4">Page Not Found</h2>
                    <p className="text-base font-thin text-gray-600 mb-8">
                      The page you're looking for doesn't exist.
                    </p>
                    <a 
                      href="/"
                      className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors inline-block"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
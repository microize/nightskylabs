import React from 'react';
import Navigation from '../components/shared/Navigation';
import HeroSection from '../components/shared/HeroSection';
import MobileHeroSection from '../components/shared/MobileHeroSection';
import FeatureList from '../components/shared/FeatureList';
import Footer from '../components/shared/Footer';
import { useReadingAnimation } from '../hooks/useReadingAnimation';

const QuriousPage = () => {
  useReadingAnimation();

  const quriousData = {
    title: "Qurious",
    subtitle: "AI-First Learning Platform",
    description: "Qurious transforms education through personalized AI tutoring that adapts to each learner's pace, style, and goals. Our platform creates dynamic learning experiences that evolve with the student, making complex subjects accessible and engaging.",
    features: [
      {
        title: "Adaptive AI Tutoring",
        description: "Personalized instruction that adapts to learning style"
      },
      {
        title: "Real-time Assessment",
        description: "Continuous evaluation and feedback for optimal progress"
      },
      {
        title: "Interactive Content",
        description: "Dynamic lessons that engage and challenge students"
      },
      {
        title: "Progress Analytics",
        description: "Detailed insights into learning patterns and achievements"
      }
    ]
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section - Desktop */}
      <HeroSection 
        title="Qurious"
        subtitle="Adaptive Learning"
        description="Experience the future of education with AI that adapts to your learning style, pace, and goals—transforming complex subjects into personalized, engaging journeys."
        videoSrc="/fish_swimming.mp4"
      />

      {/* Mobile Content Section - Below Video */}
      <MobileHeroSection 
        title="Qurious"
        subtitle="AI-First Learning"
        description="Personalized AI-powered education that adapts to every learner's unique journey, making complex subjects accessible and engaging through intelligent tutoring."
      />

      {/* Main Content Section */}
      <section className="animated-section relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">AI-Enhanced Learning Implementation</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Qurious helps educational organizations implement and integrate GenAI tools effectively. We provide the expertise and custom development 
              needed to create personalized learning experiences that adapt to individual student needs and learning styles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Adaptive Intelligence</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                AI-powered tutoring that understands your learning patterns and adapts in real-time to optimize comprehension.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Learning Analytics • Style Recognition • Adaptive Pacing
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Interactive Content</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Dynamic lessons that engage multiple senses and learning modalities for maximum retention and understanding.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Multi-modal Learning • Interactive Simulations • Gamification
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Progress Insights</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Detailed analytics and personalized feedback that help learners understand their progress and optimize study time.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Performance Tracking • Predictive Analytics • Goal Setting
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-thin text-black mb-4">How Qurious Learns With You</h4>
              <p className="text-base font-thin text-gray-600 max-w-2xl mx-auto">
                Our AI continuously adapts to create the perfect learning experience for every individual.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-thin">1</span>
                </div>
                <h5 className="font-thin text-black mb-2">Assess Learning Style</h5>
                <p className="text-sm font-thin text-gray-600">AI analyzes how you learn best—visual, auditory, kinesthetic, or reading/writing preferences.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-thin">2</span>
                </div>
                <h5 className="font-thin text-black mb-2">Create Personal Path</h5>
                <p className="text-sm font-thin text-gray-600">Generates customized learning journeys with optimal pacing and content delivery methods.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-thin">3</span>
                </div>
                <h5 className="font-thin text-black mb-2">Evolve Together</h5>
                <p className="text-sm font-thin text-gray-600">Continuously refines approach based on your progress, challenges, and achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Ecosystem Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">Complete Learning Ecosystem</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              From foundational skills to advanced concepts, Qurious covers every subject with personalized AI tutoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-black rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-lg font-thin">∑</span>
              </div>
              <h4 className="text-xl font-thin text-black mb-4">STEM Excellence</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Master mathematics, physics, chemistry, and computer science through interactive problem-solving and visual learning.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Advanced Calculus • Quantum Physics • Organic Chemistry • Machine Learning
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-black rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-lg font-thin">✎</span>
              </div>
              <h4 className="text-xl font-thin text-black mb-4">Language Mastery</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Develop exceptional writing, communication, and critical thinking skills with AI-powered feedback.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Academic Writing • Literary Analysis • Public Speaking • Creative Expression
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-black rounded-xl mb-4 flex items-center justify-center">
                <span className="text-white text-lg font-thin">$</span>
              </div>
              <h4 className="text-xl font-thin text-black mb-4">Business Acumen</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Build strategic thinking and analytical skills through real-world case studies and business simulations.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Strategic Planning • Financial Analysis • Market Research • Leadership
              </div>
            </div>
          </div>

          <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h4 className="text-2xl font-thin text-white mb-4">Adaptive Learning for Every Goal</h4>
              <p className="text-base font-thin text-gray-300 max-w-3xl mx-auto mb-8">
                Whether you're preparing for exams, advancing your career, or exploring new interests, 
                Qurious adapts to your specific objectives and learning preferences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-thin text-white mb-2">K-12</div>
                  <p className="text-sm font-thin text-gray-300">Foundation building</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-thin text-white mb-2">University</div>
                  <p className="text-sm font-thin text-gray-300">Advanced concepts</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-thin text-white mb-2">Professional</div>
                  <p className="text-sm font-thin text-gray-300">Career advancement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">Learning Impact</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Students and educators worldwide are experiencing transformative results with Qurious.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-lg font-thin">AI</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Improved Outcomes</h4>
              <p className="text-sm font-thin text-gray-600">Enhanced learning through AI implementation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-lg font-thin">∞</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Adaptive Content</h4>
              <p className="text-sm font-thin text-gray-600">Personalized learning paths for each student</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-lg font-thin">24/7</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">AI Tutoring</h4>
              <p className="text-sm font-thin text-gray-600">Always-available personalized assistance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-lg font-thin">EDU</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Educational Focus</h4>
              <p className="text-sm font-thin text-gray-600">Purpose-built for learning organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-8">
            Ready to Transform Learning?
          </h2>
          <p className="text-lg md:text-xl font-thin text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of students and educators experiencing personalized AI tutoring.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Start Learning Free
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              For Educators
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuriousPage;
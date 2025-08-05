import React from 'react';

const QuriousDemo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-thin text-black">Today's Learning Path</h4>
          <div className="text-sm font-thin text-gray-600">67% Complete</div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-thin text-black">Machine Learning Basics</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-black h-1 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 border-2 border-black">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-thin text-black">Neural Networks</span>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-black h-1 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 border border-gray-200 opacity-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-thin text-black">Deep Learning</span>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-300 h-1 rounded-full" style={{width: '0%'}}></div>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-xl p-4 text-white">
          <div className="text-sm font-thin mb-2">AI Tutor Insight</div>
          <div className="text-xs font-thin text-gray-300">
            "You're excelling at pattern recognition! Ready to tackle backpropagation next?"
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuriousDemo;
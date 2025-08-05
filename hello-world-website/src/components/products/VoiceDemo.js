import React from 'react';

const VoiceDemo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12">
      <div className="text-center space-y-8">
        <div className="w-24 h-24 bg-black rounded-full mx-auto flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-4">
          <div className="text-sm font-thin text-gray-600">Real-time AI Analysis</div>
          <div className="space-y-2">
            <div className="h-2 bg-black rounded-full w-3/4 mx-auto"></div>
            <div className="h-2 bg-gray-400 rounded-full w-1/2 mx-auto"></div>
            <div className="h-2 bg-gray-300 rounded-full w-2/3 mx-auto"></div>
          </div>
          <div className="text-xs font-thin text-gray-500">
            Communication • Technical Skills • Cultural Fit
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceDemo;
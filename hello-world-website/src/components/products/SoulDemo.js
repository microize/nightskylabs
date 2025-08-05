import React from 'react';

const SoulDemo = () => {
  return (
    <div className="bg-black rounded-2xl p-6 md:p-8">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="font-mono text-green-400 text-sm space-y-2">
        <div>$ soul analyze --project</div>
        <div className="text-gray-400">Analyzing codebase...</div>
        <div className="text-white">✓ Found 247 files, 15 modules</div>
        <div className="text-white">✓ Detected React + TypeScript project</div>
        <div className="text-white">✓ 3 potential optimizations found</div>
        <div className="mt-4">$ soul suggest "optimize performance"</div>
        <div className="text-gray-400">AI analyzing performance bottlenecks...</div>
        <div className="text-white">✓ Lazy loading recommendations</div>
        <div className="text-white">✓ Bundle splitting suggestions</div>
        <div className="text-white">✓ Memoization opportunities</div>
        <div className="mt-4">$ soul implement --suggestion 1</div>
        <div className="text-gray-400">Implementing lazy loading...</div>
        <div className="text-white">✓ Components updated</div>
        <div className="text-white">✓ Performance improved by 34%</div>
      </div>
    </div>
  );
};

export default SoulDemo;
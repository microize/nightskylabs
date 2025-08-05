import React from 'react';

const FeatureList = ({ title, features }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {title && (
        <h4 className="text-lg font-thin text-black mb-4">{title}</h4>
      )}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <h5 className="font-thin text-black mb-1">{feature.title}</h5>
              <p className="text-sm font-thin text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
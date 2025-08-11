import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-gray-700">
      <div className="animate-pulse flex flex-col items-center">
        {/* Avatar Placeholder */}
        <div className="w-20 h-20 bg-gray-300 rounded-full mb-6"></div>

        {/* Lines for Name & Greeting */}
        <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-56 bg-gray-300 rounded mb-6"></div>

        {/* Lines for session list placeholder */}
        <div className="h-3 w-72 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-64 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-60 bg-gray-300 rounded"></div>
      </div>

      <p className="mt-6 text-sm text-gray-500 text-center px-4">
        Look Look the coder is hereee! Welcome to Prep Wiser...<br />
        Your personalized sessions will appear in just a moment!!!
      </p>
    </div>
  );
};

export default DashboardSkeleton;

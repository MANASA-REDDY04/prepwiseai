import React from "react";

const SkeletonLoader = () => {
  return (
    <div role="status" className="animate-pulse space-y-6 max-w-3xl mt-10 text-gray-500">
     
      {/* Header Placeholder */}
      <div className="h-6 bg-gray-100 rounded-md w-1/2 mx-auto"></div>

      {/* Paragraph block */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-100 rounded w-full"></div>
        <div className="h-3 bg-gray-100 rounded w-11/12"></div>
        <div className="h-3 bg-gray-100 rounded w-10/12"></div>
        <div className="h-3 bg-gray-100 rounded w-9/12"></div>
      </div>

    
       {/* Cute loading message */}
      <div className="text-sm text-center italic text-gray-400">
        “Crafting your explanation with love 💡❤️”
      </div>
  {/* Small code/info block */}
      <div className="bg-gray-50 rounded p-4 space-y-2">
        <div className="h-2.5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-2.5 bg-gray-200 rounded w-2/3"></div>
        <div className="h-2.5 bg-gray-200 rounded w-1/2"></div>
      </div>

      {/* Paragraph block repeat */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-100 rounded w-full"></div>
        <div className="h-3 bg-gray-100 rounded w-11/12"></div>
        <div className="h-3 bg-gray-100 rounded w-10/12"></div>
        <div className="h-3 bg-gray-100 rounded w-9/12"></div>
      </div>

      <div className="space-y-2">
        <div className="h-3 bg-gray-100 rounded w-full"></div>
        <div className="h-3 bg-gray-100 rounded w-11/12"></div>
        <div className="h-3 bg-gray-100 rounded w-10/12"></div>
        <div className="h-3 bg-gray-100 rounded w-9/12"></div>
        <div className="h-3 bg-gray-100 rounded w-10/12"></div>
        <div className="h-3 bg-gray-100 rounded w-9/12"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

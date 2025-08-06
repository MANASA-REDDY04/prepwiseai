import React, { useEffect, useState } from "react";

const messages = [
  "Wait for the questions to be fetched... ⏳",
  "It's time to cook your brain 🧠",
  "Brewing your perfect interview... ☕",
  "Shuffling the best questions for you 🔄",
  "Getting you interview ready 🎯",
];

const SessionLoader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      role="status"
      className="animate-pulse space-y-6 max-w-3xl mt-10 text-gray-500 mx-auto px-4"
    >
      {/* Loader Spinner */}
      <div className="flex justify-center">
        <div className="w-12 h-12 border-[6px] border-blue-300 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Rotating Cute Message */}
      <div className="text-sm text-center italic text-gray-400">
        {messages[index]}
      </div>

      {/* Fake Heading Placeholder */}
      <div className="h-6 bg-gray-100 rounded-md w-1/2 mx-auto"></div>

      {/* Simulated Question Block */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-100 rounded w-full"></div>
        <div className="h-3 bg-gray-100 rounded w-11/12"></div>
        <div className="h-3 bg-gray-100 rounded w-10/12"></div>
        <div className="h-3 bg-gray-100 rounded w-9/12"></div>
      </div>

      {/* Fake Answer Block */}
      <div className="bg-gray-50 rounded p-4 space-y-2">
        <div className="h-2.5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-2.5 bg-gray-200 rounded w-2/3"></div>
        <div className="h-2.5 bg-gray-200 rounded w-1/2"></div>
      </div>

      {/* Repeat for another Q&A */}
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

export default SessionLoader;

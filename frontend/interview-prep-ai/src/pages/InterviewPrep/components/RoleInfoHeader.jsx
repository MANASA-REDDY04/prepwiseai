import React from "react";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  lastUpdated,
}) => {
  return (
    <div className="bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[200px] flex flex-col justify-center relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-semibold text-black">{role}</h2>
              <p className="text-sm text-gray-600 mt-1">{topicsToFocus}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <span className="text-[11px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Experience: {experience} {experience === 1 ? "Year" : "Years"}
            </span>
            <span className="text-[11px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              {questions} Q&A
            </span>
            <span className="text-[11px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="w-[40vw] md:w-[30vw] h-[200px] flex items-center justify-center bg-white overflow-hidden absolute top-0 right-0 pointer-events-none">
          <div className="w-16 h-16 bg-lime-400 blur-[65px] animate-blob1" />
          <div className="w-16 h-16 bg-teal-400 blur-[65px] animate-blob2" />
          <div className="w-16 h-16 bg-cyan-400 blur-[65px] animate-blob3" />
          <div className="w-16 h-16 bg-fuchsia-400 blur-[65px] animate-blob1" />
        </div>
      </div>
    </div>
  );
};

export default RoleInfoHeader;

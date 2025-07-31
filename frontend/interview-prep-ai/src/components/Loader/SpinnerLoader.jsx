import React from "react";

const SpinnerLoader = ({ size = 20 }) => {
  return (
    <div
      className="group flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin transition-colors duration-200"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.5"
        style={{
          width: size,
          height: size,
          stroke: 'white',
        }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
        />
        <path
          className="opacity-75"
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
        />
      </svg>

      <style>{`
        .group:hover svg {
          stroke: black !important;
        }
      `}</style>
    </div>
  );
};

export default SpinnerLoader;

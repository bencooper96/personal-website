import React from "react";

export default function Scroll() {
  return (
    <div className="items-center text-center">
      <p className="text-gray-600 md:text-gray-600 lg:text-gray-400">scroll</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 text-gray-600 md:text-gray-600 lg:text-gray-400 mx-auto"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

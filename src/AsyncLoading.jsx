import React from "react";
import { tw } from "twind";

export function AsyncLoading() {
  return (
    <div className={tw`h-screen bg-gray-200 flex items-center justify-center`}>
      <div>
        <p className={tw`text-center text-4xl mb-4`}>
          <span>Loading...</span>
        </p>
        <div className={tw`flex justify-center items-center`}>
          <svg
            className={tw`animate-spin -ml-1 mr-3 h-10 w-10 text-black`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className={tw`opacity-25`}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className={tw`opacity-75`}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

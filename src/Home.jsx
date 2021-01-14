import React from "react";
import { Link } from "react-router-dom";
import { tw } from "twind";
import { Counter } from "./Counter";

export function Home() {
  return (
    <div className={tw`h-screen bg-red-400 flex items-center justify-center`}>
      <div>
        <p>
          Go to{" "}
          <Link
            className={tw`text-blue-700 hover:text-blue-900 underline`}
            to="/page1"
          >
            page 1
          </Link>{" "}
          (sync load)
        </p>
        <p>
          Go to{" "}
          <Link
            className={tw`text-blue-700 hover:text-blue-900 underline`}
            to="/page2"
          >
            page 2
          </Link>{" "}
          (async load)
        </p>
      </div>
    </div>
  );
}

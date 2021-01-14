import React from "react";
import { tw } from "twind";
import { Counter } from "./Counter";

export function Page1() {
  return (
    <div className={tw`h-screen bg-blue-400 flex items-center justify-center`}>
      <div>
        <p>The time is {Date.now()}</p>
        <Counter />
      </div>
    </div>
  );
}

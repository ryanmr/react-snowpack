import React from "react";
import { tw } from "twind";
import { Counter } from "./Counter";

export function Page2() {
  return (
    <div className={tw`h-screen bg-green-400 flex items-center justify-center`}>
      <div>
        <p>Hey {Math.round(Math.random() * 10000000)}</p>
        <Counter />
      </div>
    </div>
  );
}

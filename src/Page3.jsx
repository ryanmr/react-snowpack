import React, { useEffect } from "react";
import { tw } from "twind";
import { Counter } from "./Counter";

export function Page3() {
  const arbitraryObject = {
    a: { b: 1 },
    c: { x: { y: 2 } },
  };

  const reflect =
    Math.random() > 0.5 ? arbitraryObject?.a?.b : arbitraryObject.c?.x?.y;

  const no = arbitraryObject.z ?? "no";

  return (
    <div
      className={tw`h-screen bg-yellow-400 flex items-center justify-center`}
    >
      <div>
        <p>Hey {Math.round(Math.random() * 10000000)}</p>
        <p className={tw`text-center`}>{reflect}</p>
        <p className={tw`text-center`}>{no}</p>
        <Counter />
      </div>
    </div>
  );
}

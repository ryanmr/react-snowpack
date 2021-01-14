import React, { useEffect, useState } from "react";
import { tw } from "twind";

export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const h = setInterval(() => {
      setCounter((p) => p + 1);
    }, 1000);
    return () => h && clearInterval(h);
  });

  return (
    <div>
      <p className={tw`text-center text-3xl`}>{counter}</p>
    </div>
  );
}

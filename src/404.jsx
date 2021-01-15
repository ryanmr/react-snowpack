import React from "react";
import { tw } from "twind";

export function NotFound() {
  return (
    <div className={tw`h-screen flex items-center justify-center`}>
      <div>
        <p>Not found</p>
      </div>
    </div>
  );
}

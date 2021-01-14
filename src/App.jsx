import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import delay from "delay";
import { AsyncLoading } from "./AsyncLoading";

const LazyPage2 = React.lazy(async () => {
  await delay(5000); // simulate network latency
  const module = await import("./Page2");
  return { default: module.Page2 };
});

export function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Suspense fallback={<AsyncLoading />}>
              <LazyPage2 />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

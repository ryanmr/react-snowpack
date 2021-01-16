import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import delay from "delay";
import { AsyncLoading } from "./AsyncLoading";
import { Page3 } from "./Page3";
import { NotFound } from "./404";
import { Page4 } from "./Page4";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

const LazyPage2 = React.lazy(async () => {
  await delay(5000); // simulate network latency
  const module = await import("./Page2");
  return { default: module.Page2 };
});

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export function App() {
  return (
    <>
      <Providers>
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
            <Route path="/page3">
              <Page3 />
            </Route>
            <Route path="/page4">
              <Page4 />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </Providers>
    </>
  );
}

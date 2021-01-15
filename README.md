# React Snowpack playground

Learning about React with Snowpack and some fun friends.

> ✨ Bootstrapped with Create Snowpack App (CSA).

> Bootstrapped with CSA! The freshest and most local of webapps (via [@brianmitchl](https://twitter.com/brianmitchl))

### Setup

```
yarn
```

### Commands

```
# run dev mode, using fast refresh and snowpack's bundlessness
yarn start

# run build; produces a "bundle" with the webpack plugin
yarn build

# run serve on build folder; build first
yarn serve:build
```

### Tech

* React & friends
* [Snowpack](https://www.snowpack.dev/)
* [twind](https://github.com/tw-in-js/twind)

### Notes

* Newer syntax supported
  * `?.` and `??`
* Code splitting
* Async routes work!
  * Suspense fallback simulated with 5s delay
* Webpack "optimized" bundle works! (Makes hash.js chunks)

**Things that sort of might work maybe**

* [React 17 JSX Transform](https://github.com/evanw/esbuild/issues/334#issuecomment-760427837)
  * With React 17 in some environments, you can [omit the `import React from 'react'`](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) but apparently that changes the way JSX works and that is not built into `esbuild` core, but there is a way to add a customized plugin to do the transform with a babel plugin - not tested here yet - [another thread](https://github.com/snowpackjs/snowpack/discussions/1681)
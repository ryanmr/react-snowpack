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

* Code splitting / async routes work! (Suspense fallback simulated with 5s delay)
* Webpack bundle works! (Makes hash.js chunks)
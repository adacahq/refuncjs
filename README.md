# React Starter
### Introduction
This is the project scaffold we use at Station Five for our front end projects. It sets a structure for our applications, naming conventions, architectural patterns, abstractions and methodology.

At Station Five we follow Functional Programming practices and so this projects aims to be as functional as JavaScript allows.

## What's the stack?
This project uses:

* Yarn: App Package Manager. [Go to Docs](https://yarnpkg.com/en/docs/getting-started)
* React: App View framework. [Go to Docs](https://facebook.github.io/react/docs/installation.html)
* Redux: App State Manager. [Go to Docs](https://github.com/reactjs/redux)
* Redux Sagas: App side effect and business logic library. [Go to Docs](https://github.com/redux-saga/redux-saga)
* Reselect: App data store selection library. [Go to Docs](https://github.com/reactjs/reselect)
* Mori: Persistent Immutable Data Structure. [Go to Docs](http://swannodette.github.io/mori/)
* Monet: Functional Programming toolset. [Go to Docs](https://monet.github.io/monet.js/)
* Storybook: UI development environment for UI components. [Go to Docs](https://storybook.js.org/basics/introduction/)
* Webpack: App bundler and development server. [Go to Docs](https://webpack.js.org/guides/)
* Bitbucket Pipelines: Yml file for bitbucket pipelines [Go to Docs](https://bitbucket.org/product/features/pipelines)
* ESLint: JavaScript Linter configured with Babel, AirBnB, React, Jest, Flow, and Module Resolver [Go to Docs](https://eslint.org/docs/user-guide/getting-started)

# How to install
To initialise your project, make sure you have yarn and flow-typed installed, then run in your terminal:
```bash
./init.sh
```

This script will: install the latest version of all required packages (with a few exceptions that are held back) and locks down their versions, installs flow-typings, and detaches and creates a new git repository, 

## How to start developing
To start a localhost server with hot-reloading:
```bash
yarn dev
```

## Storybook
To display all the components in the storybook simply run:
```bash
yarn storybook
```

## Test
All tests are written using Jest. To run all test simply run:
```bash
yarn test
```

## Check
Javascript linting with eslint and flow type checking:
```bash
yarn run check
```

## Build
To build the full project just run:
```bash
yarn build
```

#!/usr/bin/env bash

echo "Install babel"
yarn add babel-cli babel-eslint babel-preset-env babel-preset-es2015 babel-register babel-preset-react babel-plugin-module-resolver --dev

echo "Install React..."
yarn add react react-dom react-router react-router-dom
yarn add react-addons-test-utils react-test-renderer --dev

echo "Install Styled Components"
yarn add styled-components jest-styled-components

echo "Install Flow..."
yarn add babel-preset-flow flow-bin --dev

echo "Install mori..."
yarn add mori

echo "Install monet..."
yarn add monet

echo "Install Redux..."
yarn add redux react-redux redux-sagas

echo "Install Jest..."
yarn add jest enzyme jest-enzyme jest-styled-components eslint-plugin-jest --dev

echo "Install ESLint..."
yarn add eslint eslint-plugin-flowtype eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-import-resolver-babel-module --dev

echo "Install reselect..."
yarn add reselect

echo "Install recompose..."
yarn add recompose

echo "Install webpack..."
yarn add webpack webpack webpack-dev-server babel-loader html-webpack-plugin --dev

echo "Install npm watcher..."
yarn add npm-watch --dev

echo "Install Polyfills..."
yarn add whatwg-fetch

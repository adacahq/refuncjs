#!/usr/bin/env bash

function validate_is_installed {
  if hash $1 2>/dev/null ; then
    echo "Checking $1 is installed ... ✓"
  else
    echo "Checking $1 is installed ... ✗ NOT INSTALLED!"
    exit 1
  fi
}

echo "Checking global dependencies:"
validate_is_installed "flow-typed"
validate_is_installed "yarn"

echo "Install babel"
yarn add babel-cli babel-eslint babel-preset-env babel-preset-es2015 babel-register
yarn add babel-plugin-syntax-dynamic-import babel-preset-react
yarn add babel-plugin-transform-class-properties babel-plugin-module-resolver@2.7.1 --dev
echo " - Note: babel-plugin-module-resolver is held back to v2.7.1"

echo "Install React..."
yarn add react react-dom

echo "Install React base libraries"
yarn add react-loadable redux-first-router redux-first-router-link history query-string redux-devtools-extension

echo "Install Storybook"
yarn add @storybook/react @storybook/addon-actions

echo "Install Flow..."
yarn add babel-preset-flow flow-bin --dev

echo "Install mori..."
yarn add mori

echo "Install monet..."
yarn add monet

echo "Install lodash..."
yarn add lodash

echo "Install Redux..."
yarn add redux react-redux redux-saga redux-persist

echo "Install Jest..."
yarn add jest enzyme enzyme-adapter-react-16 jest-enzyme eslint-plugin-jest react-test-renderer --dev

echo "Install ESLint..."
yarn add eslint eslint-plugin-flowtype eslint-config-airbnb@15.1.0 eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-import-resolver-babel-module@3.0.0 --dev
echo " - Note: eslint-import-resolver-babel-module is held back to v3.0.0"
echo " - Note: eslint-config-airbnb is held back to v15.1.0"

echo "Install reselect..."
yarn add reselect

echo "Install recompose..."
yarn add recompose

echo "Install webpack + tools..."
yarn add webpack@3.10.0 webpack-dev-server@2.11.1 babel-loader html-webpack-plugin clean-webpack-plugin node-sass nodemon uglifyjs-webpack-plugin ignore-loader --dev
echo " - Note: webpack is held back to v3.10.0"
echo " - Note: webpack-dev-server is held back to v2.11.1"

echo "Install Polyfills..."
yarn add whatwg-fetch

echo "Install typings..."
flow-typed install

echo "Install Bourbon (Needs sudo privileges)..."
sudo -S gem install bourbon
bourbon install --path ./src/styles/libs

echo "Detaching git repository..."
rm -rf .git
git init
git add -A
git commit -m "Fresh initialisation from react-starter"

echo "Locking down versions in package.json..."
sed -i '.bak' 's/: "\^/: "/g' package.json
rm package.json.bak


// @flow

import React from 'react';
import type { Component } from 'react';
import { NOT_FOUND } from 'redux-first-router';
import { LazyPage } from 'infrastructure';
import { PAGES } from 'constants';

const routeComponents: { [string]: Function } = {
  [PAGES.HOME]: (): Element<*> => {
    const HomePage: Component<*> = LazyPage('Home/Home');
    return <HomePage title={'Home'} />;
  },
  [NOT_FOUND]: (): Element<*> => <h1>Not Found</h1>,
};

export default routeComponents;

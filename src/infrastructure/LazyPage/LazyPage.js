// @flow

import React, { type Component } from 'react';
import Loadable from 'react-loadable';

const Loading: Function = (): Element<'span'> => <span>Loading</span>;

const LazyPage: Function = (page: string): Function => Loadable({
  loader: (): Promise<any> => import(`./../../pages/${page}`),
  loading: Loading,
  render: (loaded: Object, props: ?Object = {}): Element<*> => {
    const BaseComponent: Component<*> = loaded.default;
    return <BaseComponent {...props} />;
  },
});

export default LazyPage;

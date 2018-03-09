// @flow

import React from 'react';
import type { Element } from 'react';

type HomeProps = {
  title: string
}

const Home: Function = (props: HomeProps): Element<*> => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

export default Home;

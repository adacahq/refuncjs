// @flow

import React from 'react';
import { list, conj, intoArray } from 'mori';
import styles from './styles';

type ButtonProps = {
  text: string,
  className: string,
  isPrimary?: ?boolean,
  onClick: () => void,
}

const Button = (props: ButtonProps): React$Element<*> => {
  let classes = list(props.className);

  if (props.isPrimary) {
    classes = conj(classes, ` ${props.className}--primary`);
  }

  return (
    <button
      className={intoArray(classes).join(' ')}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

const defaults: {
  isPrimary: boolean
} = {
  isPrimary: false,
};

Button.defaultProps = defaults;

export default styles(Button);

/* @flow */

import React, { Component, PropTypes } from 'react';
import styles from './Counter.scss';

type Props = {
  counter: number;
  increment: Function;
  decrement: Function;
  incrementIfEven: Function;
}

export default class Counter extends Component<void, Props, void> {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfEven: PropTypes.func.isRequired,
  };

  render() {
    const { props } = this;

    return (
      <div className={styles.base}>
        <div className={styles.count}>
            {props.counter}
        </div>
        <div className={styles.actions}>
          <button
            key='increment'
            className={styles.button}
            onClick={props.increment}
          >
            +
          </button>
          <button
            key='decrement'
            className={styles.button}
            onClick={props.decrement}
          >
            -
          </button>
          <button
            key='incrementIfEven'
            className={styles.button}
            onClick={props.incrementIfEven}
          >
            % 2 ? +
          </button>
        </div>
      </div>
    );
  }
}

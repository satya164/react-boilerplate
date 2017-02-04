/* @flow */

import type { Action } from '../types/Action';
import type { Dispatch, GetState } from '../types/Store';

export function increment(amount: number): Action {
  return {
    type: 'INCREMENT_COUNTER',
    payload: amount,
  };
}

export function decrement(amount: number): Action {
  return {
    type: 'DECREMENT_COUNTER',
    payload: amount,
  };
}

export function incrementIfEven(amount: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      dispatch(increment(amount));
    }
  };
}

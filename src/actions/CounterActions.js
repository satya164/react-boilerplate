/* @flow */

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

type Action = {
  type: string
}

export function increment(): Action {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement(): Action {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function incrementIfEven(): Function {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      dispatch(increment());
    }
  };
}

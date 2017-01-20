/* @flow */

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

type Action = {
    type: string
}

export default function(state: number = 0, action: Action): number {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}

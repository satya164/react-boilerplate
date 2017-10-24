/* @flow */

import type { Action } from '../types/Action';

type State = number;

export default function counter(state: State = 0, action: Action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + action.payload;
    case 'DECREMENT_COUNTER':
      return state - action.payload;
    default:
      return state;
  }
}

/* @flow */

import type { Action } from '../types/Action';

export default function(state: number = 0, action: Action): number {
  switch (action.type) {
  case 'INCREMENT_COUNTER':
    return state + action.payload;
  case 'DECREMENT_COUNTER':
    return state - action.payload;
  default:
    return state;
  }
}

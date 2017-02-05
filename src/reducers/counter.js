/* @flow */

import createReducer from '../lib/createReducer';
import type { Action } from '../types/Action';

type State = number;

const initialState = 0;

export default createReducer(initialState, {
  INCREMENT_COUNTER: (state: State, action: Action) =>
    state + action.payload,
  DECREMENT_COUNTER: (state: State, action: Action) =>
    state + action.payload,
});

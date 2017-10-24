/* @flow */

import type {
  /* eslint-disable import/named */
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
} from 'redux';
import type { Action } from './Action';
import type { State } from './State';

export type Store = ReduxStore<State, Action>;

export type GetState = () => State;

export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

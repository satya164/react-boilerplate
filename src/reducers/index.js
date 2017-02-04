/* @flow */

import { combineReducers } from 'redux';
import counter from './counter';

const reducers = {
  counter,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);

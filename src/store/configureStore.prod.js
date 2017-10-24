/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import type { Store } from '../types/Store';

const enhancer = compose(applyMiddleware(thunk));

export default function configureStore(): Store {
  return createStore(rootReducer, enhancer);
}

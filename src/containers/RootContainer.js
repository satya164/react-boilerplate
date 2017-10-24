/* @flow */

import * as React from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';
import type { Store } from '../types/Store';

type Props = {
  store: Store,
};

const RootContainer = ({ store }: Props) => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default RootContainer;

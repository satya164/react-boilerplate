/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';

const RootContainer = (props: Object) => {
  return (
    <Provider store={props.store}>
      <CounterContainer />
    </Provider>
  );
};

export default RootContainer;

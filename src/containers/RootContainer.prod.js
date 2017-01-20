/* @flow */

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './CounterContainer';

const RootContainer = (props: Object) => {
  return (
    <Provider store={props.store}>
      <CounterContainer />
    </Provider>
  );
};

RootContainer.propTypes = {
  store: React.PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    liftedStore: PropTypes.object.isRequired,
    replaceReducer: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  }),
};

export default RootContainer;

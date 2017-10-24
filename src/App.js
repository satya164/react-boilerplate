import React from 'react';
import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';

const store = configureStore();

const App = () => <RootContainer key="root" store={store} />;

export default App;

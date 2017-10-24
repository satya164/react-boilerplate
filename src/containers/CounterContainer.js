/* @flow */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import {
  increment,
  decrement,
  incrementIfEven,
} from '../actions/CounterActions';
import type { State } from '../types/State';

const mapStateToProps = ({ counter }: State) => ({
  counter,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      increment,
      decrement,
      incrementIfEven,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

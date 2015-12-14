/* @flow */

import React, { PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import * as CounterActions from "../actions/CounterActions";

const CounterContainer = props => {
    const { counter, dispatch } = props;

    return <Counter counter={counter} {...bindActionCreators(CounterActions, dispatch)} />;
};

CounterContainer.propTypes = {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

function select(state) {
    return {
        counter: state.counter
    };
}

export default connect(select)(CounterContainer);

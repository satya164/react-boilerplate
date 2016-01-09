/* @flow */

import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increment, decrement, incrementIfEven } from "../actions/CounterActions";

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        incrementIfEven: () => dispatch(incrementIfEven())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

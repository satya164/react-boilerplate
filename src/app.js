import React from "react";
import Radium from "radium";

const styles = {
    base: {
        fontFamily: "sans-serif",
        fontSize: 24,
        color: "#555"
    }
};

class App extends React.Component {
    render() {
        return <div style={styles.base}>Hello world :)</div>;
    }
}

export default Radium(App);

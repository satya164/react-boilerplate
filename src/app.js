import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Hello world</div>;
    }
}

React.render(<MyComponent />, document.getElementById("container"));

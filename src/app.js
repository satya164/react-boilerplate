import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Hello world</div>;
    }
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        React.render(<MyComponent />, document.getElementById("container"));
    }
};

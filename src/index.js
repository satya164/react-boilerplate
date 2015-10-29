import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        ReactDOM.render(<App />, document.getElementById("container"));
    }
};

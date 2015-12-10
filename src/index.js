/* @flow */

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
        ReactDOM.render(<App />, document.getElementById("container"));
    }
});

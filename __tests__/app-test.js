jest.dontMock("../src/app");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

const App = require("../src/app").default;

describe("App", () => {
    it("renders 'Hello world' message", () => {
        // Render a the app in the document
        const app = TestUtils.renderIntoDocument(<App />);
        const appNode = ReactDOM.findDOMNode(app);

        // Verify the message is displayed
        expect(appNode.textContent).toEqual("Hello world :)");
    });
});

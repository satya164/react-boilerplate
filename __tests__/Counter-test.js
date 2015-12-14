jest.dontMock("../src/components/Counter");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

const Counter = require("../src/components/Counter").default;

describe("Counter", () => {
    it("renders counter with value", () => {
        const num = Math.round(Math.random() * 100);

        // Render a the counter in the document
        const counter = TestUtils.renderIntoDocument(
            <Counter
                counter={num}
                increment={() => null}
                decrement={() => null}
                incrementIfEven={() => null}
            />
        );
        const counterNode = ReactDOM.findDOMNode(counter);

        // Verify the passed number is displayed
        expect(counterNode.textContent).toContain(num);
    });
});

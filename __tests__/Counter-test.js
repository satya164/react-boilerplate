import React from 'react';
import { render } from 'enzyme';
import Counter from '../src/components/Counter';

describe('Counter', () => {
  it('renders counter with value', () => {
    const num = Math.round(Math.random() * 100);

    // Render a the counter in the document
    const wrapper = render(
      <Counter
        counter={num}
        increment={() => null}
        decrement={() => null}
        incrementIfEven={() => null}
      />
    );

    // Verify the passed number is displayed
    expect(wrapper.text()).toContain(num);
  });
});

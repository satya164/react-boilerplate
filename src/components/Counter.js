/* @flow */

import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 48px;
  width: 360px;
  margin: auto;
`;

const Count = styled.div`
  font-family: sans-serif;
  font-size: 192px;
  color: #443b5d;
  text-align: center;
`;

const Actions = styled.div`
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  background: #56acdf;
  color: #fff;
  border-radius: 2px;
  border: 0;
  font-size: 16px;
  padding: 8px;
  margin: 2px;
  min-width: 32px;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: #60c0f7;
  }

  &:active {
    background: #4d98c4;
  }
`;

type Props = {
  counter: number,
  increment: (amount: number) => mixed,
  decrement: (amount: number) => mixed,
  incrementIfEven: (amount: number) => mixed,
};

export default class Counter extends React.Component<Props> {
  render() {
    const { props } = this;

    return (
      <Container>
        <Count>{props.counter}</Count>
        <Actions>
          <Button key="increment" onClick={() => props.increment(1)}>
            +
          </Button>
          <Button key="decrement" onClick={() => props.decrement(1)}>
            -
          </Button>
          <Button
            key="incrementIfEven"
            onClick={() => props.incrementIfEven(1)}
          >
            % 2 ? +
          </Button>
        </Actions>
      </Container>
    );
  }
}

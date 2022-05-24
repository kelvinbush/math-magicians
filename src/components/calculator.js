import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const calculatorOptions = [
      {
        label: 0,
        operation: 'answer',
      },
      {
        label: 'AC',
        operation: 'clear',
      },
      {
        label: '+/-',
        operation: 'negate',
      },
      {
        label: '%',
        operation: 'percent',
      },
      {
        label: '÷',
        operation: 'divide',
        code: 'k',
      },
      {
        label: 7,
        operation: 'seven',
      },
      {
        label: 8,
        operation: 'eight',
      },
      {
        label: 9,
        operation: 'nine',
      },
      {
        label: 'x',
        operation: 'multiply',
        code: 'k',
      },
      {
        label: 4,
        operation: 'four',
      },
      {
        label: 5,
        operation: 'five',
      },
      {
        label: 6,
        operation: 'six',
      },
      {
        label: '-',
        operation: 'subtract',
        code: 'k',
      },
      {
        label: 1,
        operation: 'one',
      },
      {
        label: 2,
        operation: 'two',
      },
      {
        label: 3,
        operation: 'three',
      },
      {
        label: '+',
        operation: 'add',
        code: 'k',
      },
      {
        label: 0,
        operation: 'zero',
      },
      {
        label: '.',
        operation: 'decimal',
      },
      {
        label: '=',
        operation: 'equals',
        code: 'k',
      },
    ];

    return (
      <div className="calculator">
        <div className="calculator__container">
          {calculatorOptions.map((option) => (
            <div className={`calculator__cell ${option.code ? 'operation' : ''}`} key={option.operation}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

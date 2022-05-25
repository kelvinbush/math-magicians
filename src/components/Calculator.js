import React, { Component } from 'react';
import calculate from '../logic/calculate';
import CalcCell from './CalcCell';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleCalculate = (label) => {
    const { total, next, operation } = this.state;
    const newObj = calculate({ total, next, operation }, label);
    this.setState({
      total: newObj.total,
      operation: newObj.operation,
      next: newObj.next,
    });
  }

  render() {
    const calculatorOptions = [
      {
        label: 'AC',
      },
      {
        label: '+/-',
      },
      {
        label: '%',
      },
      {
        label: '÷',
        code: 'k',
      },
      {
        label: '7',
      },
      {
        label: '8',
      },
      {
        label: '9',
      },
      {
        label: 'x',
        code: 'k',
      },
      {
        label: '4',
      },
      {
        label: '5',
      },
      {
        label: '6',
      },
      {
        label: '-',
        code: 'k',
      },
      {
        label: '1',
      },
      {
        label: '2',
      },
      {
        label: '3',
      },
      {
        label: '+',
        code: 'k',
      },
      {
        label: '0',
      },
      {
        label: '.',
      },
      {
        label: '=',
        code: 'k',
      },
    ];
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator__container">
          <div className="calculator__cell">
            {total || next || '0'}
          </div>
          {calculatorOptions.map((option) => (
            <CalcCell
              key={option.label}
              label={option.label}
              code={option.code ? option.code : ''}
              handleCalculate={this.handleCalculate}
            />
          ))}
        </div>
      </div>
    );
  }
}

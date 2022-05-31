import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalcCell from './CalcCell';

const Calculator = () => {
  const [calcState, setCalcState] = useState({});

  const handleCalculate = (label) => {
    const { total, next, operation } = calcState;
    const newObj = calculate({ total, next, operation }, label);
    setCalcState({
      total: newObj.total,
      operation: newObj.operation,
      next: newObj.next,
    });
  };

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
  const { total, next } = calcState;
  return (
    <div className="calculator">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h3>Let's do some math!</h3>
      <div className="calculator__container">
        <div className="calculator__cell">{total || next || '0'}</div>
        {calculatorOptions.map((option) => (
          <CalcCell
            key={option.label}
            label={option.label}
            code={option.code ? option.code : ''}
            handleCalculate={handleCalculate}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

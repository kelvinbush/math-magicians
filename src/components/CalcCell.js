/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-useless-constructor, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CalcCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, code, handleCalculate } = this.props;
    return (
      <button
        onClick={() => handleCalculate(label)}
        className={`calculator__cell ${code.length > 0 ? 'operation' : ''}`}
        key={label}
        type="button"
      >
        {label}
      </button>
    );
  }
}

CalcCell.propTypes = {
  label: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  handleCalculate: PropTypes.func.isRequired,
};

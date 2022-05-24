import React, { Component } from 'react';
import Calculator from './components/calculator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

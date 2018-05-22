import React, { Component } from 'react';
import DrumMachine from './DrumMachine';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="main-title">Play the Drums!</div>
        <DrumMachine />
      </div>
    );
  }
}

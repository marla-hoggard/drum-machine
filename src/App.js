import React, { Component } from 'react';
import DrumMachine from './DrumMachine';
import './index.css';

export default class App extends Component {
	//Sets focus to drum area so keys work on load
	componentDidMount() {
		document.getElementById('drum-player').focus();
	}
	render() {
	    return (
		      <div>
		        <div className="main-title">Play the Drums!</div>
		        <DrumMachine />
		      </div>
	    );
  }
}

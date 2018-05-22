import React, { Component } from 'react';
import { DRUM_MAP2 } from './constants';
import './index.css';

export default class Display extends Component {
	render() {
		return (
			<div id="display">
				{DRUM_MAP2[this.props.value]}
			</div>
		);
	}
}
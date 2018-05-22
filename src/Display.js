import React, { Component } from 'react';
import './index.css';

export default class Display extends Component {
	render() {
		return (
			<div id="display">
				{this.props.value}
			</div>
		);
	}
}
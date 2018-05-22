import React, { Component } from 'react';
import './index.css';

export default class Audio extends Component {
	render() {
		return (
			<audio id={this.props.drum} className="clip">
				<source src="drum.wav" type="audio/wav" />
				Your browser does not support the audio element.
			</audio>
		);
	}
}
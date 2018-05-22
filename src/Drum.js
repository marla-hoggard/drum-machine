import React, { Component } from 'react';
import Audio from './Audio';
import './index.css';

export default class Drum extends Component {
	render() {
		return (
			<div id={`${this.props.drum}-drum-pad`} className="drum-pad">
				<Audio drum={this.props.drum} />
				<div className="drum-text">
					{this.props.drum}
				</div>
			</div>
		);
	}
}
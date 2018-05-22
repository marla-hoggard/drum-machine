import React, { Component } from 'react';
import { DRUM_MAP } from './constants';
import './index.css';

export default class Audio extends Component {
	render() {
		const drumFile = DRUM_MAP[this.props.drum];
		const clip = importOne(require.context('./audio', false, /\.wav$/),drumFile);
		return (
			<audio id={this.props.drum} className="clip">
				<source src={clip} type="audio/wav" />
				Your browser does not support the audio element.
			</audio>
		);
	}
}

function importOne(context, title) {
	let clips = {};
	context.keys().map((item, index) => { clips[item.replace('./', '')] = context(item); })
	return clips[title];
}


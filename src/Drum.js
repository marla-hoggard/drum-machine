import React, { Component } from 'react';
import Audio from './Audio';
import './index.css';

export default function Drum(props) {
	return (
		<div id={`${props.drum}-drum-pad`} className="drum-pad" 
				onClick={() => props.onClick(props.drum)}>
			<Audio drum={props.drum} />
			<div className="drum-text">
				{props.drum}
			</div>
		</div>
	);
}
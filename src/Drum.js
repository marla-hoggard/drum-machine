import React, { Component } from 'react';
import Audio from './Audio';
import './index.css';

const Drum = ({drum, onClick}) => {
	return (
		<div id={`${drum}-drum-pad`} className="drum-pad" 
				onClick={() => onClick(drum)}>
			<Audio drum={drum} />
			<div className="drum-text">
				{drum}
			</div>
		</div>
	);
}

export default Drum;
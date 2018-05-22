import React, { Component } from 'react';
import { DRUM_NAMES } from './constants';
import './index.css';

const Display = ({value}) => {
	return (
		<div id="display">
			{DRUM_NAMES[value]}
		</div>
	);
}

export default Display;
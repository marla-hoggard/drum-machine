import React, { Component } from 'react';
import { DRUM_MAP2 } from './constants';
import './index.css';

export default function Display(props) {
	return (
		<div id="display">
			{DRUM_MAP2[props.value]}
		</div>
	);
}
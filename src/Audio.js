import React from 'react';
import { DRUM_FILES } from './constants';
import './index.css';

const Audio = ({drum}) => {
	const drumFile = DRUM_FILES[drum];
	const clip = importOne(require.context('./audio', false, /\.wav$/),drumFile);
	return (
		<audio id={drum} className="clip" src={clip} type="audio/wav">
			Your browser does not support the audio element.
		</audio>
	);
}

function importOne(context, title) {
	let clips = {};
	context.keys().forEach((item, index) => { 
		clips[item.replace('./', '')] = context(item); 
	});
	return clips[title];
}

export default Audio;


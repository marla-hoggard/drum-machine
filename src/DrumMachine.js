import React, { Component } from 'react';
import Display from './Display';
import Drum from './Drum';
import { LETTER_MAP } from './constants';
import './index.css';

export default class DrumMachine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastPlayed: "start",
		};
		this.playDrum = this.playDrum.bind(this);
	}

	renderDrum(i) {
		const letter = LETTER_MAP[i];
		return (
			<Drum 
				key={letter}
				drum={letter}
				onClick={this.playDrum}
			/>
		);
	}

	playDrum(letter) {
		const drum = document.getElementById(letter);
		drum.play();
		this.setState({
			lastPlayed: letter,
		});
	}

	onKeyDown(e) {
		console.log(e.key);
		if (LETTER_MAP.includes(e.key)) {
			console.log("matched!");
		}
	}

	render() {
		const drums = [0,1,2].map((line,index) => {
      		const row = [0,1,2].map((drum,i) => { 
      			const statement = this.renderDrum(index*3 + i)
	        	return statement; //row map's return
	      	});
	      	//drums map's return
	      	return (
		        <div key={index} className="drum-row">
		          {row}
		        </div>
		    );
		});

	    //render function's return
	    return (
	      <div id="drum-player" onKeyDown={(e) => this.onKeyDown(e)}>
	        <Display value={this.state.lastPlayed}/>
	        <div id="drums">
	        	{drums}
	        </div>
	      </div>
	    );
  	}


	    
}

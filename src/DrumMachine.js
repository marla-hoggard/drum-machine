import React, { Component } from 'react';
import Display from './Display';
import Drum from './Drum';
import { LETTER_MAP } from './constants';
import './index.css';

export default class DrumMachine extends Component {
	renderDrum(i) {
		const letter = LETTER_MAP[i];
		return (
			<Drum 
				key={letter}
				drum={letter}
			/>
		);
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
	      <div id="drum-player">
	        <Display value="test"/>
	        <div id="drums">
	        	{drums}
	        </div>
	      </div>
	    );
  	}


	    
}

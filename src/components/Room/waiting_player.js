import React from 'react';
import axios from 'axios';

class Waiting extends React.Component {
	constructor (props) {
		super(props),
		this.state = { player: this.props.name };
	}

	render () {
	return (
		  <div>
		  	<li> 
		  		<div className="text-center container">
		  			<div className="row">
		  				<h3>{this.props.name}</h3> 
		  			</div>
		  		</div>
		  	</li>
		  </div>
		);
	}
}

export default Waiting;
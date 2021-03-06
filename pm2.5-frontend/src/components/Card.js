import React, { Component } from 'react';
// import '../assets/bangkok.png';
import './Card.css';

class Card extends Component {
	render () {
		return (
			<div className="Card" >
				
				<div className="CardDetail" > 
					<h2> {this.props.city} </h2> 
					<div className="DateDetail" >
						<span> {this.props.timestamp} </span>
					</div>
					<h1 className={'level'.concat(this.props.pm_level)}> {this.props.pm_value} </h1>
					<p> PM 2.5 </p>
				</div>
			</div>
		)
	}
}

export default Card;
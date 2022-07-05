import React from 'react';

import './Row.css';

import Card from './Card'


export default class Row extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Row columns">
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

import React from 'react';

import './Table.css';

import Pot from './Pot'


export default class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Row columns">
				<Pot />
				<div className="is-divider-vertical"></div>
				<Pot />
				<div className="is-divider-vertical"></div>
				<Pot />
			</div>
		);
	}
}

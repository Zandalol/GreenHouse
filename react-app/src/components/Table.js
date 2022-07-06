import React from 'react';

import './Table.css';

import Pot from './Pot'


export default class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			children: [],
		};
		this.createChild = this.createChild.bind(this);
	}

	createChild() {
		this.state.children = []
	}

	render() {
		return (
			<div className="Row columns is-multiline is-centered">
				<Pot />
				<Pot />
				<Pot />
			</div>
		);
	}
}

import React from 'react';

import './Card.css';

export default class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='Card column is-one-third'>
				<div className='container'>
					123
				</div>
			</div>
		);
	}
}

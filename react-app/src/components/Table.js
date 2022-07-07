import React from 'react';

import './Table.css';

import Pot from './Pot'


export default class Table extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const Pots = this.props.items.map((item, index) => (
			<React.Fragment key={ item.id }>
					<Pot
						id={ item.id }
						image={ item.image }
						name={ item.name }
						humidity={ item.humidity }
						light={ item.light }
						temperature={ item.temperature }
						remainingTime={ item.remainingTime }
					/>
			</React.Fragment>
		));
		return (
			<div className=''>
				<div className='title is-size-4 has-text-centered'>
					Стол №{ this.props.stage } -
					<span className=''>
						{ this.props.stage == 1 ? ' Посев' : this.props.stage == 2 ? ' Проращивание' : ' Готово к сбору' }
					</span>
				</div>
				<div className="Table columns is-multiline is-centered">
					{ Pots }
				</div>
				<div class="is-divider"></div>
			</div>
		);
	}
}

Table.defaultProps = {
	stage: 0,
	items: [
		{
			id: 1,
			image: 'https://bulma.io/images/placeholders/1280x960.png',
			name: 'Наименование 1',
			humidity: 0,
			light: 0,
			temperature: 0,
			remainingTime: 100000000
		}
	],
}

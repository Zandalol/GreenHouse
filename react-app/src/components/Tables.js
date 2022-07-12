import React from 'react';

import './styles/Tables.css';

import Pot from './Pot'


function sortItems(items, stage) {
	return Array.from(items).filter(element => element.stage === stage)
}


function createPots(items, onChangeId) {
	return items.map((item) => (
		<React.Fragment key={item.id}>
			<Pot
				stage={item.stage}
				id={item.id}
				image={item.image}
				name={item.name}
				humidity={item.humidity}
				light={item.light}
				temperature={item.temperature}
				remainingTime={item.remainingTime}
				latestMeasurements={item.latestMeasurements}
			/>
		</React.Fragment>
	));
}


function Tables(props) {

	let onChangeId = (id, action) => {
		props.onChangeId(id, action)
	};

	return (
		<div>
			<div className='Tables'>
				<div className='title is-size-4 has-text-centered'>Стол №1 - Посев</div>
				<div className="columns is-multiline is-centered">
					{createPots(sortItems(props.items, 1), onChangeId)}
				</div>
			</div>
			<div className="is-divider"></div>

			<div className='Tables'>
				<div className='title is-size-4 has-text-centered'>Стол №2 - Проращивание</div>
				<div className="columns is-multiline is-centered">
					{createPots(sortItems(props.items, 2), onChangeId)}
				</div>
			</div>
			<div className="is-divider"></div>

			<div className='Tables'>
				<div className='title is-size-4 has-text-centered'>Стол №3 - Готово к сбору</div>
				<div className="columns is-multiline is-centered">
					{createPots(sortItems(props.items, 3), onChangeId)}
				</div>
			</div>
			<div className="is-divider"></div>
		</div>
	)
}


export default Tables;

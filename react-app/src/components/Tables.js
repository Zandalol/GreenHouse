import React from 'react';

import './Tables.css';

import Pot from './Pot'


function sortItems(items, stage) {
	return Array.from(items).filter(element => element.stage === stage)
}


function createPots(items) {
	return items.map((item) => (
		<React.Fragment key={item.id}>
			<Pot
				id={item.id}
				image={item.image}
				name={item.name}
				humidity={item.humidity}
				light={item.light}
				temperature={item.temperature}
				remainingTime={item.remainingTime}
			/>
		</React.Fragment>
	));
}


function Tables(props) {
	return (
		<div className='Tables'>
			<div className='title is-size-4 has-text-centered'>Стол №1 - Посев</div>
			<div className="Table columns is-multiline is-centered">
				{createPots(sortItems(props.items, 1))}
			</div>
			<div className="is-divider"></div>

			<div className='title is-size-4 has-text-centered'>Стол №2 - Проращивание</div>
			<div className="Table columns is-multiline is-centered">
				{createPots(sortItems(props.items, 2))}
			</div>
			<div className="is-divider"></div>

			<div className='title is-size-4 has-text-centered'>Стол №3 - Готово к сбору</div>
			<div className="Table columns is-multiline is-centered">
				{createPots(sortItems(props.items, 3))}
			</div>
			<div className="is-divider"></div>
		</div>
	);
}


export default Tables;

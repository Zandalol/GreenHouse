import React from 'react';

import './Pot.css';

import iWater from './icons/water.png';
import iLight from './icons/light.png';
import iTemperature from './icons/temperature.png';

import CountdownTimer from './CountdownTimer'


export default class Pot extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className='Pot column is-narrow'>
				<div className='card'>
					<div className='card-image'>
						<p className='has-text-centered is-italic card-content'>
							Горшок №<span className="has-text-weight-bold">{ this.props.id }</span>
						</p>
						<figure className='image is-4by3'>
							<img src={ this.props.image } alt='Placeholder' />
						</figure>
					</div>

					<div className='card-content'>
						<p className='title is-size-4 has-text-centered'>{ this.props.name }</p>
						<div className="list">
							<div className="list-item box has-background-info-light">
								<div className="list-item-image">
									<figure className="image is-32x32">
										<img src={ iWater } alt='Water icon' />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-link-dark">Влажность</div>
									<div className="list-item-description has-text-link-dark">{ this.props.humidity }%</div>
								</div>
							</div>

							<div className="list-item box has-background-warning-light">
								<div className="list-item-image">
									<figure className="image is-32x32">
										<img src={ iLight } alt='Light icon' />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-warning-dark">Свет</div>
									<div className="list-item-description has-text-warning-dark">{ this.props.light }%</div>
								</div>
							</div>

							<div className="list-item box has-background-danger-light">
								<div className="list-item-image">
									<figure className="image is-32x32">
										<img src={ iTemperature } alt='Temperature icon' />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-danger-dark">Температура</div>
									<div className="list-item-description has-text-danger-dark">{ this.props.temperature }%</div>
								</div>
							</div>
						</div>
					</div>
					<div className='card-content'>
						<CountdownTimer targetDate={Date.now() + this.props.remainingTime} />
					</div>
				</div>
			</div>
		);
	}
}

Pot.defaultProps = {
	id: 'Pot_placeholder_id',
	image: 'https://bulma.io/images/placeholders/1280x960.png',
	name: 'Pot_placeholder_name',
	humidity: 'Pot_placeholder_humidity',
	light: 'Pot_placeholder_light',
	temperature: 'Pot_placeholder_temperature',
	remainingTime: 0,
}

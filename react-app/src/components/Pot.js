import React from 'react';

import './Pot.css';

import iWater from './icons/water.png';
import iLight from './icons/light.png';
import iTemperature from './icons/temperature.png';

export default class Pot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			image: 'https://bulma.io/images/placeholders/1280x960.png',
			name: 'Растение',
			humidity: 0,
			light: 0,
			temperature: 0,
		};
	}

	render() {
		return (
			<div className='Pot column'>
				<div className='card'>
					<div className='card-image'>
						<p className='has-text-left is-italic has-text-grey'>Горшок №{ this.state.index }</p>
						<figure className='image is-4by3'>
							<img src={ this.state.image } alt='Placeholder' />
						</figure>
					</div>

					<div className='card-content'>
						<p className='title is-size-4 has-text-centered is-capitalized'>{ this.state.name }</p>
						<div className="list">
							<div className="list-item box has-background-info-light">
								<div className="list-item-image">
									<figure className="image is-64x64">
										<img src={ iWater } />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-link-dark">Влажность</div>
									<div className="list-item-description has-text-link-dark">{ this.state.humidity }%</div>
								</div>
							</div>

							<div className="list-item box has-background-warning-light">
								<div className="list-item-image">
									<figure className="image is-64x64">
										<img src={ iLight } />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-warning-dark">Свет</div>
									<div className="list-item-description has-text-warning-dark">{ this.state.light }%</div>
								</div>
							</div>

							<div className="list-item box has-background-danger-light">
								<div className="list-item-image">
									<figure className="image is-64x64">
										<img src={ iTemperature } />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-danger-dark">Температура</div>
									<div className="list-item-description has-text-danger-dark">{ this.state.temperature }%</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './styles/Pot.css';

import iWater from './icons/water.png';
import iLight from './icons/light.png';
import iTemperature from './icons/temperature.png';

import CountdownTimer from './CountdownTimer'
import Modal from './Modal'


export default class Pot extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false
		};
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this)
	}

	showModal = () => {
		this.setState({ show: true });
	}

	hideModal = () => {
		this.setState({ show: false });
	}

	render() {
		return (
			<div className='Pot column is-narrow'>
				<div className='card'>
					<div className='card-image'>
						<p className='has-text-centered is-italic card-content'>
							Горшок №<span className="has-text-weight-bold">{this.props.id}</span>
						</p>
						<figure className='image is-4by3'>
							<img src={this.props.image} alt='Placeholder' />
						</figure>
					</div>

					<div className='card-content'>
						<p id='name' className='title is-size-4 has-text-centered'>{this.props.name}</p>
						<div className="list">
							<div className="list-item box has-background-info-light">
								<div className="list-item-image">
									<figure className="image is-32x32">
										<img src={iWater} alt='Water icon' />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-link-dark">Влажность</div>
									<div className="list-item-description has-text-link-dark">{this.props.humidity}%</div>
								</div>
							</div>

							<div className="list-item box has-background-warning-light">
								<div className="list-item-image">
									<figure className="image is-32x32">
										<img src={iLight} alt='Light icon' />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-warning-dark">Свет</div>
									<div className="list-item-description has-text-warning-dark">{this.props.light}%</div>
								</div>
							</div>

							<div className="list-item box has-background-danger-light">
								<div className="list-item-image">
									<figure className="image is-32x32">
										<img src={iTemperature} alt='Temperature icon' />
									</figure>
								</div>
								<div className="list-item-content">
									<div className="list-item-title has-text-danger-dark">Температура</div>
									<div className="list-item-description has-text-danger-dark">{this.props.temperature}%</div>
								</div>
							</div>
						</div>
					</div>

					<div className='card-content'>
						<CountdownTimer targetDate={Date.now() + this.props.remainingTime} />
					</div>

					<div className='chart-wrapper'>
						<Modal show={this.state.show} handleClose={this.hideModal}>
							<LineChart
								width={1000}
								height={600}
								data={this.props.latestMeasurements}
								margin={{
									top: 50,
									right: 50,
									left: 5,
									bottom: 25,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type="monotone" dataKey="humidity" stroke="#3098DB" activeDot={{ r: 8 }} />
								<Line type="monotone" dataKey="light" stroke="#FFC107" />
								<Line type="monotone" dataKey="temperature" stroke="#DB3042" />
							</LineChart>
						</Modal>
					</div>

					<div className='card-content has-text-centered'>
						<button className='button is-primary' onClick={e => { this.showModal(); }}>
							<span className='is-size-5 has-text-weight-semibold'>Показать график</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

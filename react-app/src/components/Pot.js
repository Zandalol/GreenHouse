import React from 'react';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'

import './styles/Pot.css';

import iWater from './icons/water.png';
import iLight from './icons/light.png';
import iTemperature from './icons/temperature.png';

import CountdownTimer from './CountdownTimer'
import Modal from './Modal'


const localhostURL = 'http://localhost:5000';
const herokuURL = 'https://gureev-greenhouse-app.herokuapp.com';
const currentEnv = window.location.href.includes('localhost') ? localhostURL : herokuURL;
const rootUrl = process.env.NODE_ENV === 'production' ? currentEnv : '';


function areEqual(prevProps, nextProps) {
	/*
	return true if passing nextProps to render would return
	the same result as passing prevProps to render,
	otherwise return false
	*/
	if (nextProps.stage == prevProps.stage) {
		return true
	} else {
		return false
	}
}


function Pot(props) {
	const [show, setShow] = useState(false);
	const [buttonStyle, setButtonStyle] = useState('button is-small is-fullwidth is-warning');

	const mutation = useMutation((action) => {
		return fetch(rootUrl + '/posts' + '/' + props.id + '/' + action, { mode: 'cors', method: 'POST' })
	})

	var showModal = () => {
		setShow(true)
	}

	var hideModal = () => {
		setShow(false)
	}

	return (
		<div className='Pot column is-narrow'>
			<div className='card'>
				<div className='card-image'>
					<p className='has-text-centered is-italic card-content'>
						Горшок №<span className="has-text-weight-bold">{props.id}</span>
					</p>
					<figure className='image is-4by3'>
						<img src={props.image} alt='Placeholder' />
					</figure>
				</div>

				<div className='card-content'>
					<p id='name' className='title is-size-4 has-text-centered'>{props.name}</p>
					<div className="list">
						<div className="list-item box has-background-info-light">
							<div className="list-item-image">
								<figure className="image is-32x32">
									<img src={iWater} alt='Water icon' />
								</figure>
							</div>
							<div className="list-item-content">
								<div className="list-item-title has-text-link-dark">Влажность</div>
								<div className="list-item-description has-text-link-dark">{props.humidity}%</div>
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
								<div className="list-item-description has-text-warning-dark">{props.light}%</div>
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
								<div className="list-item-description has-text-danger-dark">{props.temperature}%</div>
							</div>
						</div>
					</div>
				</div>

				<div className='card-content'>
					<CountdownTimer targetDate={Date.now() + props.remainingTime} />
				</div>

				<div className='chart-wrapper'>
					<Modal show={show} handleClose={hideModal}>
						<LineChart
							width={1000}
							height={600}
							data={props.latestMeasurements}
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

				<div id='show-graphs-button' className='has-text-centered'>
					<button className='button is-primary is-fullwidth' onClick={e => { showModal(); }}>
						<span className='is-size-5 has-text-weight-semibold'>Показать графики</span>
					</button>
				</div>

				<div className='has-text-centered'>
					<button
						className={props.stage > 1 ? buttonStyle : buttonStyle + ' is-static'}
						onClick={e => { mutation.mutate('decrease') }}
					>
						<span>▲ На предыдущую стадию ▲</span>
					</button>
				</div>
				<div className='has-text-centered'>
					<button
						className={props.stage < 3 ? buttonStyle : buttonStyle + ' is-static'}
						onClick={e => { mutation.mutate('increase') }}
					>
						<span>▼ На следующую стадию ▼</span>
					</button>
				</div>
			</div>
		</div>
	);
}


export default React.memo(Pot, areEqual);

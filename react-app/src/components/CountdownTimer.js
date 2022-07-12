import React from 'react';

import { useCountdown } from './hooks/useCountdown';

import './styles/CountdownTimer.css';


const DateTimeDisplay = ({ value, type, isDanger }) => {
	return (
		<div className={isDanger ? 'countdown danger' : 'countdown'}>
			<p>{value}</p>
			<span>{type}</span>
		</div>
	);
};


const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="show-counter">
			<span className="countdown-link">
				<DateTimeDisplay value={days} type={'Дней'} isDanger={days < 1} />
				<p>:</p>
				<DateTimeDisplay value={hours} type={'Часов'} isDanger={hours < 1} />
				<p>:</p>
				<DateTimeDisplay value={minutes} type={'Минут'} isDanger={minutes < 1} />
				<p>:</p>
				<DateTimeDisplay value={seconds} type={'Секунд'} isDanger={seconds < 1} />
			</span>
		</div>
	);
};


const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	return (
		<ShowCounter
			days={days}
			hours={hours}
			minutes={minutes}
			seconds={seconds}
		/>
	);
};


export default CountdownTimer;

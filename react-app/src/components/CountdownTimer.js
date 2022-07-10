import React from 'react';

import { useCountdown } from '../hooks/useCountdown';

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
				<DateTimeDisplay value={days} type={'Дней'} isDanger={days <= 3} />
				<p>:</p>
				<DateTimeDisplay value={hours} type={'Часов'} isDanger={false} />
				<p>:</p>
				<DateTimeDisplay value={minutes} type={'Минут'} isDanger={false} />
				<p>:</p>
				<DateTimeDisplay value={seconds} type={'Секунд'} isDanger={false} />
			</span>
		</div>
	);
};


const CountdownTimer = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	// if (days + hours + minutes + seconds <= 0) {
	// 	return <ExpiredNotice />;
	// } else {
	// 	return (
	// 		<ShowCounter
	// 			days={days}
	// 			hours={hours}
	// 			minutes={minutes}
	// 			seconds={seconds}
	// 		/>
	// 	);
	// }

	return (
		<ShowCounter
			days={days}
			hours={hours}
			minutes={minutes}
			seconds={seconds}
		/>
	);
};


const ExpiredNotice = () => {
	return (
		<div className="expired-notice">
			<span>Время вышло!</span>
			<p>Пора пересаживать.</p>
		</div>
	);
};


export default CountdownTimer;

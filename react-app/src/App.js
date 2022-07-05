import React from 'react';

import './App.css';

import Row from './components/Row'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App container">
				<Row />
			</div>
		);
	}
}

export default App;

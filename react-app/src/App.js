import React from 'react';

import './App.css';

import Table from './components/Table'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App container">
				<Table />
			</div>
		);
	}
}

export default App;

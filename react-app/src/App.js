import React from 'react';

import './App.css';

import Table from './components/Table'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			sortedData: {
				1: [],
				2: [],
				3: []
			},
		};

		setInterval(() => {
			this.updateAPI()
			console.log('ping')
		}, 5000);
	}

	componentDidMount() {		
		this.updateAPI()
	}

	updateAPI() {
		this.callBackendAPI()
			.then(res => {
				this.setState({ data: res })
				this.sortData()
			})
			.catch(err => console.log(err));
	}

	callBackendAPI = async () => {
		const rootUrl = process.env.NODE_ENV === "production" ? "http://localhost:5000" : ""
		// https://gureev-greenhouse-app.herokuapp.com
		const response = await fetch(rootUrl + '/data', {mode:'cors'});
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message)
		}
		console.log(response)
		return body;
	}	

	sortData() {
		this.state.data.items.forEach(element => {
			let stage = element.stage
			delete element.stage
			this.state.sortedData[stage.toString()].push(element)
		});
	}

	render() {
		return (
			<div className="App container">
				<Table
					stage={ 1 }
					items={ this.state.sortedData["1"] }
				/>
				<Table
					stage={ 2 }
					items={ this.state.sortedData["2"] }
				/>
				<Table
					stage={ 3 }
					items={ this.state.sortedData["3"] }
				/>
			</div>
		);
	}
}

export default App;

import React from 'react';

import './App.css';

import Table from './components/Table'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			sortedData: {
				1: [
					{
						"stage": 1,
						"id": 1,
						"image": "https://static8.depositphotos.com/1592123/1068/i/950/depositphotos_10689392-stock-photo-radish-organic.jpg",
						"name": "Редис",
						"humidity": 57,
						"light": 28,
						"temperature": 24,
						"remainingTime": 100000000
					},
					{
						"stage": 1,
						"id": 2,
						"image": "https://st.depositphotos.com/1592123/1392/i/950/depositphotos_13926172-stock-photo-vegetables-carrots-and-lettuce-growing.jpg",
						"name": "Морковь",
						"humidity": 60,
						"light": 29,
						"temperature": 25,
						"remainingTime": 10000000
					},
					{
						"stage": 1,
						"id": 3,
						"image": "https://static8.depositphotos.com/1592123/1068/i/950/depositphotos_10689374-stock-photo-carrots-organic.jpg",
						"name": "Морковь",
						"humidity": 53,
						"light": 27,
						"temperature": 24,
						"remainingTime": 5000
					}
				],
				2: [
					{
						"stage": 2,
						"id": 4,
						"image": "https://st3.depositphotos.com/7870458/13490/i/1600/depositphotos_134903912-stock-photo-fresh-cauliflower-on-a-farm.jpg",
						"name": "Цветная капуста",
						"humidity": 55,
						"light": 27,
						"temperature": 27,
						"remainingTime": 100000
					},
					{
						"stage": 2,
						"id": 5,
						"image": "https://static9.depositphotos.com/1592123/1112/i/950/depositphotos_11122948-stock-photo-lettuce-growing-in-the-garden.jpg",
						"name": "Салат",
						"humidity": 40,
						"light": 30,
						"temperature": 25,
						"remainingTime": 50000000
					}
				],
				3: [
					{
						"stage": 3,
						"id": 6,
						"image": "https://static4.depositphotos.com/1000833/432/i/950/depositphotos_4321291-free-stock-photo-cabbage-background.jpg",
						"name": "Капуста",
						"humidity": 45,
						"light": 50,
						"temperature": 30,
						"remainingTime": 25000000
					}
				]
			},
		};
	}

	// callBackendAPI = async () => {
	// 	const response = await fetch('/data');
	// 	const body = await response.json();

	// 	if (response.status !== 200) {
	// 		throw Error(body.message)
	// 	}
	// 	return body;
	// };
	
	// componentDidMount() {
	// 	this.callBackendAPI()
	// 		.then(res => {
	// 			this.setState({ data: res })
	// 			this.sortData()
	// 		})
	// 		.catch(err => console.log(err));
	// }

	// sortData() {
	// 	this.state.data.items.forEach(element => {
	// 		let stage = element.stage
	// 		delete element.stage
	// 		this.state.sortedData[stage.toString()].push(element)
	// 	});
	// }

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

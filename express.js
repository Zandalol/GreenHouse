const express = require('express');

const path = require('path');

const fs = require('fs');

const cors = require("cors");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;


// const whitelist = ["http://localhost:5000", "https://gureev-greenhouse-app.herokuapp.com"]
// const corsOptions = {
// 	origin: function (origin, callback) {
// 		if (!origin || whitelist.indexOf(origin) !== -1) {
// 			callback(null, true)
// 		} else {
// 			callback(new Error("Not allowed by CORS"))
// 		}
// 	},
// 	credentials: true,
// }
// app.use(cors(corsOptions))
app.use(cors())


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'react-app/build')));


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

function generateRandomMeasurements(step) {
	return {
		"name": step * 10,
		"humidity": getRandomInt(30, 60),
		"light": getRandomInt(20, 40),
		"temperature": getRandomInt(15, 25)
	}
};

function prepareLatestMeasurements(length) {
	latestMeasurements = new Array();
	for (let index = 0; index < length; index++) {
		latestMeasurements.push(generateRandomMeasurements(index + 1))
	};
	return latestMeasurements
};


var initialData;
fs.readFile('./data/data.json', (err, data) => {
	if (err) throw err;
	initialData = JSON.parse(data);
	initialData.items.forEach(element => {
		element.latestMeasurements = prepareLatestMeasurements(10);
		element.humidity = element.latestMeasurements[element.latestMeasurements.length - 1].humidity;
		element.light = element.latestMeasurements[element.latestMeasurements.length - 1].light;
		element.temperature = element.latestMeasurements[element.latestMeasurements.length - 1].temperature;
	});
	var intervalTime = setInterval(() => {
		initialData.items.forEach(element => {
			element.remainingTime == 0 ? element.remainingTime = 0 : element.remainingTime -= 10000
		});
	}, 10000);
});


app.get("/data", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.type('application/json')

	res.json(initialData);
});


app.post("/posts/:id/:action", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	initialData.items.forEach(element => {
		if (element.id == req.params.id) {
			if (req.params.action == 'increase') {
				element.stage = element.stage + 1;
				element.remainingTime = 86400000
			};
			if (req.params.action == 'decrease') {
				element.stage = element.stage - 1;
				element.remainingTime = 86400000
			}
		}
	});
	res.end();
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/react-app/build/index.html'));
});


app.listen(port, () => {
	console.log(`Listening on port ${port}\n`);
})

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require("cors");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;


const whitelist = ["http://localhost:5000", "https://gureev-greenhouse-app.herokuapp.com"]
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error("Not allowed by CORS"))
		}
	},
	credentials: true,
}
app.use(cors(corsOptions))


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'react-app/build')));

app.get("/data", (req, res) => {
	fs.readFile('./data/data.json', (err, data) => {
		if (err) throw err;
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		let jsonData = JSON.parse(data);
		console.log(jsonData);
		res.json(jsonData);
	});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/react-app/build/index.html'));
});


console.log(`Listening on ${port}`);
app.listen(port);

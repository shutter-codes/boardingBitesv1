const mongoose = require('mongoose');
//const {databaseURL} = require('../config');

mongoose.connect("mongodb://127.0.0.1/Boarding-Bites").then(() => {
	console.log("Connected Successfully!");
}).catch((err) => {
	console.log("Error! Could not connect " + err);
});
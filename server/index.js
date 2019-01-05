const express = require('express');
const axios = require('axios');
var dbfunctions = require('../db/dbfunctions.js')

// Middleware
const bodyParser = require('body-parser');

const app = express();
// app.use('/:id', express.static(__dirname + '/../client/dist'));
app.use('/:listingID', express.static(__dirname + '/../client/dist'));
console.log(__dirname + '/../client/dist');
app.use(bodyParser.json());


app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});


let port = 5000;
app.listen(port, function () {
    console.log(`listening on Port ${port}...`);
});

// Get images by Listing ID #
app.get('/api/pictures/:listingID', function (req, res) {
// app.get('http://ec2-3-17-163-197.us-east-2.compute.amazonaws.com/api/items/:listingID', function (req, res) {
    let listingID = req.params.listingID;
    // console.log('What is the requested listing? >>>>>>>>', req.params.listingID);

    dbfunctions.findImagebyID(listingID)
    .then((docs) => {
        // console.log('What is docs after get req by ID >>>>>>', docs);
        res.send(docs);
    })
    .catch((err) => {
        // console.log(`Error getting images by listing ${listingID}:`, err);
        res.sendStatus(500);
    })
});

module.exports = app;
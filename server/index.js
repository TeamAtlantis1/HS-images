const express = require('express');
const axios = require('axios');
var dbfunctions = require('../db/dbfunctions.js')

// Middleware
// const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json());

let port = 3006;
app.listen(port, function () {
    console.log(`listening on Port ${port}...`);
})

app.get('/images', function (req, res) {
    console.log('is it coming in here?')
    dbfunctions.findAllImages((err, docs) => {
        if (err) {
            console.log(err);
        } else {    
            res.send(docs);
        }
    })
})

app.get('/images', function(req, res) {
    
})

module.exports = app;
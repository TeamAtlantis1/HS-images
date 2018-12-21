const express = require('express');
const axios = require('axios');

// Middleware
// const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json());

let port = 3006;
app.listen(port, function () {
    console.log(`listening on Port ${port}...`);
})

module.exports = app;
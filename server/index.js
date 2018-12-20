const express = require('express');
const axios = require('axios');

const bodyParser = require('body-parser');

let app = express();
app.use(express.static(__dirname + '/../client/dist'));




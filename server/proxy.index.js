const express = require('express');

// Middleware
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');    

const proxyServer = express();
proxyServer.use(express.static(__dirname + '/../client/dist'));
proxyServer.use(bodyParser.json());
proxyServer.use(proxy);

let port = 5001;
proxyServer.listen(port, function () {
    console.log(`listening on Port ${port}...`);
});

module.exports = proxyServer;
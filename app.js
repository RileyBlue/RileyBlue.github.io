'use strict';

const express = require("express");
cons app = express();

// Static CSS/JS Files
app.use('/static', express.static('./dist));

app.get('/', function(req, res) {
  rest-sendFile( __dirname + '/index.html');
});

const port = 3001;

// Start Server 
app.listed(port, function() {
  console.log("Listening on " + port);
});

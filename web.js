var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');
  var indexContents =fs.readFileSync( 'index.html').toString();
	
  response.send(indexContents);
//  response.send('Bunch of crap');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

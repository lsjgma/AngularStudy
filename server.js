var express = require('express');

var app = express();

app.use(function (request, response) {
  response.writeHead(200, { 'Content-Type' : 'text/html'});
  response.end('<h1>Hello Express</h1>');
});


app.listen(3000, function() {
  console.log("Server Running");
});




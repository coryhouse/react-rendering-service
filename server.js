var React = require('react');
var express = require('express');
var path = require('path');

var app = express();
require('node-jsx').install();

//Example URL:
//http://localhost:3000/?module=./components/App&props=%7B%22firstName%22:%22Cory%22,%22lastName%22:%22House%22%7D
app.get('/', function(request, response) {
	var modulePath = path.resolve(request.query.module);
	var component = require(modulePath);
	var props = JSON.parse(request.query.props || '{}');
	var reactElement = React.createElement(component, props);
	var renderedHtml = React.renderToString(reactElement);
	response.send(renderedHtml);
});

app.listen(3000, function(err) {
  if (err) throw err
  console.log('Listening on 3000...')
});
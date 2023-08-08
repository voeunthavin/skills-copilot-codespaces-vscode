// Create web server application that can accept POST requests to /comments
// and add them to an array of comments in memory.
// Return all comments in memory to GET requests to /comments

// Load Express
var express = require('express');
var app = express();

// Load body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set port
app.set('port', process.env.PORT || 3000);

// Use static middleware
app.use(express.static(__dirname + '/public'));

// Array of comments
var comments = [
  { name: 'John', message: 'Hello' },
  { name: 'Mary', message: 'Hi' },
  { name: 'Sue', message: 'Howdy' }
];

// GET /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(comments);
});

// Listen for connections
app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
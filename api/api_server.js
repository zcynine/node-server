const express = require('express');
const server = express();
const users = require('./users');

server.set('port', process.env.PORT || 3000);

// Basic routes
server.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html');
});

server.get('/users', (request, response) => {
	response.json(users);
});

// Express error handling middleware
server.use((request, response) => {
	response.type('text/plain');
	response.status(505);
	response.send('Error Page');
});

server.listen(3000, () => {
    console.log('Node server created at port 3000');
});
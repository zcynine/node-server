const express = require('express');
const server = express();

server.set('port', process.env.PORT || 3000);

// Basic routes
server.get('/', (request, response) => {
	response.send('Home Page');
});

server.get('/about', (request, response) => {
	response.send('About Page');
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
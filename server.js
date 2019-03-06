// server.js
const http = require('http');
const url = require('url');

makeServer = (request, response) => {
	let path = url.parse(request.url).pathname;
	console.log(path);

	if (path === '/') {
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.write('Hello world');
	} else if (path === '/about') {
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.write('About Page');
	} else if (path === '/blog') {
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.write('Blog Page');
	} else {
		response.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		response.write('Error Page');
	}
	
	response.end();
};

server = http.createServer(makeServer);

server.listen(3000, () => {
    console.log('Node server created at port 3000');
});
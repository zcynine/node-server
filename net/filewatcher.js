const net = require('net');
const fs = require('fs');
const filename = process.argv[2];

server = net.createServer((connection) => {
    console.log('Subscriber connected');
    connection.write(`watching ${filename} for changes`);

    let watcher = fs.watch(filename, (err, data) =>{
        connection.write(`${filename} has changed`);
        connection.write(fs.readFileSync(`${filename}`));
    });

    connection.on('close', () => {
        console.log('Subscriber disconnected');
        watcher.close();
    });
});

server.listen(3000, () => {
    console.log('listening for subscribers');
});
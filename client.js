var dgram = require('dgram');
var client = dgram.createSocket('udp4');

process.stdin.on('data', (data)=> { 
	client.send(data, 0, data.length, 4000, 'localhost');
});

client.on('message', (message)=> {
	 console.log('Got message back:', message.toString());
});
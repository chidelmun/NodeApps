var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message', (message)=> { 
	console.log('server got message: ' + message);
});

var port = 4000;

server.on('listening', ()=> {
	var address = server.address();
	console.log('server listening on ' + address.address + ':' + address.port);
	
}); 

server.bind(port);
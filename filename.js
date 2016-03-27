var tcp = require('net');

tcp.createServer((socket)=>{
	socket.write("Welcome\n");

	socket.on('data', (data)=>{
		console.log(data.toString());
	})

}).listen(8882);
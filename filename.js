var tcp = require('net');

tcp.createServer((socket)=>{
	timeout = 5000;
	socket.setTimeout(timeout);
	socket.on('timeout', ()=>{
		socket.write("Connection Timeout... Bye");
		socket.end();
	});
	socket.write("Welcome\n");

	socket.on('data', (data)=>{
		console.log(data.toString());
	})

}).listen(8885);
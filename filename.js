var tcp = require('net');

tcp.createServer((socket)=>{
	// timeout = 5000;
	// socket.setTimeout(timeout);
	// socket.on('timeout', ()=>{
	// 	socket.write("Connection Timeout... Bye");
	// 	socket.end();
	// });
	socket.on('connection', ()=>{
		console.log("You are Welcome !!");
	})
	socket.write("You are Welcome!!\n");

	socket.on('data', (data)=>{
		socket.write("I know you are " + data);
	})

}).listen(8885);
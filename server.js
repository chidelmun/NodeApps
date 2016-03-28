var net = require('net');

serv = net.createServer();
serv.on('connection', (socket)=>{
	console.log("A client connected\n");
	socket.on('data', (data)=>{
		console.log(data.toString());
		socket.write(data.toString());
	});
});

serv.listen(9999);
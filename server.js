var net = require('net');

serv = net.createServer((socket)=>{
		console.log("A client Connected\n");

		socket.on('data', function(data) { 
			console.log("Got Data");
			console.log(data.toString());
			socket.write(data.toString());
		});
});
serv.listen(9999);
var net = require('net');
var os = require('os')
PORT = 9999;
conn = net.createConnection(PORT);
conn.on('connect', ()=>{
	console.log("Connected to Server\n");
});

process.stdin.pipe(conn)

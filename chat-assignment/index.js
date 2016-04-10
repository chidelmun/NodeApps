var app = require('express')();
var http = require('http').Server(app);		// Pass express app to http server
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("A client connected");

});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){	
	var username = user;
    io.emit('chat message', username + " : " + msg);
  });

  socket.on('join', function(nick) { 
  	console.log(nick + " has Joinned chat!");
  	user = nick;
  	io.set('user', nick, function(err) {
	if (err) { 
		throw err;
	 }
 });
});

});

http.listen(3000, function(){
  console.log('listening on 0.0.0.0:3000');
});

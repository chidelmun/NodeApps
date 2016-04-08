var app = require('express')();
var http = require('http').Server(app);		// Pass express app to http server
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("A client connected");

});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', "  " + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

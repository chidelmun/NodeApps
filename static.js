var connect = require('connect'),
serveStatic = require('serve-static');

var app = connect();
app.get('/', (req,res)=>{
	res.end("Hello");
});
app.use(serveStatic(__dirname + "/public"));
app.use(serveStatic(__dirname + "/style"));
app.listen(5000);
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log(req.params.username);
	if (req.body.username == 'root' && req.body.password == 'root') {
		res.render('login', { title: 'Login' });
	}
  res.render('login', { title: 'Login' });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Signup Page',mac : os.networkInterfaces().en1[0].mac.toString()  });
});

module.exports = router;

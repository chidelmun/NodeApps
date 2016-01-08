var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var name = req.params.name;
  res.send(' <H1>Contacts with a resource</H1>');
});

module.exports = router;

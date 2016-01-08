var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name?', function(req, res, next) {
	var name = req.params.name;
  res.send(name + ' <H1>respond with a resource</H1>');
});

module.exports = router;

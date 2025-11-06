var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tattoos', { title: 'Search Results Tattoos' });
});

module.exports = router;

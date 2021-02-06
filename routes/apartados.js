var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('apartados', { title: 'La Mafia del Poder' });
});

module.exports = router;

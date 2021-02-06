var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('alumnos', { title: 'Alumnos' });
});

router.get('/chavez', function(req, res, next) {
  res.render('integrantes/gonzalo', { title: 'Chavez Onofre Gonzalo' });
});

router.get('/garcia', function(req, res, next) {
  res.render('integrantes/karen', { title: 'Garcia Sánchez Ana Karen' });
});

router.get('/liberos', function(req, res, next) {
  res.render('integrantes/angel', { title: 'Liberos Sánchez José Angel' });
});

router.get('/lopez', function(req, res, next) {
  res.render('integrantes/luis', { title: 'López González Luis Alberto' });
});

router.get('/pinia', function(req, res, next) {
  res.render('integrantes/cristopher', { title: 'Piña Reyes Cristopher Alan' });
});

router.get('/trujillo', function(req, res, next) {
  res.render('integrantes/truji', { title: 'Trujillo Zamudio Misael' });
});


module.exports = router;

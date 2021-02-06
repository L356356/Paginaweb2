var express = require('express');
var router = express.Router();

router.get('/que_es_scrum', function(req, res, next) {
  	res.render('paginas/apartado3/que_es_scrum', { title: '¿Qué es SCRUM?' });
});

router.get('/metodologia_agil', function(req, res, next){
	res.render('paginas/apartado3/metagi', { title: 'Metodología Ágil' });
});

router.get('/herramientas_scrum', function(req, res, next){
	res.render('paginas/apartado3/herramientas_scrum', { title: 'Herramientas que se usan en SCRUM' });
});

router.get('/roles', function(req, res, next){
	res.render('paginas/apartado3/roles_scrum', { title: 'Roles' });
});
module.exports = router;

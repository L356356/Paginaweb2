var express = require('express');
var router = express.Router();

router.get('/TPS', function(req, res, next) {
  	res.render('paginas/apartado2/sistemas_de_información_transaccionales', { title: 'TPS' });
});

router.get('/CRM', function(req, res, next){
	res.render('paginas/apartado2/CRM', { title: 'CRM' });
});

router.get('/MIS', function(req, res, next){
	res.render('paginas/apartado2/sistmis', { title: 'MIS' });
});

module.exports = router;

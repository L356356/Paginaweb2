var express = require('express');
var router = express.Router();

router.get('/componentes_basicos_de_un_si', function(req, res, next) {
  	res.render('paginas/apartado1/componentes_basicos_de_un_sistema_de_informacion', { title: 'Componentes Básicos de un SI' });
});

router.get('/definiciones_basicas', function(req, res, next){
	res.render('paginas/apartado1/definiciones_basicas', { title: 'Definiciones Básicas' });
});

router.get('/informacion_util', function(req, res, next){
	res.render('paginas/apartado1/infut', { title: 'información Útil' });
});

module.exports = router;

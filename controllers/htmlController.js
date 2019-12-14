var apiController = require('./apiController');
var bodyParser = require('body-parser');
module.exports = function(app){
	app.get('/adminpanel', function(req, res){
		res.render('admin');

	});
	
	app.get('/Starhd/home', function(req, res){
		res.render('home');
		
	});
	app.get('/Starhd/latest', function(req, res){
		res.render('latest');
		
	});
	app.get('/Starhd/Gothic_Harvest', function(req, res){
		res.render('Gothic_Harvest');
		
	});
	app.get('/Starhd/Joker', function(req, res){
		res.render('Joker');
		
	});
}
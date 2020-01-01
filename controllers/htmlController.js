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
	app.get('/Starhd/PointBlank', function(req, res){
		res.render('PointBlank');
		
	});
	app.get('/Starhd/Klaus', function(req, res){
		res.render('Klaus');
		
	});
	app.get('/Starhd/Inception', function(req, res){
		res.render('Inception');
		
	});
	app.get('/Starhd/Hustle', function(req, res){
		res.render('Hustle');
		
	});
	app.get('/Starhd/Extortion', function(req, res){
		res.render('Extortion');
		
	});
	app.get('/Starhd/Endgame', function(req, res){
		res.render('Endgame');
		
	});
	app.get('/Starhd/BeingFrank', function(req, res){
		res.render('BeingF');
		
	});
	app.get('/Starhd/Aladdin', function(req, res){
		res.render('Aladdin');
		
	});
}
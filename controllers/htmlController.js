var apiController = require('./apiController');
module.exports = function(app){
	app.get('/adminpanel', function(req, res){
		res.render('admin');
	});
	app.get('/Starhd/home', function(req, res){
		res.render('home');
		
	});
	app.get('/Starhd/Gothic_Harvest', function(req, res){
		res.render('Gothic_Harvest');
		
	});
	app.get('/Starhd/Joker', function(req, res){
		res.render('Joker');
		
	});
}
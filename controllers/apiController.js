var express = require('express');
var htmlController = require('./htmlController');
var fs = require('fs');
var formidable = require('formidable');
var path = require('path');
var Movie = require('../models/mongooseMovie');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
module.exports =  function(app){

	Movie.createMapping(function(err, mapping){
		if (err) {
			console.log("error creating mapping");
			console.log(err);
		} else {
			console.log("Mapping created");
			console.log(mapping);
		}
	})

	var stream = Movie.synchronize();
var count = 0;

stream.on('data', function(){
	count++;
});

stream.on('close', function(){
	console.log("Indexed "+ count + " documents");
});

stream.on('error', function(){
	console.log(err);
});


//var movie  = Movie.findOne({text: req.body.q} );

/*//adding documents to database
var Movie1 = new Movie ({
    text: 'Gothic Harvest',
     year: '2019'
});
Movie1.save().then(function(doc){
    console.log(JSON.stringify(doc, undefined, 2));

}, function(err){
    console.log('unable to save', err);
});
Movie1.on('es-indexed', function(err, result){
    console.log('indexed to elastic search');
});

var Movie2 = new Movie ({
    text: 'Joker' , 
    year: '2019'
});
Movie2.save().then(function(doc){
    console.log(JSON.stringify(doc, undefined, 2));

}, function(err){
    console.log('unable to save', err);
});

Movie2.on('es-indexed', function(err, result){
    console.log('indexed to elastic search');
});
//adding doc to database*/


//search
app.post('/search', function(req, res){
	res.redirect('/Starhd/search?q=' + req.body.q);
});

app.get('/Starhd/search', function(req, res){
	if (req.query.q){
		Movie.search({
			query_string: { query: req.query.q}
		}, function(err, results){ 
			if (err) return next(err);
			var data = results.hits.hits.map(function(hit){
				return hit;
			});
			res.render('search-result',{
				query: req.query.q,
				data: data
			});
		});
	}
});
//search

//movies
/*
router.get('/products/:id', function(req, res, next){
	Product
	.find({ category: req.params.id })
	.populate('category')
	.exec(function(err, products){
		if(err) return next(err);
		res.render('main/category', {
			products: products
		});
	});
}); 
  */
app.get('/movie/:id', function(req, res){
	Movie.find({ text: req.params.id }, function(err, movie){
		if (err) return next(err);
		res.render('main/movie', {
			movie: movie
		});
	});
});

//movies
/* 	app.use('/download/100.Acres.Of.Hell.2017.WEB-DL.x264-FGT.mp4', express.static(__dirname + '/uploads')); */
	app.post( '/fileupload', function(req, res){
	if (req.url == '/fileupload') {
		var form = new formidable.IncomingForm();
		form.maxFileSize = 2048 * 1024 * 1024;
form.parse(req, function (err, fields, files) {
var oldpath = files.filetoupload.path;
var newpath = 'C:/Users/Pavilion g6/Documents/Nodejs/Starhd/uploads/' + files.filetoupload.name;
fs.rename(oldpath, newpath, function (err) {
if (err) throw err;
res.write('File uploaded and moved!');
res.end();
});
});
}
else{
	res.redirect('/adminpanel');
}
	});
	
	app.get('/download/Gothic_Harvest.mp4', function(req, res){
		var filePath = "C:/Users/Pavilion g6/Documents/Nodejs/Starhd/uploads/Gothic.Harvest.2019.HDRip.- TWOMOVIES.mp4";
		var fileName = "Gothic.Harvest.2019.HDRip.- TWOMOVIES.mp4";
		res.download(filePath, fileName);
		
	});
	app.get('/download/Joker.mp4', function(req, res){
		var filePath = "C:/Users/Pavilion g6/Documents/Nodejs/Starhd/uploads/Joker.mp4";
		var fileName = "Joker.mp4";
		res.download(filePath, fileName);
		
	});
	
	
}
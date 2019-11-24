var htmlController = require('./htmlController');
var fs = require('fs');
var formidable = require('formidable');
var path = require('path');
module.exports =  function(app){
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
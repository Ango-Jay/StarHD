
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var formidable = require('formidable');
var folder = __dirname + '/views';
app.set('views',  folder,);
app.set('view engine', 'ejs',);
var port = process.env.PORT||1447 ;
apiController = require('./controllers/apiController');
htmlController = require('./controllers/htmlController');
video = require('./controllers/video');






//middleware
app.use(bodyParser.urlencoded({ extended: false }));
 app.use('/Starhd/css', express.static(__dirname + '/public/css'));
 app.use('/Starhd/js', express.static(__dirname + '/public/js'));
 app.use('/Starhd/fonts', express.static(__dirname + '/public/fonts'));
 app.use('/Starhd/images', express.static(__dirname + '/public/images'));
 app.use('/Starhd/users', express.static(__dirname + '/public/users'));
 // app.use('/Starhd/uploads', express.static(__dirname + '/uploads/Gothic_H.mp4'));
 // app.use('/Starhd/uploads', express.static(__dirname + '/uploads/Gothic_H.mp4'));
 
//middleware



apiController(app);
htmlController(app);
video(app);
app.listen(port);
console.log('server good');
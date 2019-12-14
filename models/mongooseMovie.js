
var  mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');



var MovieSchema = new mongoose.Schema ({
    text: {
        type: String
     },
     year: {
         type: Number
     }
});


MovieSchema.plugin(mongoosastic, {
    "host": "localhost",
    "port": 9200
});




module.exports = mongoose.model('Movie', MovieSchema);
/*
Movie.createMapping( function(err, mapping){
    console.log('mapping created');
});


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
*/
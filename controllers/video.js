
var fs = require("fs"),
    http = require("http"),
    url = require("url"),
    path = require("path");
module.exports = function(app){
app.get('/uploads/Gothic_H.mp4', function(req, res){
		
		 var file = "C:/Users/Pavilion g6/Documents/Nodejs/Starhd/uploads/Gothic_H.mp4";
    fs.stat(file, function(err, stats) {
      if (err) {
        if (err.code === 'ENOENT') {
          // 404 Error if file not found
          return res.sendStatus(404);
        }
      res.end(err);
      }
  var range = req.headers.range;
      if (!range) {
       // 416 Wrong range
       return res.sendStatus(416);
      }
	   var positions = range.replace(/bytes=/, "").split("-");
      var start = parseInt(positions[0], 10);
      var total = stats.size;
      var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
      var chunksize = (end - start) + 1;

      res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4"
      });
	  var stream = fs.createReadStream(file, { start: start, end: end })
        .on("open", function() {
          stream.pipe(res);
        }).on("error", function(err) {
          res.end(err);
        });
    });
  });
  
  app.get('/uploads/Joker.mp4', function(req, res){
		
    var file = "C:/Users/Pavilion g6/Documents/Nodejs/Starhd/uploads/Joker.mp4";
   fs.stat(file, function(err, stats) {
     if (err) {
       if (err.code === 'ENOENT') {
         // 404 Error if file not found
         return res.sendStatus(404);
       }
     res.end(err);
     }
 var range = req.headers.range;
     if (!range) {
      // 416 Wrong range
      return res.sendStatus(416);
     }
    var positions = range.replace(/bytes=/, "").split("-");
     var start = parseInt(positions[0], 10);
     var total = stats.size;
     var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
     var chunksize = (end - start) + 1;

     res.writeHead(206, {
       "Content-Range": "bytes " + start + "-" + end + "/" + total,
       "Accept-Ranges": "bytes",
       "Content-Length": chunksize,
       "Content-Type": "video/mp4"
     });
   var stream = fs.createReadStream(file, { start: start, end: end })
       .on("open", function() {
         stream.pipe(res);
       }).on("error", function(err) {
         res.end(err);
       });
   });
 });
}
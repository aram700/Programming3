var express = require("express");
var app = express();


app.get("/", function(req, res){
   res.send("<h1>Hi!</h1>");
});
app.get("/google/:search", function(req, res){
   var search = req.params.search;
   res.redirect('http://google.com/' + 'search?q=' + search);
});
app.get("/gugle", function(req, res){
    var search = req.params.search;
    res.send('<h1>Error 404 </h1>'+'<hr>'+'<h5>please send OT3bIB</h5>');
 });
app.listen(4567, function(){
   console.log("Example is running on port 4567");
});

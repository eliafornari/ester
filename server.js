var express = require('express');
var app = express();
var prerender =require('prerender-node');


app.use(prerender.set('prerenderToken', 'Q3Hw1TX334qx2YzUJ9DV'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(9000);

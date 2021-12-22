var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
let PORT = process.env.PORT || 4000;
app.locals.pretty = true;
app.use(express.urlencoded({extended:false}));
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

app.get('/',function(req,res){
    res.render('/main');
})
app.get('/main', function(req,res){
    res.render('./main');
});
app.get('/blog', function(req,res){
    res.render('./blog');
})
app.listen(PORT, function(req,res){
    console.log(`Connected to http://localhost:${PORT}/main`);
});
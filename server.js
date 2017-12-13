var express = require('express');
var app = express();
var myPowers = require('./src/common/util/math/myPowers.js');




app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' },
        name: 'Sebastian',
        lastname: 'Gallo'
    };
    res.render('./pages/index.ejs', data2template);
});


var server = app.listen(8014, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});


//cube.ejs
app.get('/Cube', function(req, res) {
    inpNumber = 3;
    exponent = 3;
    var cubetemplate = {
        head: { tite: 'Cube Page' },
        data: { input: inpNumber, answer: myPowers.myPowers(inpNumber, exponent) },
    };

    res.render('./pages/cube.ejs', cubetemplate);
});

app.get('/square', function(req, res) {
    inpNumber = 2;
    exponent = 2;
    var squaretemplate = {
        head: { title: 'Square Page' },
        data: { input: inpNumber, answer: myPowers.myPowers(inpNumber, exponent) },
    };
    res.render('./pages/square.ejs', squaretemplate);
});

app.get('/*', function(req, res) {
    res.status(404).render('pages/errors.ejs', { head: { title: 'Error' } });
});


app.get('/about', function(req, res) {

    res.status(200).render('./pages/about.html');
});
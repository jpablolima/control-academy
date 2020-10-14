const express = require('express');
const routes = express.Router(); // responsável pelas rotas


routes.get('/', function(req, res) {
    return res.redirect('/instructors')
});

// route instructors
routes.get('/instructors', function(req, res) {
    return res.render('instructors/index')
});

// route members
routes.get('/members', function(req, res) {
    return res.send('members')
});


module.exports = routes;
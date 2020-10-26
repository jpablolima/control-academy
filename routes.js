const express = require('express');
const routes = express.Router(); // responsável pelas rotas
const instructors = require('./instructors');


routes.get('/', function(req, res) {
    return res.redirect('/instructors')
})

// route instructors
routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

// create
routes.get('/instructors/create', function(req, res) {
    return res.render("instructors/create")
})


// get data
routes.get('/instructors/:id', instructors.show);

routes.post("/instructors", instructors.post);

// route members
routes.get('/members', function(req, res) {
    return res.send("members")
})


module.exports = routes;
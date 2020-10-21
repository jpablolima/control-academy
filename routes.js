const express = require('express');
const routes = express.Router(); // responsável pelas rotas


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

routes.post("/instructors", function(req, res) {

    const keys = Object.keys(req.body); // Retorna  a chaves dos objetos

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

    return
    // return res.send(keys)
})

// route members
routes.get('/members', function(req, res) {
    return res.send("members")
})


module.exports = routes;
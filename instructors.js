const fs = require('fs');


// Create
exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

    // write the file
    fs.writeFile("data.json", JSON.stringify(req.body), function(err) {
        if (err) return res.send('Write file error!')
        else {
            return res.redirect('/instructors');
        }
    });


    return res.send(req.body)
}
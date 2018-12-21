var app = require ('../server/index.js');
// var db = require('../db/index.js')
var dbfunctions = require('../db/dbfunctions.js')

app.get('/images', function (req, res) {
    console.log('is it coming in here?')
    dbfunctions.findAllImages((err, docs) => {
        if (err) {
            console.log(err);
        } else {    
            res.send(docs);
        }
    })
})
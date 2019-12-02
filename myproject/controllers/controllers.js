const queries = require('../models/queries.js');

function search (req, res) {
    var fname = 
        queries.getPersons(fname, function(results){
            res.json(results);
        });
}
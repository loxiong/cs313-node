const { Pool } = require('pg');
const db_url = process.env.DATABASE_URL;
//test it
//console.log('DB URL: " + db_url');
const pool = new Pool({connectionString: db_url});


function getPersons(firstname, callback) {
    var sql = 'SELECT firstname, lastname FROM Person ORDER BY id ASC';
    var params = [firstnamename];
    
    pool.query(sql, params, function(err, results) {
        if (err) {
            throw err;
        } else {
            var results = {list:db_results.rows
        };
            callback(null, results);
        }
    });
}


module.exports = {
    getPersons: getPersons,
};
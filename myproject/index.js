const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://hivlxyadabcmit:1e70a4f15f0ec3bc1d55e1fb765cbfdbd52c5f257c10544d39ed312bc7e1678c@ec2-184-73-210-189.compute-1.amazonaws.com:5432/dckg6v1tvo0r3a?ssl=true';

const pool = new Pool({connectionString: connectionString});

const port = 3000;

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

//use the body parser middleware in express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


var sql = "SELECT * FROM person";

pool.query(sql, function(err, result) {
    // If an error occurred...
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }

    // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
    console.log(result.rows);


});    

const db = require('./queries')
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/Persons', db.getPersons)
app.get('/Persons/:id', db.getPersonById)
app.post('/Persons', db.createPerson)
app.put('/Persons/:id', db.updatePerson)
app.delete('/Persons/:id', db.deletePerson)


// Start the server running
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
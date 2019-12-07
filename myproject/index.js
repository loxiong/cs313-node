const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//const { Pool } = require('pg');
const Pool = require('pg').Pool
const connectionString = process.env.DATABASE_URL || 3000;
const pool = new Pool({connectionString: connectionString});


//const PORT = process.env.PORT || 3000;
app.set('port', (process.env.PORT || 3000));


//view directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const db = require('./queries.js');

//get all people
//app.get('/Persons', (req, res) => res.render('pages/persons'));
app.get('/persons', db.getPersons);


//get one person by id
//app.get('/Persons/:id', db.getPersonById)
//app.post('/Persons', db.createPerson)
//app.put('/Persons/:id', db.updatePerson)
//app.delete('/Persons/:id', db.deletePerson)



//test endpoint
app.get('/', (req, res) => res.render('pages/index'));



// start the server running
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



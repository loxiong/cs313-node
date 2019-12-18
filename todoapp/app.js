const express = require('express');
//create the app
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieSession = require('cookie-session');

require('dotenv').config();

//connect to database
//const { Pool } = require('pg');
const Pool = require('pg').Pool
const connectionString = process.env.DATABASE_URL || 3000;
const pool = new Pool({connectionString: connectionString});

// Use the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

// Access the session as req.session
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('Welcome to your session of SIMPLE TO DO APP. Refresh!')
  }
});


//require the controller file
const todoController = require('./controllers/todoController');


//const PORT = process.env.PORT || 3000;
app.set('port', (process.env.PORT || 3000));

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//fire up the controllers
todoController(app);


//TEST CONNECTION TO THE DATABASE
var sql = "SELECT * FROM todo";
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
//CONNECTION WORKS


// start the server running
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});











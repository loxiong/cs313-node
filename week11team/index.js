const express = require('express');
const path = require('path');
const url = require('url');
require('dotenv').config();
const search = require('./public/movie-clientside.js');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//gets the movies

app.get('/movie', (req, res) => res.render('public/movie'));




//starts the server
app.listen(PORT, function(){
    console.log('Server listening on port ' + PORT);
});
//import the express module
const express = require('express');
//create the path library
const path = require('path');
require('dotenv').config();

//import the controller file
//the . tells it to look in the current directory and in the controllers folder
const topicController = require('./controllers/topicController.js');
const scriptureController = require('./controllers/scriptureController.js');

//create the node application
const app = express();

//create a port variable to stipulate which port heroku is going to use
//or else use PORT 5000 if port was not found at heroku
const PORT = process.env.PORT || 5000;

//access static files to be rendered or sent back to user
//from the public folder
app.use(express.static(path.join(__dirname, 'public')));

//to support json encoded bodies
//look for express json
app.use(express.json());

//helps to parse the body
//to support url encoded bodies
app.use(express.urlencoded({extended: true}));

//anything below here sets up rules and function calls

//from video Part-5 adding the Scriptures endpoints and controllers
//put functions in the controller and then require it here 

//gets all the topics
app.get('/topics', topicController.getTopicList);

//get a single topic by ID
app.get('/topic/', topicController.getTopic);

//how to do a post 
app.post('/topic', topicController.postTopic);

//search for a scripture
app.get('/search', scriptureController.search);

//get all the scriptures
app.get('/scriptures', scriptureController.getScriptureList);

//get scripture by id
app.get('/scripture', scriptureController.getScripture);

//add a new scripture
app.post('/scripture', scriptureController.insertNewScripture);

//assign a topic to a scripture
app.post('/assignTopicToScripture', scriptureController.assignTopicToScripture);






//starts the server
app.listen(PORT, function(){
    console.log('Server listening on port ' + PORT);
})

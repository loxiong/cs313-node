//imports the model
const topicModel = require('../models/topicModel.js');

//these are functions that were created in video Part 3, in the app.post 
//give the functions a name now

//function to get all topics
function getTopicList(req, res) {
    //get the list of all topics
    console.log('Getting all topics...');
    
    //grabs the data or results from the model
    //create the callback function so that server not waiting on results
    topicModel.getAllTopics(function(results) {
        //send response back to the user
        res.json(results);
    });
}



//function to get one topic by id
function getTopic(req, res){
    //query example
    //topic?id=1
    //anything after the ? is a query
    var id = req.query.id;
    
    console.log('Getting one topic with id:' + id);
    
    topicModel.getTopicById(id, function(results) {
        res.json(results);
    });    
}



//function to post a new topic
function postTopic(req, res){
    var name = req.body.name;
    
    console.log('Creating a new topic with name: ' + name);
    
    topicModel.insertNewTopic(name, function(results) {
        res.json(results);
    });
}

//next step: call these functions back into the index.js file
//make this module exports and define all the functions that you want be exported
module.exports = {
    getTopicList: getTopicList,
    getTopic: getTopic,
    postTopic: postTopic
};
//use this model file to query your database

function getAllTopics(callback) {
    //Get all the topics from the DB
    var results = {
        topics: [
            {id:1, name:'faith'},
            {id:2, name:'hope'},
            {id:3, name:'charity'}
        ]
    }
    callback(results);   
}

function getTopicById(id, callback) {
    //Get the topic from the DB that matches that id
    var results = {id:id, name:'virtue'};
    
    callback(results);
}

function insertNewTopic(name, callback) {
    //create a new topic in the DB with the provided name
    var results = {success:true};
    
    callback(results);
}

//now must export these functions
module.exports = {
    getAllTopics: getAllTopics,
    getTopicById: getTopicById,
    insertNewTopic: insertNewTopic
};

//make sure to go back to the topicController and import it there

//after testing the functions are still working, then now go back and add callbacks to the functions 
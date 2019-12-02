//imports the model
const scriptureModel = require('../models/scriptureModel.js');

function search (req, res) {
    //check if book id or if topic id, and call the appropriate function
    
    var bookID = 
    
    scriptureModel.searchByBook(bookId, function(results) {
        res.json(results);
    });
    
    scriptureModel.searchByTopic(topicId, function(results) {
        res.json(results);
    });
}


function getScriptureList (req, res) {
    scriptureModel.getAllScriptures(function(results) {
        res.json(results);
    });
}

function getScripture (req, res) {
    var id = 1;
    
    scriptureModel.getScriptureById(id, function(results) {
        res.json(results);
    });
}


function insertNewScripture (req, res) {
    var book = 'John';
    var chapter = 3;
    var verse = 16;
    var content = 'For God so loved...';
    
    scriptureModel.insertNewScripture(book, chapter, verse, content, function(results) {
        res.json(results);
    });
}


function assignTopicToScripture (req, res) {
    var topicId = 1;
    var scriptureId = 1;
    
    sccriptureModel.assignTopicToScripture(topicId, scriptureId, function(results){
        res.json(results);
    });

}


module.exports = {
    search: search,
    getScriptureList: getScriptureList,
    getScripture: getScripture,
    insertNewScripture: insertNewScripture,
    assignTopicToScripture: assignTopicToScripture
};


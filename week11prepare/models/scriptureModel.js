const { Pool } = require('pg');
const db_url = process.env.DATABASE_URL;
//test it
//console.log('DB URL: " + db_url');
const pool = new Pool({connectionString: db_url});

function searchByBook (book, callback) {
    console.log("Searching the DB for book: " + book)
    
    //create the query
    var sql = "SELECT id, book, chapter, verse, content FROM scripture WHERE book=$1::text";
    //tell it where book needs to fill in
    var params = [book];
    //use the connection pool object that was created above in line 5
    //to connect to the database and query
    pool.query(sql, params, function(err, db_results) {
        if (err) {
            throw err;
        }else {
            console.log('Back from DB with: ')
            console.log(db_results);
            
            //var results = {list:[
                //{id:1, book:'Nephi', chapter:1, verse:1, content:'I Nephi will go and do...'},
                //{id:2, book:'Alma', chapter:1, verse:1, content:'I am Alma...'},
                //{id:3, book:'Moroni', chapter:1, verse:1, content:'I am Moroni...'}
            //]};
            
            //in video tutorial step 10, remvoe the hard-coded array above and replace it with the code below
            var results = {
                list:db_results.rows
            };
    
            callback(null, results);
        }
        
    });
 
}

function searchByTopic (topicId, callback) {
    var results = {list:[
        {id:1, book:'Nephi', chapter:1, verse:1, content:'I Nephi will go and do...'},
        {id:2, book:'Alma', chapter:1, verse:1, content:'I am Alma...'},
        {id:3, book:'Moroni', chapter:1, verse:1, content:'I am Moroni...'}
    ]};
    
    callback(null, results);
    
}


function getAllScriptures (callback) {
    var results = {list:[
        {id:1, book:'Nephi', chapter:1, verse:1, content:'I Nephi will go and do...'},
        {id:2, book:'Alma', chapter:1, verse:1, content:'I am Alma...'},
        {id:3, book:'Moroni', chapter:1, verse:1, content:'I am Moroni...'}
    ]};
    
    callback(null, results);

}

function getScriptureById (id, callback) {
    var results = {id:1, book:'Nephi', chapter:1, verse:1, content:'I am Nephi'};
    
    callback(null, results);
    
}


function insertNewScripture (book, chapter, verse, content, callback) {
    var results = {success:true,
                   scripture:{id:1, book:Mosiah, chapter:1, verse:1, content:'I am Mosiah'}};
    
    callback(null, results);
    
}


function assignTopicToScripture (topicId, scriptureId, callback) {
    var results = {success:true};
    
    callback(null, results);

}


module.exports = {
    searchByBook: searchByBook,
    searchByTopic: searchByTopic,
    getAllScriptures: getAllScriptures,
    getScriptureById: getScriptureById,
    insertNewScripture: insertNewScripture,
    assignTopicToScripture: assignTopicToScripture
};

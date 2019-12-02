var apiURL = "http://www.omdbapi.com/?apikey=faacf895";

function searchDB() {
    console.log("Searching the DB for movie...")
    
    //get the value from the search box
    var query = document.getElementById("search").value;
    //create the XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            var results = JSON.parse(xhttp.responseText).Search;
            console.log(results);
            
            var resultsList = document.getElementById("results");
            resultsList.innerHTML = "";
            
            for (var i = 0; i < results.length; i++) {
                resultsList.innerHTML += "<p>"+results[i]["Title"]+"</p>";
            }
        }
    }
    
    //request method is open // method type is GET // URL specifies the location of the file // async set to true 
    xhttp.open("GET", apiURL+"&s='"+query+"'", true);
    //send the request
    xhttp.send();

}
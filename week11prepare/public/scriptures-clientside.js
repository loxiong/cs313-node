function searchByBook() {
    console.log("Searching by book...")
    
    var book = $("#book").val();
    console.log("Book: " + book);
    
    $.get("/search", {book:book}, function(data){
        console.log("Back from the server with: ");
        console.log(data);
        
        for (var i = 0, i < data.list.length; i++){
            var scripture = data.list[i];
            
            $("ulScriptures").append("<li>" + scripture.book + " " + scripture.chapter + ":" + scripture.verse + "</li>");
        }
    })
}


function searchByTopic() {
    console.log("Searching by topic...");
    

}
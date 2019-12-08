const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));

//dummy data for testing
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'read scriptures'}];

//var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    var urlencodedParser = bodyParser.urlencoded({extended: false});
                       
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !==req.params.item;
        });
        res.json(data);

    });
    
};

const express = require('express');

const path = require('path');

const friends = require(path.join(__dirname,'/app/data/friends'));

const app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname, '/app/public/survey.html'))
});
  
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/app/public/home.html'))
})

app.get("/api/friends", function(request, response) {
    return response.json(friends);
});

app.post("/api/friends", function(request, response){
    const newFriend = request.body; 
    console.log(newFriend);

    friends.push(newFriend);
  
    response.json(newFriend);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
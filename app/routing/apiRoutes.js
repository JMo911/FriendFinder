const express = require("express");
const path = require("path");

const app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function(request, response) {
    return response.json(friends);
  });

app.post("/api/friends", function(request, response){
    const newFriend = request.body;
    
});
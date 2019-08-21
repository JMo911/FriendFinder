const express = require("express");
const path = require("path");

const app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
app.get('/survey', function (request, response) {
  response.sendFile(path.join(__dirname, '../public/survey.html'))
});

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '../public/home.html'))
})
 
app.listen(3000)
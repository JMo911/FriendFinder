const express = require('express');

const path = require('path');

const friends = require(path.join(__dirname,'/app/data/friends'));


const app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
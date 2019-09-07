const path = require('path');
const friends = require('../data/friends');

module.exports = function(app) {
app.get("/api/friends", function(request, response) {
    return response.json(friends);
  });

app.post("/api/friends", function(request, response){
    friends.push(request.body);
    response.json(friends);
    //BUILD OUT THE MATCH AS MY RESPONSE TO THE CLIENT HERE


});
}

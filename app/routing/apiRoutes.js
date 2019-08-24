const path = require('path');
const friends = require('../data/friends');

module.exports = function(app) {
app.get("/api/friends", function(request, response) {
    return response.json(friends);
  });

app.post("/api/friends", function(request, response){
    const newFriend = request.body;
    
});
}

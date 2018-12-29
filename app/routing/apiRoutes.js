var friendArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    })

    app.post("/api/friends", function(req, res) {
        
    })
}
var path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
        // res.send("It's also working")
    })

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"))
        // res.send("It's working")
    })
}
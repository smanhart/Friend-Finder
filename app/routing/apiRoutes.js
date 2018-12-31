var friendArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    })

    app.post("/api/friends", function(req, res) {
        var person = req.body;
        var numList = [
            parseInt(person.questionOne),
            parseInt(person.questionTwo),
            parseInt(person.questionThree),
            parseInt(person.questionFour),
            parseInt(person.questionFive),
            parseInt(person.questionSix),
            parseInt(person.questionSeven),
            parseInt(person.questionEight),
            parseInt(person.questionNine),
            parseInt(person.questionTen),
        ];
        
        var profile = {
            name: person.name,
            photo: person.picture,
            scores: numList
        }

        friendArray.push(profile);


        // var numArray = person.filter(function(obj) {
        //     if (obj.value !== isNaN) {
        //         scores.push(numArray);
        //     }
        // })

        // var numArray = numList.map(function(obj) {
        //     var num = obj.value;
        //     return num;
        // })

        // console.log(numList);
        res.json(person);







        //change this to return the data that will display in the pop up module
            // for (var i = 0; i < characters.length; i++) {
            //     if (chosen === characters[i].routeName) {
            //       return res.json(characters[i]);
            //     }
            //   }
        
    })
}
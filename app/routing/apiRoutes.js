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
        

        var difference = [];
        var diffArray = [];

        //change this to return the data that will display in the pop up module
            for (var i = 0; i < friendArray.length; i++) {

                for(var j = 0; j < friendArray[i].scores.length; j++){
                    
                    difference.push(Math.abs(friendArray[i].scores[j] - numList[j]));
                    
                }
                console.log(difference)
                var diffSum = difference.reduce(function(a,b){
                    return a + b
                }, 0);

                difference = [];
                diffArray.push(diffSum)
                
                console.log(diffSum)
                console.log(diffArray)

                // friendArray[i].scores.forEach(function(score){
                //     score -
                // })


                // if (numList === friendArray[i].scores) {
                //   return res.json(characters[i]);
                // }
              }
              
        var index = diffArray.indexOf(Math.min(...diffArray))
        console.log(`Index number of minimum difference = ${index}`)
        friendArray.push(profile);
        res.json(friendArray[index]);
    })
}
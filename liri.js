// import { userInfo } from "os";

require("dotenv").config();
var keys =require("./keys");
var fs = require("fs");
var request =require("request");
var spotify= require("spotify");
var twitter = require ("twitter");


// var nodeArgv = process.argv;
// var command = process.argv[2];

inquirer.prompt([
    {
    type: "list",
    message: "Hello there! What command would you like to run?",
    choices: "['spotify-this-song', 'my-tweets,'do-what-it-says', 'movie-this']",
    name: "command"
    }
]).then(function(user){
    console.log(JSON.stringify(username,null,2));
});
    if (user.command === "my-tweets"){
        var params = {
            user_id: "Sapinc2017",
            count: 20
        }
        console.log("Below are the following tweets: ");
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
         for (var i =0; i < response.length; i++){
            var user = params.user_id;
            var time = response[i].created_at;
            var tweet = repsonse[i].text;
        console.log("Tweet: "+tweet+ "Time: "+time+ "Tweeted by: "+user_id);
        } else {
            console.log (error);
        }
    }
      });

require("dotenv").config();

var keys =require("./keys");
var fs = require("fs");
var request =require("request");

var twitter = require ("twitter");

// var command =process.argv[2];
var command =process.argv[2];
var song = process.argv[3];
// var nodeArgs =process.argv;




var client = new twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
// console.log(client);
var inquirer= require("inquirer");

inquirer.prompt([
    {
    message: "Hello there! What command would you like to run?",
    choices: "['spotify-this-song', 'my-tweets,'do-what-it-says', 'movie-this']",
    name: "command"
    }
]).then(function(inquirer){
    if (inquirer.command === "my-tweets"){
        var params = {
            screen_name: "@Sapinc2017",
            count: 20
            
        };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
             for (var i =0; i < tweets.length; i++){
                var user = params.screen_name;
                var time = tweets[i].created_at;
                var tweet = tweets[i].text;

            console.log("Below are the following tweets: ");
            console.log("Tweet: " +tweet+ " Time: " +time+ " Tweeted by: " +user);

            // fs.appendFile('./log.txt', user + tweets[i].text + " Created At: " + time);
           
             }
        } else{
            console.log(error);
        }
    });  
   

    
  };
  var spotify = new spotify ({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  
  });
 
// console.log(spotify);
    function spotify(song){
        var spotify= require("node-spotify-api");
     if (song ===undefined){
         song ="the sign ace of base";
     };
     spotify.search ({ type: 'track',query: song}, function(error, data) {
                
                if (error) {
                return console.log('Error occurred: ' + err);
                }else{ 
                    for(var i =0; i< data.tracks.items[0].artists.length; i++){
                
                console.log("Artist: " + data.tracks.items[0].album.artists[i].name); 
                
            
                console.log("Song: " + data.tracks.items[0].name);
                
                
                console.log("A preview link of the song from Spotify: " + data.tracks.items[0].preview_url);
                
            
                console.log("The album that the song is from: " + data.tracks.items[0].album.name);
                    }
                }
            }); 	
         
        };
    
            // 
  
    function getMovie(movie) {
        var movie= process.argv[2];
        if(!movie){
            movie = "Mr. Nobody";
            console.log("It's on Netflix!");
        }
        
        var queryUrl = "http://www.omdbapi.com/?t=" + movie+ "&plot=short&r=json&tomatoes=true&apikey=trilogy";
      
        
        request(queryUrl, function(error, response, body) {
            
            // argument = movie;
            
        if (!error && response.statusCode === 200) {
                // var nodeArgs =process.argv.slice(2).join(" ");
                // movieName= argument;
                
         
            var omdb = JSON.parse(body, null, 2);
        
            console.log("Title of the movie: " + omdb.Title);
            console.log("Year the movie came out: " + omdb.Year);
            console.log("imdbRating: " + omdb.imdbRating);
            console.log("Rotten Tomatoes Rating of the movie: " + omdb.Ratings);
            console.log("Language: " + omdb.Language);
            console.log("Plot: " + omdb.Plot);
            console.log("Actors: " + omdb.Actors);
                }
                getMovie(movie);
            });
        };


});


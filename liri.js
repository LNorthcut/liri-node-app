
var Twitter = require("twitter");
var request = requires('request');
var fs = require('fs');
var spotify = require("spotify");
var filename = './log.txt';
var log = require('simple-noe-logger').createSimpleLogger (filename);
var twitterKeysFile = require("./keys.js");


// log.setLevel('all');
var action = process.argv[2]
var argument = "";


doSomething(action, argument);

function doSomething(action, argument) {

    argument = getThirdArgument();

    switch(action) {
        case "my-tweets":
        getMyTweets();
        break;

     }
}

function getMyTweets(){
    var client = new Twitter(twitterKeysFile.twitterKeys);

    var params = {q: 'LaurenB78616921', count: 20}

    client.get('search/tweet', params, function(error, tweets) {
        if(!error) {
            for (var i = 0; i<tweets.status.length; i++) {
                var tweetText = tweets.statuses[i].text;
                logOutput("Tweet Text: " + tweetText);
                var tweetCreationDate = tweets.status[i].created_at;
                logOutput("Tweet Creation Date: " + tweetCreationDate);
            }
         } else {
                logOutput(error);
            }
            
        });
    }
    function logOutput(logText) {
        log.info(logText);
        console.log(logText);
    }


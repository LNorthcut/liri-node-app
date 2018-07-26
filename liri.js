var request = require("request");
require("dontenv").config();
require("keys.js").config();

var Twitter = require("keys.twitter");
// var twitterKeysFile = require("./keys.js");


;
var action = process.argv
var argument = "";

function doSomething(action) {
    switch(action){
        case "my-tweets":
        getMyTweets();
        break;
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

}


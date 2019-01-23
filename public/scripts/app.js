/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  var $tweet = createTweetElement(tweetData);
// vars for the data
  var text = tweetData["content"].text;
  var created = tweetData.created_at;
  var name = tweetData["user"].name;
  var handle = tweetData["user"].handle;
  //var avatars = tweetData["avatars"].small;

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  
 

function createTweetElement(){

$('#tweets-container').append($tweet);

}
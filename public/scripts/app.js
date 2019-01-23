/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// vars for the data

//   var created = data.created_at;
//   var name = data["user"].name;
//   var handle = data["user"].handle;
//   var avatars = data["user"].avatars.small;

$(document).ready(function() {

  function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      tweets.forEach(function(tweet) {
        //console.log(tweet)
        let element = createTweetElement(tweet);
        //console.log(element)
        $("#tweet-container").append(element);
       // console.log($("#tweet-container"))
      });
      
 
  }



  
  function createTweetElement(tweet) {

    var avatars = tweet["user"].avatars.small;
    
// Header content   
    var img = $('<img>').attr({ src: avatars});
    var h3 = $('<h3>').text(tweet["user"].name);
    var span = $('<span>').text(tweet["user"].handle);
// Appending all to header
    var header = $('<header>').append(h3).append(img).append(span);
// End Header content 


// Tweet body
   var article = $('<article>').text(tweet["content"].text);
// End Tweet body

// Footer content
   var postDate = $('<span>').text(tweet.created_at);
   
   var footer =$('<footer>').append(postDate);
//console.log(text)
    let $tweet = $('<article>').addClass('tweets').append(header).append(article).append(footer);
    
    return $tweet;
  }
  

  function loadTweets(){
    $.ajax('/tweets', { method: 'GET' })
    .then(function (bigTweets) {
      console.log('Success: ', bigTweets);
      renderTweets(bigTweets);
    });
  

  }
  loadTweets();

});
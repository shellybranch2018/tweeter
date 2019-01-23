/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];


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
      

    //   $('h3').html(name);
    //  $('.content').html(text);
    //  $('.handle').html(handle);
    //  $('.when').html(created);
    //  $( 'article img' ).attr({
    //     src: avatars,
    //     title: "jQuery",
    //     alt: "Avatar"
    //   });
  }


/* <article>
    <header>
        <img class="logo">
            <h3></h3>
            <span></span>
        </header>
        <aside></aside>
        <footer>
            <span></span>
        </footer>
    </article> */

  
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
  
  renderTweets(data);
  

})
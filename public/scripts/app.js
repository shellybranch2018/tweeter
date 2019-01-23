/*  Client-side JS logic goes here jQuery is already loaded Reminder: Use (and d
 * o all your DOM work in) jQuery's document ready function

 */

$(document).ready(function () {
    function renderTweets(tweets) {
        tweets.forEach(function (tweet) {
            let element = createTweetElement(tweet);
            $("#tweet-container").append(element);
        });
    }
    function createTweetElement(tweet) {
        var avatars = tweet["user"].avatars.small;
        // Header content
        var img = $('<img>').attr({src: avatars});
        var h3 = $('<h3>').text(tweet["user"].name);
        var span = $('<span>').text(tweet["user"].handle);
        // Appending all to header
        var header = $('<header>')
            .append(h3)
            .append(img)
            .append(span);
        // End Header content Tweet body
        var article = $('<article>').text(tweet["content"].text);
        // End Tweet body Footer content
        var parsed = parseInt(tweet.created_at);
        var event = new Date(parsed);
        let newDate = event.toDateString();

        console.log(newDate);
        //console.log(parsed);
        var postDate = $('<span>').text(newDate);

        var footer = $('<footer>').append(postDate);
        //console.log(text)
        let $tweet = $('<article>')
            .addClass('tweets')
            .append(header)
            .append(article)
            .append(footer);

        return $tweet;
    }

    $('#tweet-form').on('submit', function (event) {
      event.preventDefault();
      let newTweetData = $(this).serialize(); 
 
    if( newTweetData === "text=" || newTweetData  === null){
      alert("You must enter charaters to submit a tweet. Don't be shy.")
    } else $.post('/tweets',newTweetData)
      
      
    
    
      //postDog(newDogData)
    
    })


    

    function loadTweets() {
      
        $.ajax('/tweets', {method: 'GET'})
            .then(function (bigTweets) {
                //console.log('Success: ', bigTweets);
                renderTweets(bigTweets);
            });
            
    }
    loadTweets();

});
/*  Client-side JS logic goes here jQuery is already loaded Reminder: Use (and d
 * o all your DOM work in) jQuery's document ready function

 */

$(document).ready(function () {

    $("#hd_btn").click(function() {
    
        // $("#toggle").slideToggle();
        $("#toggle").slideToggle( "slow", function() {
       
        });
      });


    function renderTweets(tweets) {
        $('.tweets').remove();
        tweets.forEach(function (tweet) {
            let element = createTweetElement(tweet);
            $("#tweet-container").prepend(element);
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
        var tweetText = $('<p>').text(tweet["content"].text)
        var article = $('<article>').append(tweetText);
        // End Tweet body 
        //Footer content
        var parsed = parseInt(tweet.created_at);
        var event = new Date(parsed);
        let newDate = event.toDateString();       
        var postDate = $('<span>').text(newDate);   
        var ic1 = $('<i>').addClass('fa fa-flag');
        var ic2 = $('<i>').addClass('fa fa-heart');
        var ic3 = $('<i>').addClass('fa fa-retweet');
        var div = $('<div>').addClass('icons').append(ic1).append(ic2).append(ic3);
        var footer = $('<footer>').append(postDate).append(div);
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
        $(".warning").css("display","block").text("You must enter text (max characters 140) to send a tweet.");

    } else {
        $.post('/tweets',newTweetData).then(function(){
            loadTweets();
        })
        
    };
    if('textarea:focus'){
        console.log("active block");
        // $(".warning").css("display","none");
    }
    
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
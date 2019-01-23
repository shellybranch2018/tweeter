$(document).ready(function() {
    // --- our code goes here ---

    // Sets up the count and applies it to the form
    $( 'textarea' ).on( "keypress", function( event ) {      
        value = $(this).val().length; 
        if($(this).val().length > 140){
            $(".counter" ).css( "color", "red" );
            
        }              
        $(this).siblings().html(value);
        
      })

      
    //  $('article header h3').addClass("tweet");
    //  $('article header span').addClass("handle");
    //  $('article p').addClass("content");
    //  $('footer span').addClass("when");
    //  $('h3').html(name);
    //  $('.content').html(text);
    //  $('.handle').html(handle);
    //  $('.when').html(created);
    //  $( 'article img' ).attr({
    //     src: avatars,
    //     title: "jQuery",
    //     alt: "Avatar"
    //   });
     



});



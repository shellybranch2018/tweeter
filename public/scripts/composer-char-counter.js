$(document).ready(function() {
    // --- our code goes here ---

    // Sets up the count and applies it to the form
    $( 'textarea' ).on( "keypress", function( event ) {      
        value = $(this).val().length; 
        if($(this).val().length > 141){
            $(".counter" ).css( "color", "red" );
            $(".warning").css("display","block").text("You have exceeded the 140 character limit.");
            
        } else if($(this).val().length >= 0 && $(this).val().length <= 141){
            $(".warning").css("display","none");
            $(".counter" ).css( "color", "#000" );
            $(this).siblings().html(value);
        }else {$(this).siblings().html(value)};
        
      })

});



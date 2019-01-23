$(document).ready(function() {
    // --- our code goes here ---

    // Sets up the count and applies it to the form
    $( 'textarea' ).on( "keypress", function( event ) {      
        value = $(this).val().length; 
        if($(this).val().length > 140){
            $(".counter" ).css( "color", "red" );
            alert("You have reached the 140 charater limit.")
            
        } else $(this).siblings().html(value);
        
      })

});



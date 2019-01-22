$(document).ready(function() {
    // --- our code goes here ---

    // Sets up the count and applies it to the form
    $( 'textarea' ).on( "keypress", function( event ) {      
        value = $(this).val().length;               
        $(this).siblings().html(value);

      })




    })



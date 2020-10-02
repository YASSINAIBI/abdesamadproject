$("#slideshow .slideItems").hide();

setInterval(function() { 
  $('#slideshow .slideItems:first')
    .fadeOut(800, function(){
        $('#slideshow .slideItems .slideItemsAnimation, #slideshow .slideItems .slideItemsAnimation2, #slideshow .slideItems .btn-animation').removeClass('animation');
    })
    .next()
    .fadeIn(1500, function(){
        $('#slideshow .slideItems .slideItemsAnimation:first, #slideshow .slideItems .slideItemsAnimation2:first, #slideshow .slideItems .btn-animation:first').addClass('animation');
    })
    .end()
    .appendTo('#slideshow');
},  5000);

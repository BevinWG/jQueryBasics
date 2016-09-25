//Problem: THe user when clicking on image goes to a deadend and isn't userfriendly
//Solution: Create an overlay with a large image - LIGHTBOX
$( function(){
    
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img/>");
var $caption = $("<p></p>");
//An image to overlay

$overlay.append($image);
//A caption to overlay
$overlay.append($caption);


//Add overlay  
$("body").append($overlay);



//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    //Update the overlay with the image inked in the link
    $image.attr("src",imageLocation);
    
    //Show the overlay.
    $overlay.show();
    
    
    
    //Get child's alt attribute and set caption
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
    
    });
    
//When overlay is clicked
$overlay.click(function(){
    //Hide the overlay
    $overlay.hide();
})
});

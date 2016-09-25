//offer an option when on the spoiler page

$(".spoiler span").hide();

$(".spoiler).append("<button>Reveal Spoiler!</button>;

$("button").click(function()){
    $(this).prev().show();
    $(".spoiler span").show();
$(this).remove();


});

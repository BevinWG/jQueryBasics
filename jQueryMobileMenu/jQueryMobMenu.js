//Problem is that it is not visually appealing in smaller browser widths or smaller devices
//solution: Hide the text links and swap out for a more appropriate navigation

//Create a select and append to #menu
var $select = $(''<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function)(){
    var $anchor = $(this);
    
     //Create an option
    var $option = $("<option></option>");
    
//Deal with selected options depending on current page
    if($anchor).parent().hasClass("selected")){
        $option.prop("selected", true);
    }
   
    //options value is the href
$option.val($anchor.attr("href"));
    //options text is text of link
$option.text($anchor.text());
    //append option to select
$select.append($option);    
});   
   

//bind click to button
$select.change(function(){
//Go to selects location
    window.location = $select.val();
});
 

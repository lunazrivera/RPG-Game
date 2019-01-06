$(document).ready(function () {
// ----------------------------------------
/*The funciton above will execute once the document
is ready to run the javascript. Here we'l set up the audio
to be played*/
// ---------------------------------------- 


// ----------------------------------------
/*This function makes the body's height,
to be the same as the height of the window*/
// ---------------------------------------- 
function windowH() {
    var wH = $(window).height();
    var wW = $(window).width();
    $('body').css({height: wH});
 } windowH();
// ----------------------------------------
// Global bindings | variables
// ----------------------------------------
var gameInitialized = false;
var startPage;






// ----------------------------------------
// Event listeners
// ----------------------------------------
/* Here I grab the play-button id from my html
and turned off the display of the start-page and turned on
the display for character-page. */
$("#play-button").on("click", function() {
    gameInitialized = true;
    startPage = $("#start-page").css("display", "none");
    
    if (startPage) {
        $("#character-page").css("display", "inline-block");
    };
});




// ----------------------------------------
// Function Grounds
// ----------------------------------------



});

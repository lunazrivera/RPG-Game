$(document).ready(function () {

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
var audioElement = document.getElementById("audio-fantasy");
var startPage;







// ----------------------------------------
// Event listeners
// ----------------------------------------
/* Here I grab the play-button id from my html
and turned off the display of the start-page and turned on
the display for character-page. */
$("#play-button").on("click", function() {
    playAudio();
    startPage = $("#start-page").css("display", "none");
    if (startPage) {
        $("#character-page").css("display", "inline-block");
    }
});


// ----------------------------------------
// Function Grounds
// ----------------------------------------
function playAudio() { 
    audioElement.play(); 
  } 
  
  function pauseAudio() { 
    audioElement.pause(); 
  } 


});

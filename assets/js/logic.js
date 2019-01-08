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
    var audioElement2 = document.getElementById("audio-play");
    var startPage;
    var characterPage;
    // ----------------------------------------
    // Global bindings | array of objects
    // ----------------------------------------

    var kideri = {
        name: "KIDERI",
        life: 110,
        attack: function() {
            console.log(Math.floor(Math.random() * 15));
        }
    }

    // ----------------------------------------
    // Event listeners in Start Page
    // ----------------------------------------
    /* Here I grab the play-button id from my HTML
    and turned off the display of the start-page and turned on
    the display for character-page. */
    $("#play-button").on("click", function() {
        playAudio2();
        $("#start-page").css("display", "none");
        $("#character-page").css("display", "inline-block");
    });
    // ----------------------------------------
    // Event listeners in Character Page
    // ----------------------------------------
    $("#kideri").on("click", function() {
        audioElement.play();
        $("#character-page").css("display", "none");
        $("#fighting-page").css("display", "inline-block");
        $("body").addClass("body-element");
        $("#fighting-character").attr("src", "assets/characters/siderightgood-kideri.png");
    });
    
    $("#truzo").on("click", function() {
        audioElement.play();
        $("#character-page").css("display", "none");
        $("#fighting-page").css("display", "inline-block");
        $("body").addClass("body-element");
        $("#fighting-character").attr("src", "assets/characters/siderightgood-truzo.png");
        
    });
    
    $("#stefa").on("click", function() {
        audioElement.play();
        $("#character-page").css("display", "none");
        $("#fighting-page").css("display", "inline-block");
        $("body").addClass("body-element");
        $("#fighting-character").attr("src", "assets/characters/siderightgood-stefa.png");
        
    });
    // ----------------------------------------
    // Event listeners in Fighting Scene
    // ----------------------------------------
    $("#attackbutton").on("click", function() {
        attack();
    });





    // ----------------------------------------
    // Villain Function Declaration
    // ----------------------------------------

    // ----------------------------------------
    // Character Function Declaration
    // ----------------------------------------

    // ----------------------------------------
    // Audio Function Declaration
    // ----------------------------------------
    function attack() {
        kideri.attack();
    }
    function playAudio() { 
        audioElement.play(); 
      } 
    
      function pauseAudio() { 
        audioElement.pause(); 
      } 
    function playAudio2() { 
        audioElement2.play(); 
    } 
    
    function pauseAudio2() { 
        audioElement2.pause(); 
    } 
    // audioElement.addEventListener('ended', function() {
    //     this.currentTime = 0;
    //     this.play();
    // }, false);

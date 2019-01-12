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
    var getAttack = false;
    var getVillainAttack = false;

    var winPoints = 1;
    var loosesPoints = 1;

    var lagozoIn = false;
    var badrioIn = false;
    var truzioIn = false;
    var switchingVillain = false;

    var isVillain = false;

    var kideriIn = false;
    var truzoIn = false;
    var stefaIn = false;



    // ----------------------------------------
    // Global bindings | Hero objects
    // ----------------------------------------
    var kideri = {
        name: "KIDERI",
        life: 110,
        attack: function() {
            this.att = 20 + Math.floor(Math.random() * 40);
        }
    
    }
    var truzo = {
        name: "TRUZO",
        life: 140,
        attack: function() {
            this.att = 5 + Math.floor(Math.random() * 25);
        }
    }
    var stefa = {
        name: "STEFA",
        life: 120,
        attack: function() {
            this.att = 15 + Math.floor(Math.random() * 30);
        }
    }



    // ----------------------------------------
    // Global bindings | Villain objects
    // ----------------------------------------
    var lagozo = {
        name: "LAGOZO",
        life: 100,
        attack: function () {
            this.att = 10 + Math.floor(Math.random() * 20)
        } 
    }
    var badrio = {
        name: "BADRIO",
        life: 120,
        attack: function () {
            this.att = 13 + Math.floor(Math.random() * 25)
        } 
    }
    var trizio = {
        name: "TRIZIO",
        life: 130,
        attack: function () {
            this.att = 15 + Math.floor(Math.random() * 30)
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
        userChoiceKideri();
        
    });
    
    $("#truzo").on("click", function() {
        audioElement.play();
        userChoiceTruzo();
    });
    
    $("#stefa").on("click", function() {
        audioElement.play();
        userChoiceStefa();
        populateVillains();
    });



    // ----------------------------------------
    // Event listeners in Fighting Scene
    // ----------------------------------------
    $("#attackbutton").on("click", function() {
        characterAttack();
        if (kideri.life <= 0 || truzo.life <= 0 || stefa.life <= 0) {
            $("#losses").text(loosesPoints++);
    
            audioElement.pause();
            $("#fighting-page").css("display", "none");
            $("body").removeClass("body-element");
            $("#gameover-page").css("display", "inline-block");
        }
        else if (trizio.life <= 0 ){
            $("#wins").text(winPoints++);
            trizio = false;
            audioElement.pause();
            $("#fighting-page").css("display", "none");
            $("body").removeClass("body-element");
            $("#winning-page").css("display", "inline-block");
        }
    });

    // ----------------------------------------
    // Event listeners in Winning Page
    // ----------------------------------------

    // ----------------------------------------
    // Event listeners in Loosing Page
    // ----------------------------------------
        $(".newgame-button").on("click", function() {
            playAudio2();
            newGame();
        });

    // ----------------------------------------
    // Function Declarations
    // ----------------------------------------
    function userChoiceKideri() {
        kideriIn = true;
        $("#character-page").css("display", "none");
        $("#fighting-page").css("display", "inline-block");
        $("body").addClass("body-element");
        $("#fighting-character").attr("src", "assets/characters/siderightgood-kideri.png");
        $("#character-name").text(kideri.name);
        $("#character-life").text(kideri.life);
        $("#selected-character, #character-stats").animate({left: 0}, 1000);
        if(!getAttack) {
            getAttack = true;
            kideri.attack();
        } 
        populateVillains();
    }


    function userChoiceTruzo() {
        truzoIn = true;
        $("#character-page").css("display", "none");
        $("#fighting-page").css("display", "inline-block");
        $("body").addClass("body-element");
        $("#fighting-character").attr("src", "assets/characters/siderightgood-truzo.png");
        $("#character-name").text(truzo.name);
        $("#character-life").text(truzo.life);
        $("#selected-character, #character-stats").animate({left: 0}, 1000);
        if(!getAttack) {
            getAttack = true;
            truzo.attack();
        } 
        populateVillains();
    }


    function userChoiceStefa() {
        stefaIn = true;
        $("#character-page").css("display", "none");
        $("#fighting-page").css("display", "inline-block");
        $("body").addClass("body-element");
        $("#fighting-character").attr("src", "assets/characters/siderightgood-stefa.png");
        $("#character-name").text(stefa.name);
        $("#character-life").text(stefa.life);
        $("#selected-character, #character-stats").animate({left: 0}, 500);
        if(!getAttack) {
            getAttack = true;
            stefa.attack();
        } 
        populateVillains();
    }


    function populateVillains() {
        if(!lagozoIn) {
        lagozoIn = true;
        // $("#moves").animate({top: 0}, 6000);
        $("#villain-character").attr("src", "assets/characters/lagozo.png");
        $("#villain-name").text(lagozo.name);
        $("#villain-life").html(lagozo.life);
        $("#selected-villain, #villain-stats").animate({left: 0}, 1000);
        if (!getVillainAttack) {
            getVillainAttack = true;
            lagozo.attack();
            console.log("This is Lagozo's attack: " + lagozo.att);
        }
        } 
    }


    function characterAttack() {
        if (!switchingVillain) {

            if(kideriIn === true) {
            if (lagozoIn === true) { 
                kideri.att += 5
                console.log("This is Kideri's attack: " + kideri.att);
                $("#selected-character").animate({left: 25}, 200, function() {
                    $("#selected-character").animate({left: 0}, 200)
                })
                $("#villain-life").html(lagozo.life -= kideri.att);
                // setTimeout(villainAttack, 3000);
                $("#character-life").html(kideri.life -= lagozo.att);
                if (lagozo.life <= 0) {
                    getVillainAttack = false;
                    lagozoIn = false;
                    badrioIn = true;
                    // $("#selected-villain", "#villain-stats").addClass("selected-villain2");

                    $("#selected-villain, #villain-stats").animate({left: 600}, 500, function() {
                        switchingVillain = true;
                        setTimeout(function() {
                            switchingVillain = false;
                        }, 1100);
                        $("#villain-character").attr("src", "assets/characters/badrio.png");
                        $("#villain-name").text(badrio.name);
                        $("#villain-life").html(badrio.life);
                        $("#selected-villain, #villain-stats").animate({left: 0}, 1000);

                        if (!getVillainAttack) {
                            getVillainAttack = true;
                            badrio.attack();
                            console.log("This is Badrio's attack: " + badrio.att);
                        }
                    });
                }
            }
            else if ( badrioIn === true) {
                kideri.att += 5
                $("#selected-character").animate({left: 25}, 200, function() {
                    $("#selected-character").animate({left: 0}, 200)
                })
                $("#villain-life").html(badrio.life -= kideri.att);
                $("#character-life").html(kideri.life -= badrio.att);
                if (badrio.life <= 0) {
                    getVillainAttack = false;
                    badrioIn = false;
                    trizioIn = true;
                    $("#selected-villain, #villain-stats").animate({left: 600}, 500, function() {
                        switchingVillain = true;
                        setTimeout(function() {
                            switchingVillain = false;
                        }, 1100);
                        $("#villain-character").attr("src", "assets/characters/trizio.png");
                        $("#villain-name").text(trizio.name);
                        $("#villain-life").html(trizio.life);
                        $("#selected-villain, #villain-stats").animate({left: 0}, 1000);

                        if (!getVillainAttack) {
                            getVillainAttack = true;
                            trizio.attack();
                            console.log("This is Trizio's attack: " + trizio.att);
                        }
                    });
                    

                }
            }
            else if ( trizioIn === true) {
                kideri.att += 5
                $("#villain-life").html(trizio.life -= kideri.att);
                $("#character-life").html(kideri.life -= badrio.att);
            }
        }
        else if (truzoIn === true) {
            if (lagozoIn === true) { 
                truzo.att += 5
                console.log("This is Truzo's attack: " + truzo.att);
                $("#selected-character").animate({left: 25}, 200, function() {
                    $("#selected-character").animate({left: 0}, 200)
                })
                $("#villain-life").html(lagozo.life -= truzo.att);
                // setTimeout(villainAttack, 3000);
                $("#character-life").html(truzo.life -= lagozo.att);
                if (lagozo.life <= 0) {
                    getVillainAttack = false;
                    lagozoIn = false;
                    badrioIn = true;
                    // $("#selected-villain", "#villain-stats").addClass("selected-villain2");

                    $("#selected-villain, #villain-stats").animate({left: 600}, 500, function() {
                        switchingVillain = true;
                        setTimeout(function() {
                            switchingVillain = false;
                        }, 1100);
                        $("#villain-character").attr("src", "assets/characters/badrio.png");
                        $("#villain-name").text(badrio.name);
                        $("#villain-life").html(badrio.life);
                        $("#selected-villain, #villain-stats").animate({left: 0}, 1000);

                        if (!getVillainAttack) {
                            getVillainAttack = true;
                            badrio.attack();
                            console.log("This is Badrio's attack: " + badrio.att);
                        }
                    });
                }
            }
            else if ( badrioIn === true) {
                truzo.att += 5
                $("#selected-character").animate({left: 25}, 200, function() {
                    $("#selected-character").animate({left: 0}, 200)
                })
                $("#villain-life").html(badrio.life -= truzo.att);
                $("#character-life").html(truzo.life -= badrio.att);
                if (badrio.life <= 0) {
                    getVillainAttack = false;
                    badrioIn = false;
                    trizioIn = true;
                    $("#selected-villain, #villain-stats").animate({left: 600}, 500, function() {
                        switchingVillain = true;
                        setTimeout(function() {
                            switchingVillain = false;
                        }, 1100);
                        $("#villain-character").attr("src", "assets/characters/trizio.png");
                        $("#villain-name").text(trizio.name);
                        $("#villain-life").html(trizio.life);
                        $("#selected-villain, #villain-stats").animate({left: 0}, 1000);

                        if (!getVillainAttack) {
                            getVillainAttack = true;
                            trizio.attack();
                            console.log("This is Trizio's attack: " + trizio.att);
                        }
                    });
                    

                }
            }
            else if ( trizioIn === true) {
                truzo.att += 5
                $("#villain-life").html(trizio.life -= truzo.att);
                $("#character-life").html(truzo.life -= badrio.att);
            }
        }
        else if (stefaIn === true) {
            if (lagozoIn === true) { 
                stefa.att += 5
                console.log("This is Stefa's attack: " + stefa.att);
                $("#selected-character").animate({left: 25}, 200, function() {
                    $("#selected-character").animate({left: 0}, 200)
                })
                $("#villain-life").html(lagozo.life -= stefa.att);
                // setTimeout(villainAttack, 3000);
                $("#character-life").html(stefa.life -= lagozo.att);
                if (lagozo.life <= 0) {
                    getVillainAttack = false;
                    lagozoIn = false;
                    badrioIn = true;
                    // $("#selected-villain", "#villain-stats").addClass("selected-villain2");

                    $("#selected-villain, #villain-stats").animate({left: 600}, 500, function() {
                        switchingVillain = true;
                        setTimeout(function() {
                            switchingVillain = false;
                        }, 1100);
                        $("#villain-character").attr("src", "assets/characters/badrio.png");
                        $("#villain-name").text(badrio.name);
                        $("#villain-life").html(badrio.life);
                        $("#selected-villain, #villain-stats").animate({left: 0}, 1000);

                        if (!getVillainAttack) {
                            getVillainAttack = true;
                            badrio.attack();
                            console.log("This is Badrio's attack: " + badrio.att);
                        }
                    });
                }
            }
            else if ( badrioIn === true) {
                stefa.att += 5
                console.log("This is Stefa's attack: " + stefa.att);
                $("#selected-character").animate({left: 25}, 200, function() {
                    $("#selected-character").animate({left: 0}, 200)
                })
                $("#villain-life").html(badrio.life -= stefa.att);
                $("#character-life").html(stefa.life -= badrio.att);
                if (badrio.life <= 0) {
                    getVillainAttack = false;
                    badrioIn = false;
                    trizioIn = true;
                    $("#selected-villain, #villain-stats").animate({left: 600}, 500, function() {
                        switchingVillain = true;
                        setTimeout(function() {
                            switchingVillain = false;
                        }, 1100);
                        $("#villain-character").attr("src", "assets/characters/trizio.png");
                        $("#villain-name").text(trizio.name);
                        $("#villain-life").html(trizio.life);
                        $("#selected-villain, #villain-stats").animate({left: 0}, 1000);

                        if (!getVillainAttack) {
                            getVillainAttack = true;
                            trizio.attack();
                            console.log("This is Trizio's attack: " + trizio.att);
                        }
                    });
                    

                }
            }
            else if ( trizioIn === true) {
                console.log("This is Stefa's attack: " + stefa.att);
                stefa.att += 5
                $("#villain-life").html(trizio.life -= stefa.att);
                $("#character-life").html(stefa.life -= badrio.att);
            }
        }
     }
    }


    // function villainAttack() {
    //     if (lagozoIn === true) {
    //         if(kideriIn === true) {
    //         $("#character-life").html(kideri.life -= lagozo.att)
    //         }
    //     }
    // }

    function characterWon() {

    }

    function newGame() {
            kideri.life = 110;
            stefa.life = 120;
            truzo.life = 140;
            lagozo.life = 100;
            badrio.life = 100;
            trizio.life = 100;
            getAttack = false;
            getVillainAttack = false;

            lagozoIn = false;
            badrioIn = false;
            truzioIn = false;

            isVillain = false;

            kideriIn = false;
            truzoIn = false;
            stefaIn = false;
            $("#winning-page").css("display", "none");
            $("#gameover-page").css("display", "none");
            $("#character-page").css("display", "inline-block");
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

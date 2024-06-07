var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColour = "";
var started = false;
var level = 0;

$(document).on("keydown", function () {
    if (!started) {
        started = true;
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});

$(".btn").on("click", function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence(), 1000);
        }
    }
    else {
        var wrongAudio = new Audio("../assets/sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function() {$("body").removeClass("game-over")}, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    $("#level-title").text("Level " + ++level);
    var randomNumber = Math.floor((Math.random() * 4));
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound("randomChosenColour");
}

function playSound(name) {
    var colorAudio = new Audio("../assets/sounds/" + name + ".mp3");
    colorAudio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {$("#" + currentColour).removeClass("pressed");}, 100);
}
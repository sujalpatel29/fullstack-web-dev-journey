var userClikcedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var level = 0;
var started = false;

$(document).keypress(function() {
  if (!started) {
    randomChosenColour = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColour);
    setTimeout(function() {
      $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
      playsound(randomChosenColour);
    }, 600);
    started = true;
  }
});

$(".btn").click(function() {
  let userChosenColour = $(this).attr("id");
  $(this).addClass("pressed");
  setTimeout(function() {
    $("#" + userChosenColour).removeClass("pressed");
  }, 100);
  

  userClikcedPattern.push(userChosenColour);
  playsound(userChosenColour);
  checkAnswer(userClikcedPattern.length - 1);
});
     
function checkAnswer(currentLevel){
  if(userClikcedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClikcedPattern.length === gamePattern.length){
      randomChosenColour = buttonColors[nextSequence()];
      gamePattern.push(randomChosenColour);
      setTimeout(function() {
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
        playsound(randomChosenColour);
      }, 600);
    }
  } else {   
    
    $("h1").text("Game Over, Press Any Key to Restart");
    let wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 400);
    
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClikcedPattern = [];
  randomChosenColour = null;
  started = false;
}

function playsound(color){
  let colorAudio = {
    red: new Audio("sounds/red.mp3"),
    blue: new Audio("sounds/blue.mp3"),
    green: new Audio("sounds/green.mp3"),
    yellow: new Audio("sounds/yellow.mp3")
  };
  colorAudio[color].play();
}

function nextSequence(){
  userClikcedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4) ;
    level++;
    $("h1").text("Level " + level);
    return randomNumber;
}
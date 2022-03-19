
// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

/*
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-3.mp3");
        tom4.play();
        break;

      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      default: console.log(buttonInnerHTML);
    }
  });
}
*/


  for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener ("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.onkeydown = function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

};

function makeSound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "k":
    var kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
    break;

    case "l":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  console.log(activeButton);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

/*
____________________________________________________________________________
  -Create a function that takes a character
  -Checks it against the switch statement in order to play the correct sound
  -Call it inside the event listener for the key press
  as well as the event listener for our drum buttons
____________________________________________________________________________
 Constructor Function for audio file location:
------------------------------------------------------------------------------
  function Audio (fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
      //Tap into the audio hardware
      //Check the file at fileLocation exists
      //Check the file at fileLocation is a sound file
      //Play the file at fileLocation
    }
  }
----------------------------------------------------------------------------
  Use that constructor audio to create a new audio object specifying the location of the audio file.

  Then we called the method associated with the new audio object and got it to play that sound

  Call Method:
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();

  Same Call Method:
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
____________________________________________________________________________

  keypress is now deprecated, you should use keydown instead:

  Use keydown event listener instead of keypress
----------------------------------------------------------------------------
  document.onkeydown = function(event) {
  console.log(event);
  var key = event.key;
  console.log(key);
  };
------------------------------------------------------------------------------
  document.onkeydown = function (e) {
  console.log(e);
  // use e.keyCode
  };
____________________________________________________________________________

*/

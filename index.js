let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let snare = new Audio("./sounds/snare.mp3");
let crash = new Audio("./sounds/crash.mp3");
let kickBass = new Audio("./sounds/kick-bass.mp3");

for (let i = 0; i < document.querySelectorAll(".drum-button").length; i++) {
  document
    .querySelectorAll(".drum-button")
    [i].addEventListener("click", function () {
      let buttonInnerHTML = this.innerHTML;
      playingSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
}

addEventListener("keydown", (event) => {
  playingSound(event.key);
  buttonAnimation(event.key);
});

function playingSound(letter) {
  letter = letter.toUpperCase();
  switch (letter) {
    case "W":
      tom1.currentTime = 0;
      tom1.play();
      break;
    case "A":
      tom2.currentTime = 0;
      tom2.play();
      break;
    case "S":
      tom3.currentTime = 0;
      tom3.play();
      break;
    case "D":
      tom4.currentTime = 0;
      tom4.play();
      break;
    case "J":
      snare.currentTime = 0;
      snare.play();
      break;
    case "K":
      crash.currentTime = 0;
      crash.play();
      break;
    case "L":
      kickBass.currentTime = 0;
      kickBass.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(letter) {
  letter = letter.toLowerCase();
  let currentButton = document.querySelector("." + letter);
  currentButton.classList.add("pressed");
  setTimeout(function () {
    currentButton.classList.remove("pressed", 100);
  });
}

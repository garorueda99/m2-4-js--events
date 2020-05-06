// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const BODY = document.querySelector("body");
const MAINP = document.querySelector("#result");
const MAINDIV = document.createElement("div");
const PROGRESSBAR = document.createElement("div");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let textCount = 3;
MAINDIV.innerHTML = textCount.toString();
MAINDIV.id = "counter";
BODY.appendChild(MAINDIV);
let intro;
let introTime = 0;
PROGRESSBAR.id = "progress";
PROGRESSBAR.innerHTML = "Progress";

intro = setInterval(count, 1200);

function introStop() {
  clearInterval(intro);
}

function progressStop() {
  clearInterval(progress);
}

function count() {
  introTime += 1000;
  textCount--;
  MAINDIV.innerHTML = textCount.toString();
  // console.log(introTime);
  if (textCount === 0) {
    introStop();
    MAINDIV.style.color = "orange";
    MAINDIV.innerHTML = "NOW!!!!";
    BODY.appendChild(PROGRESSBAR);
    progressTime = 0;
    play();
    console.log("calling play");
  }
}

function play() {
  console.log("top play");
  const WINDOWS = document.addEventListener("click", () => {
    if (progressTime < 1000) {
      MAINP.innerHTML = "Hello, you just click me!!!";
      MAINP.style.color = getRandomColor();
      PROGRESSBAR.innerHTML = "WINNER";
      MAINDIV.innerHTML = "";
      const CLOUDS = document.querySelector(".showBackground");
      CLOUDS.classList.remove("showBackground");
      progressStop();
    }
  });
  progress = setInterval(progressCount, 250);
}

let progressTime = 0;
let progressWidth = 100;
function progressCount() {
  progressWidth -= 25;
  progressTime += 250;
  PROGRESSBAR.innerHTML = `${(1000 - progressTime) / 1000} ms`;
  PROGRESSBAR.style.width = `${progressWidth}%`;
  if (progressTime >= 1000) {
    PROGRESSBAR.innerHTML = "GAME OVER";
    progressWidth = 100;
    PROGRESSBAR.style.width = `${progressWidth}%`;
    progressStop();
  }
}

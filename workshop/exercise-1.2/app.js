// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)

const BODY = document.querySelector("body");
const SPANTIMETAG = document.querySelector("#time");
console.log(SPANTIMETAG);
const MAINDIV = document.createElement("div");
MAINDIV.innerHTML = "WINNER!!!";
let textCount = 5;
let progressTime = 0;

function play() {
  const WINDOWS = document.addEventListener("click", () => {
    if (progressTime < 5000) {
      document.body.style.backgroundColor = getRandomColor();
      BODY.appendChild(MAINDIV);
      MAINDIV.style.fontSize = "50px";
      progressStop();
    }
  });
  progress = setInterval(progressCount, 1000);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function progressStop() {
  clearInterval(progress);
}

function progressCount() {
  progressTime += 1000;
  SPANTIMETAG.innerHTML = textCount.toString() + " s";
  // console.log(textCount, progressTime);
  if (progressTime >= 5000) {
    MAINDIV.innerHTML = "GAME OVER";
    BODY.appendChild(MAINDIV);
    progressStop();
  }
  textCount--;
}

play();

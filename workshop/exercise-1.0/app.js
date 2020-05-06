// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const BODY = document.querySelector("body");
const MAINDIV = document.querySelector("#main");

const WINDOWS = document.addEventListener("click", () => {
  MAINDIV.innerHTML = "Hello, you just click me!!!";
  MAINDIV.style.color = getRandomColor();
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

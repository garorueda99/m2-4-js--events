const WRAPPER = document.createElement("div");
const CHIME = document.createElement("AUDIO");
const START = document.createElement("button");
let initialTime = 5000;

WRAPPER.classList = "wrapper";
START.classList = "startButton";
START.innerHTML = "START";

document.body.appendChild(WRAPPER);
WRAPPER.appendChild(START);
START.addEventListener("click", start);

function start() {
  WRAPPER.removeChild(START);

  //This generates random buttons (3-7)
  for (let i = 1; i <= Math.floor(Math.random() * 5) + 3; i++) {
    const CELL = document.createElement("button");
    CELL.classList = `grid-item`;
    CELL.id = `cell-${i}`;
    CELL.innerHTML = `${i}`;
    CELL.dataset.key = "off";
    CELL.addEventListener("click", clickColor);
    CELL.style.position = "absolute";
    CELL.style.left = `${Math.floor(Math.random() * 85)}%`;
    CELL.style.top = `${Math.floor(Math.random() * 85)}%`;
    WRAPPER.appendChild(CELL);
  }
  const ALLBUTTONS = document.querySelectorAll("button");
  //This generates the timer
  const TIMERFRAME = document.createElement("div");
  TIMERFRAME.id = "timer";
  WRAPPER.appendChild(TIMERFRAME);
  const TIMERLABEL = document.createElement("div");
  TIMERLABEL.innerHTML = "Time:";
  TIMERFRAME.appendChild(TIMERLABEL);
  const TIMER = document.createElement("div");
  TIMER.innerHTML = "05s";
  TIMERFRAME.appendChild(TIMER);

  // this runs the timer

  time = setInterval(() => {
    initialTime -= 1000;
    TIMER.innerHTML = `${initialTime / 1000}s`;
    if (initialTime <= 0) {
      document.body.appendChild(CHIME);
      CHIME.play();
      clearInterval(time);
      setTimeout(function () {
        alert("Time's Up!!!");
      }, 0);
    } else {
      console.log("Keep Going!!");
      let win = true;
      for (let i = 0; i < ALLBUTTONS.length; i++) {
        if (ALLBUTTONS[i].dataset.key === "off") {
          win = false;
        }
      }
      console.log(win);
      if (win) {
        clearInterval(time);
        TIMERFRAME.removeChild(TIMER);
        TIMERLABEL.innerHTML = "WINNER!!!";
        for (let i = 0; i < ALLBUTTONS.length; i++) {
          ALLBUTTONS[i].removeEventListener("click", clickColor);
        }
      }
    }
  }, 1000);
}

function clickColor() {
  if (this.dataset.key === "off") {
    this.style.background = "green";
    this.dataset.key = "on";
  } else {
    this.style.background = "firebrick";
    this.dataset.key = "off";
  }
}

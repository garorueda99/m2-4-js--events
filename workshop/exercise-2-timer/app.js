const START = document.querySelector("#start");
const STOP = document.querySelector("#stop");
const RESET = document.querySelector("#reset");
const STARTTIMER = document.querySelector("#startTimer");
const STOPTIMER = document.querySelector("#stopTimer");
const RESETTIMER = document.querySelector("#resetTimer");
const INPUTTIMEMIN = document.querySelector("#min");
const INPUTTIMESEC = document.querySelector("#sec");
const CHIME = document.createElement("AUDIO");
const stopwatchDiv = document.querySelector("#stopwatch");
const timerDiv = document.querySelector("#timer");
CHIME.src = "chime.mp3";
let totalSeconds = 0;
let totalMinutes;
let totalHours;
let stopWatch = 0;
let initialTime = 0;

function setDate() {
  const secondHand = document.querySelector(".seconds-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const now = new Date();
  const seconds = now.getSeconds();
  totalSeconds === 0 ? (totalSeconds = seconds) : (totalSeconds += 1);
  // console.log(`total ${totalSeconds} sec ${seconds}`);
  const secondsInDegrees = (360 / 60) * totalSeconds + 90;
  secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

  const minutes = now.getMinutes();
  isNaN(totalMinutes)
    ? (totalMinutes = minutes)
    : seconds === 0
    ? (totalMinutes += 1)
    : "";

  const minutesInDegrees = (360 / 60) * (totalMinutes + seconds / 60) + 90;
  // console.log(`minutes ${minutesInDegrees}`);
  minsHand.style.transform = `rotate(${minutesInDegrees}deg)`;

  const hours = now.getHours();
  // console.log(hours);
  const hoursInDegrees = (360 / 12) * (hours + minutes / 60) + 90;
  // console.log(hoursInDegrees);
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;

  let literalHours = hours;
  let literalMinutes = minutes;
  let literalSeconds = seconds;
  hours < 10 ? (literalHours = "0" + hours) : "";
  minutes < 10 ? (literalMinutes = "0" + minutes) : "";
  seconds < 10 ? (literalSeconds = "0" + seconds) : "";

  document.getElementById(
    "timeScreen"
  ).innerHTML = `${literalHours}:${literalMinutes}:${literalSeconds}`;
}

setInterval(setDate, 1000);
// console.log(START);

START.addEventListener("click", onClickStart);
STOP.addEventListener("click", onClickStop);
RESET.addEventListener("click", onClickReset);

function onClickStart() {
  time = setInterval(() => {
    stopWatch += 100;
    stopwatchDiv.innerHTML = SecondsToTime(stopWatch);
  }, 100);
}

function onClickStop() {
  clearInterval(time);
}

function onClickReset() {
  clearInterval(time);
  stopWatch = 0;
  stopwatchDiv.innerHTML = "00: 00: 00";
}

function SecondsToTime(sec) {
  let minutes = "00";
  let seconds = "00";
  let milisec = "00";
  if (sec > 0) {
    milisec = sec.toString();
    milisec = milisec[milisec.length - 3] + "0";
    seconds = Math.round(sec / 1000);
    if (seconds >= 60) {
      seconds = Math.round(((seconds / 60) % 1) * 60);
    }
    seconds = seconds.toString();
    if (seconds.length === 1) {
      seconds = "0" + seconds;
    }

    minutes = Math.floor(sec / 1000 / 60 + 1 / 120);
    minutes = minutes.toString();
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }
  }
  return `${minutes}: ${seconds}: ${milisec} `;
}

STARTTIMER.addEventListener("click", onClickStartTimer);
STOPTIMER.addEventListener("click", onClickStopTimer);
RESETTIMER.addEventListener("click", onClickResetTimer);

function onClickStartTimer() {
  initialTime = INPUTTIMEMIN.value * 60 * 1000 + INPUTTIMESEC.value * 1000;
  console.log(initialTime);
  if (initialTime >= 0) {
    time2 = setInterval(() => {
      initialTime -= 100;
      console.log(initialTime);
      timerDiv.innerHTML = SecondsToTime(initialTime);
      if (initialTime <= 0) {
        document.body.appendChild(CHIME);
        CHIME.play();
        clearInterval(time2);
        setTimeout(function () {
          alert("Time's Up!!!");
        }, 100);
      }
    }, 100);
  }
}

function onClickStopTimer() {
  let timeString = (initialTime / 1000 / 60).toString();
  INPUTTIMEMIN.value = Math.floor(timeString);
  INPUTTIMESEC.value = Math.round(
    (timeString - Math.floor(timeString)) * 60,
    0
  );
  clearInterval(time2);
}

function onClickResetTimer() {
  clearInterval(time2);
  INPUTTIMEMIN.value = 0;
  INPUTTIMESEC.value = 0;
  timerDiv.innerHTML = "00: 00: 00";
}

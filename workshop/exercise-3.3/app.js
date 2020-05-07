for (let i = 1; i <= 20; i++) {
  const CELL = document.createElement("button");
  CELL.classList = `grid-item`;
  CELL.id = `cell-${i}`;
  CELL.innerHTML = `${i}`;
  CELL.dataset.key = "off";
  CELL.addEventListener("click", clickColor);
  CELL.style.position = "absolute";
  CELL.style.left = `${Math.floor(Math.random() * 101)}%`;
  CELL.style.top = `${Math.floor(Math.random() * 101)}%`;
  document.body.appendChild(CELL);
}

// for (let i = 1; i <= 20; i++) {
//   const CELLID = document.querySelector(`#cell-${i}`);
// }

function clickColor() {
  if (this.dataset.key === "off") {
    this.style.background = "green";
    this.dataset.key = "on";
  } else {
    this.style.background = "firebrick";
    this.dataset.key = "off";
  }
}

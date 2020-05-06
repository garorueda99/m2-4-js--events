const BODY = document.querySelector("body");
const GRID = document.createElement("div");
GRID.classList = "grid-container";
BODY.appendChild(GRID);

for (let i = 1; i <= 20; i++) {
  const CELL = document.createElement("button");
  CELL.classList = `grid-item`;
  CELL.id = `cell-${i}`;
  CELL.innerHTML = `${i}`;
  CELL.dataset.key = "off";
  GRID.appendChild(CELL);
  CELL.addEventListener("click", clickColor);
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

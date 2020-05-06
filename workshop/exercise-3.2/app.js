const BODY = document.querySelector("body");
const GRID = document.createElement("div");
GRID.classList = "grid-container";
BODY.appendChild(GRID);

for (let i = 1; i <= 20; i++) {
  const CELL = document.createElement("div");
  CELL.classList = `grid-item`;
  CELL.id = `cell-${i}`;
  CELL.innerHTML = `${i}`;
  GRID.appendChild(CELL);
  CELL.addEventListener("click", clickColor);
}

// for (let i = 1; i <= 20; i++) {
//   const CELLID = document.querySelector(`#cell-${i}`);
// }

function clickColor() {
  this.style.background = "green";
}

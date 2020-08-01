const gridArea = document.querySelector(".grid-area");
const newSketch = document.querySelector(".new");
const resetSketch = document.querySelector(".reset");
const rgbSketch = document.querySelector(".rgb");

//Set grid area
function setGrid(number) {
  gridArea.style.grid = `repeat(${number}, auto) / repeat(${number}, auto)`;
  for (let c = 0; c < number * number; c++) {
    let cell = document.createElement("div");
    gridArea.appendChild(cell).className = "grid-item";
    draw(cell);
    reset(cell);
    rgbSketch.addEventListener("click", () => {
      drawRgb(cell);
    });
  }
}

function draw(element) {
  element.addEventListener("mouseover", () => {
    element.classList.add("draw");
  });
}

//Get grid from user
function askGrid(number) {
  number = prompt("Size of your grid? (enter a number)");
  setGrid(number);
}

//Reset button
function reset(element) {
  resetSketch.addEventListener("click", () => {
    element.remove("draw");
    element.style.style = "white";
  });
}

// RGB Mode
function randomRgb(element) {
  const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.background = "#" + randomColor;
  };
  return setBg();
}

function drawRgb(element) {
  element.addEventListener("mouseover", () => {
    element.style.color = randomRgb(element);
  });
}
//New grid
newSketch.addEventListener("click", askGrid);

//Default grid
setGrid(16);

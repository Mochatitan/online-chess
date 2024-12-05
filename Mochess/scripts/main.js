import { Tile } from './tile.js'

/** @type {HTMLCanvasElement} */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const ROWS = 8;
const COLUMNS = 8;
const WIDTH = canvas.width / COLUMNS;
const HEIGHT = canvas.height / ROWS;

var state = 'initializing';
//initializing, client-move, op-move

drawChessboard();


function update(progress) {
  // Update the state of the world for the elapsed time since last render
}

function draw() {
  drawChessboard();

}

function loop(timestamp) {
  var progress = timestamp - lastRender;

  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
var lastRender = 0;
window.requestAnimationFrame(loop);

canvas.addEventListener("mousedown", function (e) {
  const rect = canvas.getBoundingClientRect()
  console.log(e.clientX - rect.x);
});


function drawChessboard() {
  // draw a checkered background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      // only color every other tile
      if ((row + col) % 2 == 1) {
        // draw a square tile at the current row/column position
        ctx.fillRect(col * WIDTH, row * HEIGHT, WIDTH, HEIGHT);
      }

    }
  }
}

export { ctx, WIDTH }
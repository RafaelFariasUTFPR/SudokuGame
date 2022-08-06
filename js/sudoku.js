import { Solver } from "./solver.js";
import { Board } from "./board.js";
import { Canvas } from "./canvas.js";

const canvasSize = 450;
const cellMargin = 3;
const squareMargin = 4;
const cellSize = (canvasSize / 9) - (cellMargin);



let canvas = new Canvas(canvasSize, cellMargin, squareMargin, cellSize);

let board = new Board(canvas);
board.cellArr[9].showDigit(2);
console.log(board.cellArr[1].cellSize);

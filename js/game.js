import { Board } from "./board.js";
import { Canvas } from "./canvas.js";

export class Game{
    constructor(){

    }

    testPencil(){
        this.board.cellArr.forEach(element => {
            for(let i = 1; i < 10; i++)
                element.showDigit(i);
        });
    }
    testValue(){
        this.board.cellArr.forEach(element => {
            element.setValue(1);
        });
    }

    canvasSize = 450;
    cellMargin = 3;
    squareMargin = 4;
    cellSize = (this.canvasSize / 9) - (this.cellMargin);

    canvas = new Canvas(this.canvasSize, this.cellMargin, this.squareMargin, this.cellSize);
    board = new Board(this.canvas);
}
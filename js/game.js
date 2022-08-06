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

    input(key){

        //Convertendo string para int
        key = parseInt(key);
        if(this.setupMode && !isNaN(key) && (this.activeCell >= 0 && this.activeCell < this.board.cellArr.length)){                        


            this.board.cellArr[this.activeCell].setValue(key);

            //Setando como não permanente caso seja 0 ou seja caso apague
            this.board.cellArr[this.activeCell].setPermanent(Boolean(key));
        }
    }

    loop(){
        //Input da checkbox "setup mode"
        this.setupModeCheckbox.onclick = () =>{
            this.setupMode = !this.setupMode
            console.log(this.setupMode);
        }

        //Input das celulas
        this.board.cellArr.forEach(element => {
            element.element.onclick = () =>{
                this.activeCell = element.index;
            }
        });

    }

    canvasSize = 450;
    cellMargin = 3;
    squareMargin = 4;
    cellSize = (this.canvasSize / 9) - (this.cellMargin);
    activeCell = -1;
    canvas = new Canvas(this.canvasSize, this.cellMargin, this.squareMargin, this.cellSize);
    board = new Board(this.canvas);
    setupMode = false;
    setupModeCheckbox = document.getElementById("setup-mode-checkbox");


    
}
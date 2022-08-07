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
        if(!isNaN(key) && (this.activeCell >= 0 && this.activeCell < this.board.cellArr.length)){
            //Caso esteja no modo de setup
            if(this.setupMode)
            {
                this.board.cellArr[this.activeCell].setValue(key);
                //Setando como não permanente caso seja 0 ou seja caso apague
                this.board.cellArr[this.activeCell].setPermanent(Boolean(key));
                this.#highlightCells(this.activeCell);
                return;
            }
            if(!this.board.cellArr[this.activeCell].permanent)
            {
                this.board.cellArr[this.activeCell].setValue(key);
                this.#highlightCells(this.activeCell);
            }

        }
    }

    loop(){
        //Input da checkbox "setup mode"
        this.setupModeCheckbox.onclick = () =>{
            this.setupMode = !this.setupMode
        }

        //Input das celulas
        this.board.cellArr.forEach(element => {
            element.element.onclick = () =>{
                this.#selectCell(element.index);                
            }
        });



    }


    #highlightCells(cellIndex){
        this.board.cellArr.forEach(element => {
            if(element.index == cellIndex)
                return;
            element.highlightCell(false);
            
            if(this.highlightOptions.col && element.col == this.board.cellArr[cellIndex].col){
                element.highlightCell(true);
                return;
            }
            if(this.highlightOptions.row && element.row == this.board.cellArr[cellIndex].row){
                element.highlightCell(true);
                return;
            }
            if(this.highlightOptions.square && element.square == this.board.cellArr[cellIndex].square){
                element.highlightCell(true);
                return;
            }
            if(this.highlightOptions.value && element.value == this.board.cellArr[cellIndex].value && element.value != 0){
                element.highlightCell(true);
                return;
            }                  
        });

    }


    #lastActiveCell = null;
    #selectCell(cellIndex){
        if(this.#lastActiveCell != null)
        {
            this.board.cellArr[this.#lastActiveCell].setIsActive(false);

        }
        

        
        this.#highlightCells(cellIndex);
        


        this.activeCell = cellIndex;
        this.board.cellArr[cellIndex].setIsActive(true);
        this.#lastActiveCell = cellIndex;

        

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
    highlightOptions = {
        col: true,
        row: true,
        square: true,
        value: true
    };


    
}
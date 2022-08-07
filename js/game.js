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
        let parsedKey = parseInt(key);

        //Possibilitando apagar com del ou backspace
        if(key == 'Backspace' || key == 'Delete')
            parsedKey = 0;
        
        
        if(!isNaN(parsedKey) && (this.activeCell >= 0 && this.activeCell < this.board.cellArr.length)){
            if(parsedKey == 0){
                for(let i = 1; i < 10; i++){
                    this.board.cellArr[this.activeCell].hideDigit(i);
                }
                
            }
            
            if(this.pencilMode){
                if(this.board.cellArr[this.activeCell].value == 0 && parsedKey != 0){
                    console.log("aqui");
                    this.board.cellArr[this.activeCell].togglePencilDigit(parsedKey);

                }
                //Não permite que sejam colocados valores caso o modo lápis esteja ligado
                return;
            } 
            //Caso esteja no modo de setup
            if(this.setupMode)
            {
                this.board.cellArr[this.activeCell].setValue(parsedKey);
                //Setando como não permanente caso seja 0 ou seja caso apague
                this.board.cellArr[this.activeCell].setPermanent(Boolean(parsedKey));
                this.#highlightCells(this.activeCell);
                return;
            }
            if(!this.board.cellArr[this.activeCell].permanent)
            {
                this.board.cellArr[this.activeCell].setValue(parsedKey);
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

        this.numberInputButtons.forEach(element => {
            element.onclick = () =>{
                this.input(element.value);               
            }
        });

        this.toolInputButtons.backspace.onclick = () =>{
            this.input(0);
        };
        
        this.toolInputButtons.undo.onclick = () =>{
            //TODO
        };

        this.toolInputButtons.pencil.onclick = () =>{
            if(this.pencilMode){
                this.toolInputButtons.pencil.id = "tool-btn-pencil";
                this.pencilMode = false;
                return;
            }
            this.pencilMode = true;
            this.toolInputButtons.pencil.id = "tool-btn-pencil-selected";
                
        };


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

    canvasSize = 400;
    cellMargin = 3;
    squareMargin = 4;
    cellSize = (this.canvasSize / 9) - (this.cellMargin);
    activeCell = -1;
    canvas = new Canvas(this.canvasSize, this.cellMargin, this.squareMargin, this.cellSize);
    board = new Board(this.canvas);
    setupMode = false;
    setupModeCheckbox = document.getElementById("setup-mode-checkbox");
    pencilMode = false;

    highlightOptions = {
        col: true,
        row: true,
        square: true,
        value: true
    };

    numberInputButtons = [
        document.getElementById("number-btn-1"),
        document.getElementById("number-btn-2"),
        document.getElementById("number-btn-3"),
        document.getElementById("number-btn-4"),
        document.getElementById("number-btn-5"),
        document.getElementById("number-btn-6"),
        document.getElementById("number-btn-7"),
        document.getElementById("number-btn-8"),
        document.getElementById("number-btn-9")
    ];

    toolInputButtons = {
        pencil: document.getElementById("tool-btn-pencil"),
        //pencilSelected: document.getElementById("tool-btn-pencil-selected"),
        undo: document.getElementById("tool-btn-undo"),
        backspace: document.getElementById("tool-btn-backspace")
    };

    
}
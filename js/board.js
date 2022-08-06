import { Cell } from "./cell.js";


export class Board{
    constructor(_canvas){
        this.canvas = _canvas;
        
        this.#generateCells();
        this.#generateSquares();
        this.#appendSquares();
    }

    #generateCells()
    {
        //Cria as celulas, ja calculando a row, col e qual square ele está
        let celln = 0;
        let sqrNumber = 0;
        for(let _row = 0; _row < 9; _row++)
        {
            sqrNumber = 0;
            if(_row > 2)
                sqrNumber = 3;
            if(_row > 5)
            sqrNumber = 6;
                    
    
            
            let i = 0;
            for(let _col = 0; _col < 9; _col++)
            {
                if(i > 2)
                {
                    sqrNumber++;
                    i = 0;
                }    
                i++;
                
                let cellObj = new Cell(_row, _col, sqrNumber, celln, this.canvas.cellSize);
                
    
    
                cellObj.element.id = 'cell-' + celln;
                cellObj.element.className = 'cell';
                cellObj.element.style.width = this.canvas.cellSize+"px";
                cellObj.element.style.height = this.canvas.cellSize+"px";
                
                this.cellArr.push(cellObj);
                
                
    
                celln++;
            }
            sqrNumber -= 2;
        }
    }

    #generateSquares()
    {
        for(let i = 0; i < 9; i++)
        {
            let squareObj = {
                element: document.createElement('div'),
                cells: []
            }

            squareObj.element.style.width = ((this.canvas.canvasSize/3) - this.canvas.squareMargin) +"px";
            squareObj.element.style.height = ((this.canvas.canvasSize/3) - this.canvas.squareMargin)+"px";
            squareObj.element.id = 'square';

            
            this.squaresArr.push(squareObj);


            
            
        }

        this.cellArr.forEach(cell => {
            cell.element.appendChild(cell.valueText);
            cell.pencil.digits.forEach(element => {
                cell.element.appendChild(element.element);
                
            });

            this.squaresArr[cell.square].element.appendChild(cell.element);
            this.squaresArr[cell.square].cells.push(cell.element);
            
        });


    }

    #appendSquares(){
        this.squaresArr.forEach(element => {
            this.gameBoard.appendChild(element.element);
            
        });
    }






    cellArr = [];
    squaresArr = [];
    canvas;
    cellSize;
    //Elemento HTML do div que contem o jogo
    gameBoard = document.getElementById("game-board");

}
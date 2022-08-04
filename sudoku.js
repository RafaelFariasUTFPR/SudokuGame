const canvasSize = 450;
const cellMargin = 4;
const cellSize = (canvasSize / 9) - cellMargin;
let gameBoard = document.getElementById("game-board");

let cellArr = [];
let squaresArr = [];


generateCanvas();
generateCells();
generateSquares();



function generateCanvas()
{
    gameBoard.style.width = canvasSize + "px";
    gameBoard.style.height = canvasSize + "px";
    gameBoard.style.left = "calc(50% - " + canvasSize/2 + "px)";
}

function generateCells()
{
    for(let _row = 0; _row < 9; _row++)
    {
        for(let _col = 0; _col < 9; _col++)
        {
            let cellObj = {
                element: document.createElement('div'),
                row: _row,
                col: _col,
                value: 0,
                possibleNumbers: "123456789"
            };
            cellObj.element.id = 'cell'
            cellObj.element.style.width = cellSize+"px";
            cellObj.element.style.height = cellSize+"px";
            cellObj.element.style.backgroundColor = "red";
            cellObj.element.innerHTML=_row+" "+_col;            
            cellArr.push(cellObj);
        }
    }
}

function generateSquares()
{
    for(let i = 0; i < 9; i++)
    {
        let squareObj = {
            element: document.createElement('div'),
            cells: []
        }

        squareObj.element.style.width = canvasSize/3+"px";
        squareObj.element.style.height = canvasSize/3+"px";
        squareObj.element.id = 'square';

        for(let cellN = 0; cellN < 9; cellN++)
        {
            let c = cellN + (9*i);
            squareObj.element.appendChild(cellArr[c].element);
            squareObj.cells.push(cellArr[c]);

        }
        squaresArr.push(squareObj);


        
        gameBoard.appendChild(squareObj.element);
    }
}
const canvasSize = 450;
const cellMargin = 3;
const squareMargin = 4;
const cellSize = (canvasSize / 9) - (cellMargin);
let gameBoard = document.getElementById("game-board");

let cellArr = [];
let squaresArr = [];


generateCanvas();
generateCells();
generateSquares();





cellArr.forEach(cell => {
    document.getElementById(cell.id).onclick = function()    {
        console.log(cell.id);
    }
});



function generateCanvas()
{
    gameBoard.style.width = canvasSize + "px";
    gameBoard.style.height = canvasSize + "px";
    //gameBoard.style.left = "calc(50% - " + canvasSize/2 + "px)";
}

function createPencilObj()
{
    let _digits = [];
    for(let i = 0; i < 9; i++)
    {
        let digit = document.createElement('div');
        digit.className = 'pencil-digit';
        digit.style.width = cellSize/3 + "px";
        digit.style.height = cellSize/3 + "px";
        digit.innerHTML = i;
        _digits.push(digit);
    }
    let pencilObj = {
        digits: _digits,
        activeNumbers:""

    };
        

    return {
        digits: _digits,
        activeNumbers:""

    };
}

function generateCells()
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

            let cellObj = {
                element: document.createElement('div'),
                row: _row,
                col: _col,
                square: sqrNumber,
                value: 0,
                possibleNumbers: "123456789",
                id: 'cell-' + celln,
                pencil: createPencilObj()
            };


            cellObj.element.id = 'cell-' + celln;
            cellObj.element.className = 'cell';
            cellObj.element.style.width = cellSize+"px";
            cellObj.element.style.height = cellSize+"px";
            //cellObj.element.innerHTML=_row+" "+_col;    
            
            
            
            cellArr.push(cellObj);
            
            

            celln++;
        }
        sqrNumber -= 2;
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

        squareObj.element.style.width = ((canvasSize/3) - squareMargin) +"px";
        squareObj.element.style.height = ((canvasSize/3) - squareMargin)+"px";
        squareObj.element.id = 'square';


        squaresArr.push(squareObj);


        
        
    }

    cellArr.forEach(cell => {
        cell.pencil.digits.forEach(element => {
            cell.element.appendChild(element);
            
        });

        squaresArr[cell.square].element.appendChild(cell.element);
        squaresArr[cell.square].cells.push(cell.element);
        
    });

    squaresArr.forEach(element => {
        gameBoard.appendChild(element.element);
    });
}
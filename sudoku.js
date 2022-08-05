const canvasSize = 450;
const cellMargin = 3;
const squareMargin = 4;
const cellSize = (canvasSize / 9) - (cellMargin);
let gameBoard = document.getElementById("game-board");

let cellArr = [];
let squaresArr = [];


setup();

//Função para mostrar ou esconder os digitos
cellArr[0].showDigit(1);
cellArr[0].showDigit(5);
//Set to 0 to hide
cellArr[5].setValue(3);




//Get click
cellArr.forEach(cell => {
    document.getElementById(cell.id).onclick = function()    {
        console.log(cell.id);
    }
});

function setup()
{
    generateCanvas();
    generateCells();
    generateSquares();
}

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
        let digit = {
            element: document.createElement('div'),
            number: i + 1
            };
        digit.element.className = 'pencil-digit';
        digit.element.style.width = cellSize/3 + "px";
        digit.element.style.height = cellSize/3 + "px";
        _digits.push(digit);
    }
    return {
        digits: _digits,
        activeNumbers:""
    };
}

function createValueText()
{
    let valueObj = document.createElement('div');
    valueObj.className = 'value';
    return valueObj;
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
                valueText: createValueText(),
                possibleNumbers: "123456789",
                id: 'cell-' + celln,
                pencil: createPencilObj(),
                hideDigit(_digit)
                {
                    this.pencil.digits[_digit-1].element.innerHTML = "";
                },
                showDigit(_digit)
                {
                    this.pencil.digits[_digit-1].element.innerHTML = this.pencil.digits[_digit-1].number;
                },
                setValue(_value)
                {
                    this.value = _value;
                    if(_value == 0)
                    {
                        this.valueText.innerHTML = "";
                        return;
                    }
                    this.valueText.innerHTML = _value;
                }
        
            };


            cellObj.element.id = 'cell-' + celln;
            cellObj.element.className = 'cell';
            cellObj.element.style.width = cellSize+"px";
            cellObj.element.style.height = cellSize+"px";
            
            
            
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
        cell.element.appendChild(cell.valueText);
        cell.pencil.digits.forEach(element => {
            cell.element.appendChild(element.element);
            
        });

        squaresArr[cell.square].element.appendChild(cell.element);
        squaresArr[cell.square].cells.push(cell.element);
        
    });

    squaresArr.forEach(element => {
        gameBoard.appendChild(element.element);
    });
}
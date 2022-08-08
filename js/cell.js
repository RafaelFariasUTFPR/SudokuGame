export class Cell{
    constructor(_row, _col, sqrNumber, celln, _cellSize){
        this.row = _row;
        this.col = _col;
        this.square = sqrNumber;
        this.index = celln;
        this.cellSize = _cellSize;
        this.pencil = this.#createPencilObj();
        this.element.id = 'cell-' + celln;
        this.element.className = 'cell';     
        
    }
    togglePencilDigit(_digit){
        if(this.pencil.digits[_digit-1].element.innerHTML == ""){
            this.showDigit(_digit)
            //this.pencil.digits[_digit-1].element.innerHTML = this.pencil.digits[_digit-1].number;
            return;
        }
        this.hideDigit(_digit);
        //this.pencil.digits[_digit-1].element.innerHTML = "";
    }
    hideDigit(_digit){
        this.pencil.digits[_digit-1].element.innerHTML = "";
        if(this.pencil.visibleNumbers == null)
            return;
        if(this.pencil.visibleNumbers.includes(_digit)){
            for(let i = 0; i < this.pencil.visibleNumbersLength; i++)
            {
                if(this.pencil.visibleNumbers[i] == _digit)
                {
                    this.pencil.visibleNumbers.splice(i,1);
                    this.pencil.visibleNumbersLength--;
                }
            }

        }
    }
    showDigit(_digit){
        this.pencil.digits[_digit-1].element.innerHTML = this.pencil.digits[_digit-1].number;

        
        if(!this.pencil.visibleNumbers.includes(_digit))
        {
            this.pencil.visibleNumbers.push(_digit);
            this.pencil.visibleNumbersLength++;
        }
        

    }
    setValue(_value){
        let tempValue = _value;
        if(tempValue == this.value)
            tempValue = 0;

        this.value = tempValue;
        if(tempValue == 0)
        {
            this.valueText.innerHTML = "";
            return;
        }
        this.valueText.innerHTML = tempValue;
    }

    setPermanent(trueOrFalse)
    {
        this.permanent = trueOrFalse;
        if(trueOrFalse)
        {
            this.valueText.className = 'value permanent';
            return;
        }
        this.valueText.className = 'value';
    }

    #createPencilObj()
    {
        let _digits = [];
        for(let i = 0; i < 9; i++)
        {
            let digit = {
                element: document.createElement('div'),
                number: i + 1
                };
            digit.element.className = 'pencil-digit';
            digit.element.style.width = this.cellSize/3 + "px";
            digit.element.style.width = this.cellSize/3 + "px";
            digit.element.style.height = this.cellSize/3 + "px";
            
            _digits.push(digit);
        }
        return {
            digits: _digits,
            visibleNumbers: [],
            visibleNumbersLength: 0
        };
    }

    #createValueText()
    {
        let valueObj = document.createElement('div');
        valueObj.className = 'value';
        return valueObj;
    }

    highlightCell(trueOrFalse){
        if(trueOrFalse){
            if(!this.element.className.includes(' highlight-cell'))
                this.element.className += ' highlight-cell';
            return
        }
        
        if(this.element.className.includes(" highlight-cell"))
            this.element.className = this.element.className.replace(" highlight-cell", "");

    }






    setIsActive(trueOrFalse){
        if(trueOrFalse){
            this.element.className = 'cell active-cell';
            return;
        }
        this.element.className = 'cell';
    }


    element = document.createElement('div');
    row;
    col;
    square;
    index;
    cellSize;
    value = 0;
    permanent = false;
    valueText = this.#createValueText();
    possibleNumbers = [1,2,3,4,5,6,7,8,9];
    pencil = [];



}
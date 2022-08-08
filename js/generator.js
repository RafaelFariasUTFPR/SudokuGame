export class Generator{


    #checkAvailableNumbers(){
        let availableNumbers = [];


    
    }



    dumbGenerator(_solvedBoard){
        let numberOfPermutations = 100;

        let permutationTypes = [
            "row-swap",
            "col-swap",
            "square-swap",
            "rotate",
            "mirror-x",
            "mirror-y"

        ];
        rowSwap(_solvedBoard);
        for(let permutation = 0; permutation < numberOfPermutations; permutation++){
            let permutationType = permutationTypes[randomIntFromInterval(0, permutationTypes.length-1)];

            //console.log(this.randomIntFromInterval(0, permutationTypes.length-1));

            switch(permutationType){
                case "row-swap":
                    //rowSwap();
                    break;
                case "col-swap":
                    colSwap();
                    break;
                case "square-swap":
                    squareSwap();
                    break;
                
            }

        }




        function rowSwap(){
            let row1 = randomIntFromInterval(0,9);
            let row2 = randomIntFromInterval(0,9);
            while(row2 == row1)
                row2 = randomIntFromInterval(0,9);
            
            let tempRow;
            for(let row = 0; row < 9; row++){
                
                //_solvedBoard
            }
        }

        function colSwap(){

        }

        function squareSwap(){

        }

    }


    //Objeto da board
    board;
}

function randomIntFromInterval(min, max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
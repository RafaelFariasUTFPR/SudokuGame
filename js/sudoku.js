import { Solver } from "./solver.js";
import {Game} from "./game.js"



let game1 = new Game();


/*
    Cell methods

    game1.board.cellArr[0].hideDigit();
    game1.board.cellArr[0].showDigit();
    game1.board.cellArr[0].togglePencilDigit();
    game1.board.cellArr[0].setValue();
    game1.board.cellArr[0].setPermanent();

*/

//game1.testValue();




//Recebendo o input
window.onkeydown = input =>{
    game1.input(input.key);
}

game1.loop();

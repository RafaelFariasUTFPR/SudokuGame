import { Solver } from "./solver.js";
import {Game} from "./game.js"



let game1 = new Game();


/*
    Cell methods

    game1.board.cellArr[0].hideDigit();
    game1.board.cellArr[0].showDigit();
    game1.board.cellArr[0].setValue();
    game1.board.cellArr[0].setPermanent();

*/



game1.testValue();
game1.board.cellArr[0].setPermanent(true);
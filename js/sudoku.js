import { Solver } from "./solver.js";
import { Generator } from "./generator.js";
import { Game } from "./game.js"
import { Board } from "./board.js";
import { Canvas } from "./canvas.js";



let game1 = new Game();
let generator = new Generator(game1.board);


let solvedBoard = new Board(new Canvas, false);
solvedBoard.cellArr[1].setValue(5); 
solvedBoard.cellArr[3].setValue(8); 
solvedBoard.cellArr[5].setValue(2); 
solvedBoard.cellArr[6].setValue(6); 
solvedBoard.cellArr[9].setValue(3); 
solvedBoard.cellArr[12].setValue(7); 
solvedBoard.cellArr[15].setValue(8); 
solvedBoard.cellArr[16].setValue(1); 
solvedBoard.cellArr[18].setValue(2); 
solvedBoard.cellArr[19].setValue(8); 
solvedBoard.cellArr[21].setValue(1); 
solvedBoard.cellArr[26].setValue(7); 
solvedBoard.cellArr[30].setValue(3); 
solvedBoard.cellArr[34].setValue(6); 
solvedBoard.cellArr[39].setValue(5); 
solvedBoard.cellArr[40].setValue(6);
solvedBoard.cellArr[44].setValue(3);
solvedBoard.cellArr[45].setValue(7); 
solvedBoard.cellArr[53].setValue(1); 
solvedBoard.cellArr[56].setValue(9); 
solvedBoard.cellArr[60].setValue(7); 
solvedBoard.cellArr[61].setValue(2); 
solvedBoard.cellArr[62].setValue(8); 
solvedBoard.cellArr[63].setValue(8); 
solvedBoard.cellArr[64].setValue(3); 
solvedBoard.cellArr[65].setValue(1); 
solvedBoard.cellArr[70].setValue(4); 
solvedBoard.cellArr[75].setValue(9); 
solvedBoard.cellArr[77].setValue(4); 
solvedBoard.cellArr[79].setValue(3); 







game1.setBoard(solvedBoard);

generator.dumbGenerator(solvedBoard);


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

//Iniciando no dark mode
document.documentElement.setAttribute('data-theme', 'dark');


document.getElementById("theme-btn").onclick =() =>{
    let dataTheme = document.documentElement.getAttribute("data-theme");
    if(dataTheme == "dark"){
        document.documentElement.setAttribute("data-theme", "light");
        return;
    }
    document.documentElement.setAttribute("data-theme", "dark");
};


game1.loop();


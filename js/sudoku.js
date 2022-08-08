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

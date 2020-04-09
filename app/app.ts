import Player from './Player'
import { Game } from './Game'
import * as Helpers from './utility'



let newGame: Game;
//add click handler to the start game button
const startHandler = () => {
    const player: Player = new Player(); // value provided by the user
    player.name = Helpers.getValue('playername');
    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    //create new game 
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
}
document.getElementById('startGame')!.addEventListener("click", startHandler);

//add click handler to calculate score button
document.getElementById('calculate')!.addEventListener("click", () => {
    newGame.calculateScore();
})
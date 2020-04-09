/// <reference path="Player.ts" />
/// <reference path="Game.ts" />
/// <reference path="utility.ts" />


let newGame: Game;
//add click handler to the start game button
const startHandler = () => {
    const player: Player = new Player(); // value provided by the user
    player.name = Utility.getInputValue('playername');// call func directly on the utility class without firstly creating new instance of the class

    //retrive the other data from the other input
    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    //create new game 
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
}
document.getElementById('startGame')!.addEventListener("click", startHandler);

//add click handler to calculate score button
document.getElementById('calculate')!.addEventListener("click", () => {
    newGame.calculateScore();
})
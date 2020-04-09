/// <reference path="./Player.ts" />
// import Player from "./Player";
let welcomeMsg: string = "Welcome to MultiMath! Starting new game...";

function startGame() {
    const player: string | undefined = getInputValue('playername');
    logPlayer(player);
    // const messageElement = document.getElementById("messages");
    // messageElement!.innerText = welcomeMsg;
    postScores(100, player);
    postScores(-5, player);
}

function logPlayer(name: string = "MultiMath Player"): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    if (inputElement.value === '') return undefined;
    return inputElement.value;
}

// const logMessage = (message: string): void => console.log(message); //TS can infer the void type
const logMessage = (message: string) => console.log(message);
const logError = (err: string) => console.error(err);

function postScores(score: number, playerName: string = "MultiMath Player"): void {
    let logger: (value: string) => void;
    if (score < 0) logger = logError;
    logger = logMessage;
    const scoreElement: HTMLElement = <HTMLElement>document.getElementById("postedScores");
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);

const firstPlayer: Player = new Player();
firstPlayer.name = "Cody";
console.log(firstPlayer.formatName())


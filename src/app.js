"use strict";
/// <reference path="./Player.ts" />
// import Player from "./Player";
let welcomeMsg = "Welcome to MultiMath! Starting new game...";
function startGame() {
    const player = getInputValue('playername');
    logPlayer(player);
    // const messageElement = document.getElementById("messages");
    // messageElement!.innerText = welcomeMsg;
    postScores(100, player);
    postScores(-5, player);
}
function logPlayer(name = "MultiMath Player") {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    if (inputElement.value === '')
        return undefined;
    return inputElement.value;
}
// const logMessage = (message: string): void => console.log(message); //TS can infer the void type
const logMessage = (message) => console.log(message);
const logError = (err) => console.error(err);
function postScores(score, playerName = "MultiMath Player") {
    let logger;
    if (score < 0)
        logger = logError;
    logger = logMessage;
    const scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}
document.getElementById("startGame").addEventListener("click", startGame);
const firstPlayer = new Player();
firstPlayer.name = "Cody";
console.log(firstPlayer.formatName());

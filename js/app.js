var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toLocaleUpperCase();
    };
    return Player;
}());
var welcomeMsg = "Welcome to MultiMath! Starting new game...";
function startGame() {
    var player = getInputValue('playername');
    logPlayer(player);
    postScores(100, player);
    postScores(-5, player);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New game starting for player: " + name);
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '')
        return undefined;
    return inputElement.value;
}
var logMessage = function (message) { return console.log(message); };
var logError = function (err) { return console.error(err); };
function postScores(score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var logger;
    if (score < 0)
        logger = logError;
    logger = logMessage;
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
document.getElementById("startGame").addEventListener("click", startGame);
var firstPlayer = new Player();
firstPlayer.name = "Cody";
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var Game_1 = require("./Game");
var Helpers = require("./utility");
var newGame;
var startHandler = function () {
    var player = new Player_1.default();
    player.name = Helpers.getValue('playername');
    var problemCount = Number(Helpers.getValue('problemCount'));
    var factor = Number(Helpers.getValue('factor'));
    newGame = new Game_1.Game(player, problemCount, factor);
    newGame.displayGame();
};
document.getElementById('startGame').addEventListener("click", startHandler);
document.getElementById('calculate').addEventListener("click", function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map
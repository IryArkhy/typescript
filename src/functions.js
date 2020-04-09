"use strict";
function funFunc(score, message) {
    return 'I am a string ';
}
//Default-Initialized Parameters:
function defaultFunc(greeting = "Good morning!") {
    console.log(greeting);
}
defaultFunc(); //"Good morning!"
defaultFunc("Hello world!"); //"Hello world!"
let scores = [70, 125, 85, 110];
let highScores;
highScores = scores.filter((elem, indx, arr) => elem > 100 ? true : false);

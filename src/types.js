"use strict";
let y = "I will also remain a string type forever";
//Union types
let unionVar;
unionVar = 1234567;
unionVar = "1234567";
// strictNullChecks= true
let basicString;
basicString = null;
// basicString = undefined; //error
//Type assertion
let value = 5;
let fixedString = value.toFixed(4);
//or
let altFixedString = value.toFixed(4);
function returnSomeValue() {
    return 1000;
}
const receivedValue = returnSomeValue();
// controll flow based analysis
// function analisys() {
//     var myExample: HTMLElement | string;
//     if (typeof myExample === 'string') {
//         return myExample; //type just string
//     }
//     myExample = document.getElementById("messages")!;
// }

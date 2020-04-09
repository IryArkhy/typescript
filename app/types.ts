let y = "I will also remain a string type forever";

//Union types
let unionVar: string | number;
unionVar = 1234567;
unionVar = "1234567";

// strictNullChecks= true

let basicString: string | null;
basicString = null;
// basicString = undefined; //error

//Type assertion

let value: any = 5;
let fixedString: string = (<number>value).toFixed(4);
//or
let altFixedString: string = (value as number).toFixed(4);

function returnSomeValue() {
    return 1000;
}

const receivedValue: number = returnSomeValue();

// controll flow based analysis

// function analisys() {
//     var myExample: HTMLElement | string;
//     if (typeof myExample === 'string') {
//         return myExample; //type just string
//     }
//     myExample = document.getElementById("messages")!;
// }
function funFunc(score: number, message?: string): string {
    return 'I am a string '
}

//Default-Initialized Parameters:
function defaultFunc(greeting: string = "Good morning!"): void {
    console.log(greeting);
}
defaultFunc(); //"Good morning!"
defaultFunc("Hello world!")//"Hello world!"

let scores: number[] = [70, 125, 85, 110]
let highScores: number[];

highScores = scores.filter((elem, indx, arr) => elem > 100 ? true : false);
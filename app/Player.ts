/// <reference path="./Person.ts" />


class Player implements Person {
    name: string;
    age?: number;
    highScore: number;

    formatName() {
        return this.name.toLocaleUpperCase();
    }
}

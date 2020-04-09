"use strict";
class Developer {
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle.toLocaleUpperCase();
    }
    documentRequirements(requirements) {
        console.log(requirements);
    }
}
class WebDeveloper extends Developer {
    static writeFavProtocols() {
        console.log("HTTPS, of course!");
    }
    writeTS() {
        console.log('He writes TS!');
    }
    logJobDescription() {
        console.log(WebDeveloper.jobDescription);
    }
}
WebDeveloper.jobDescription = "Build cool apps!";
WebDeveloper.writeFavProtocols();
let webdev = new WebDeveloper;
webdev.department = 'Software Engineering';
webdev.favouriteEditor = "WebStorm";
class Engineer {
    logID() {
        return `${this.name}_${this.title}`;
    }
}

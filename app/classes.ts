class Developer {
    department: string;
    private _title: string;
    get title(): string {
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle.toLocaleUpperCase();
    }
    documentRequirements(requirements: string): void {
        console.log(requirements);
    }
}

class WebDeveloper extends Developer {
    favouriteEditor: string;
    static jobDescription: string = "Build cool apps!";
    static writeFavProtocols() {
        console.log("HTTPS, of course!")
    }
    writeTS(): void {
        console.log('He writes TS!')
    }
    logJobDescription(): void {
        console.log(WebDeveloper.jobDescription)
    }
}
WebDeveloper.writeFavProtocols();
let webdev: WebDeveloper = new WebDeveloper;
webdev.department = 'Software Engineering';
webdev.favouriteEditor = "WebStorm";

//Implementing an Interface

interface Employee {
    name: string;
    title: string;
    logID: () => string;
}

class Engineer implements Employee {
    name: string;
    title: string;
    logID() {
        return `${this.name}_${this.title}`
    }

}
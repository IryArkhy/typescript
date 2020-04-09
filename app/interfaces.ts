interface Employee1 {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string;
    numberOfEmployees: number;
    scheduleMeeting: (topic: string) => void;
}
//Structural type system
const developer = {
    name: "Michael",
    title: "Senoir TypeScript Developer",
    editor: "Visual Studio Code"
}

let newEmployee: Employee1 = developer; // "good"
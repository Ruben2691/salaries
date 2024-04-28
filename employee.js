// const Manager = require("./manager");

class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        // this is a ternary that checks if there was a manager passed into the constructor
        // if it wasn't it will equal null kind of like a regular ternary the right side is false
        this.manager = manager ?? null;
        if(this.manager){
            this.manager.addEmployee(this)
        }
    }



}


const leo = new Employee(
    "Leonardo",
    90000,
    "Ninja",
)

// console.log(leo);

module.exports = Employee;

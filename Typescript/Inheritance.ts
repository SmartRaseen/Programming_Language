Inheritance
***********

Just like object-oriented languages such as Java and C#, TypeScript classes can be extended to create new classes with inheritance, using the keyword extends.

Example: Inheritance Copy
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let emp = new Employee(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100
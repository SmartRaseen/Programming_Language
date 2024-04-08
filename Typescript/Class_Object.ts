TypeScript - Classes
********************

In object-oriented programming languages like Java and C#, 
classes are the fundamental entities used to create reusable components.


A class can include the following:

Constructor
Properties
Methods


Example: Class

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}

---------------------------------------------------------------------

Constructor
***********

The constructor is a special type of method which is called when creating an object. 
In TypeScript, the constructor method is always defined with the name "constructor".


Example: Constructor

class Employee {

    empCode: number;
    empName: string;
    
    constructor(empcode: number, name: string ) {
        this.empCode = empcode;
        this.name = name;
    }
}

---------------------------------------------------------------------

Creating an Object of Class
***************************

An object of the class can be created using the new keyword.

Example: Create an Object Copy
class Employee {
    empCode: number;
    empName: string;
}

let emp = new Employee();

------------------------------------------------------

class Employee {

    empCode: number;
    empName: string;
    
    constructor(empcode: number, name: string ) {
            this.empCode = empcode;
            this.name = name;
    }
}

let emp = new Employee(100,"Steve");

---------------------------------------------------------------------

Class Implements Interface
**************************

A class can implement single or multiple interfaces.

Example: Implement Interface Copy
interface IPerson {
    name: string;
    display():void;
}

interface IEmployee {
    empCode: number;
}

class Employee implements IPerson, IEmployee {
    empCode: number;
    name: string;
    
    constructor(empcode: number, name:string) {
        this.empCode = empcode;
        this.name = name;
    }
    
    display(): void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let per:IPerson = new Employee(100, "Bill");
per.display(); // Name = Bill, Employee Code = 100

let emp:IEmployee = new Employee(100, "Bill");
emp.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'

-------------------------------------------------------------------------------------------------------

Interface extends Class
***********************

An interface can also extend a class to represent a type.

Example: Interface Extends Class Copy
class Person {
    name: string;
}

interface IEmployee extends Person { 
    empCode: number;
}

let emp: IEmployee = { empCode  : 1, name:"James Bond" }


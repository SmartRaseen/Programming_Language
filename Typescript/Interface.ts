TypeScript - Interfaces
***********************

Interface is a structure that defines the contract in your application. 
It defines the syntax for classes to follow. 

Classes that are derived from an interface must follow the structure provided by their interface.


An interface is defined with the keyword interface and it can include properties and method declarations
using a function or an arrow function.


interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string; 
}


Example: Interface as Type
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // OK

let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 

-------------------------------------------------------------------------------------------------------------

// Define an interface for a person
interface Person {
    name: string;
    age: number;
    greet: () => void; // Function type definition
}

// Implement the Person interface
let person: Person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Call the greet method
person.greet(); // Output: Hello, my name is John and I am 30 years old.

----------------------------------------------------------------------------------------------------------------------------------

Interface as Function Type
**************************

TypeScript interface is also used to define a type of a function. This ensures the function signature.

Example: Function Type Copy
interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}
    
let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 

-------------------------------------------------------------------------------------------

// Define an interface for a function type
interface AddFunction {
    (x: number, y: number): number; // Function type definition
}

// Implement a function that matches the AddFunction interface
let add: AddFunction = function(x: number, y: number): number {
    return x + y;
};

// Call the add function
let result = add(3, 5);
console.log("Result:", result); // Output: Result: 8

----------------------------------------------------------------------------------------------------------------------------------

Interface for Array Type
************************

An interface can also define the type of an array where you can define the type of index as well as values.

interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
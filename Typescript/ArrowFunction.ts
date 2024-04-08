TypeScript - Arrow Functions
****************************

Fat arrow notations are used for anonymous functions i.e for function expressions. 
They are also called lambda functions in other languages.

Example: Fat Arrow Function

let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30

--------------------------------------------------------------------

The following is an arrow function without parameters.

Example: Parameterless Arrow Function Copy
let Print = () => console.log("Hello TypeScript");

Print(); //Output: Hello TypeScript

--------------------------------------------------------------------

Furthermore, if the function body consists of only one statement then no need for the curly brackets and the return keyword, as shown below.

let sum = (x: number, y: number) => x + y;

sum(3, 4); //returns 7

--------------------------------------------------------------------

A class can include an arrow function as a property, as shown below.

Example: Arrow Function in Class

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(this.empCode +' ' + this.empName)
}
let emp = new Employee(1, 'Ram');
emp.display();

--------------------------------------------------------------------
TypeScript - Tuples
*******************

TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.

Consider the following example of number, string and tuple type variables.

Example: Tuple vs Other Data Types
var empId: number = 1;
var empName: string = "Steve";        

// Tuple type variable 
var employee: [number, string] = [1, "Steve"];

---------------------------------------------------------------------------------------

A tuple type variable can include multiple data types as shown below.

Example: Tuple
var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable


---------------------------------------------------------------------------------------

You can declare an array of tuple also.

Example: Tuple Array Copy
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

---------------------------------------------------------------------------------------

Accessing Tuple Elements
************************

We can access tuple elements using index, the same way as an array. An index starts from zero.

Example: Accessing Tuple Copy
var employee: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"

---------------------------------------------------------------------------------------

Add Elements into Tuple
***********************

You can add new elements to a tuple using the push() method.

Example: push()
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill"); 
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

---------------------------------------------------------------------------------------

Program:

Extract all the data using loop

let persons: [number, string, boolean][] = [
    [1, "abdullah", true],
    [26, "Raseen", true]
];

console.log("Original data:");
for (const person of persons) {
    console.log(` Id: ${person[0]}\n Name: ${person[1]}\n Pass: ${person[2]}`);
}

console.log("Add new data");

persons.push([22, "sumaya", true]);

console.log("Updated data:");
for (const person of persons) {
    console.log(` Id: ${person[0]}\n Name: ${person[1]}\n Pass: ${person[2]}`);
}

---------------------------------------------------------------------------------------

Program: 2

var person: [number, string, boolean] = [1, "abdullah", true];

console.log(` Id: ${person[0]}\n Name: ${person[1]}\n Pass: ${person[2]}`);

console.log("Modified data:");

person[0] = 26;
person[1] = "Raseen";
person[2] = true;

console.log(` Id: ${person[0]}\n Name: ${person[1]}\n Pass: ${person[2]}`);
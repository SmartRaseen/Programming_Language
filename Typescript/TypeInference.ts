
TypeScript Type Inference:
**************************

TypeScript's type inference allows the compiler to deduce the types of variables and expressions 
based on their usage and context, without the need for explicit type annotations. 

Here's an example demonstrating type inference:

// Variable with type inference
let x = 10; // Type of x is inferred as number

// Function with type inference
function add(a: number, b: number) {
    return a + b; // Type of return value is inferred as number
}

// Array with type inference
let numbers = [1, 2, 3]; // Type of numbers is inferred as number[]

// Object with type inference
let person = {
    name: "John", // Type of name is inferred as string
    age: 30       // Type of age is inferred as number
};

// Function parameter type inference
function greet(name) {
    console.log(`Hello, ${name}!`); // Type of name parameter is inferred as any
}

// Type inference in conditional expressions
let isAdmin = true; // Type of isAdmin is inferred as boolean
let userType = isAdmin ? "Admin" : "User"; // Type of userType is inferred as string

// Type inference in template literals
let message = `Welcome, ${person.name}!`; // Type of message is inferred as string

// Type inference in array methods
let doubledNumbers = numbers.map(num => num * 2); // Type of doubledNumbers is inferred as number[]

// Type inference with generics
let values = [1, "two", true]; // Type of values is inferred as (string | number | boolean)[]

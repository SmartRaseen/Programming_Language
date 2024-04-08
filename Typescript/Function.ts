


Functions ensure that the program is maintainable and reusable, and organized into readable blocks. 
While TypeScript provides the concept of classes and modules, functions still are an integral part of the language.

In TypeScript, functions can be of two types: named and anonymous.


Named Functions

A named function is one where you declare and call a function by its given name.

Example: Named Function
function display() {
    console.log("Hello TypeScript!");
}

display(); //Output: Hello TypeScript 

------------------------------------------------------------------------------------

Functions can also include parameter types and return type.

Example: Function with Parameter and Return Types Copy
function Sum(x: number, y: number) : number {
    return x + y;
}

Sum(2,3); // returns 5

----------------------------------------------------------------------------------------------------------------------------------

Anonymous Function
******************

An anonymous function is one which is defined as an expression. This expression is stored in a variable. So, the function itself does not have a name. These functions are invoked using the variable name that the function is stored in.

Example: Anonymous Function
let greeting = function() {
    console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript! 

------------------------------------------------------------------------------------

An anonymous function can also include parameter types and return type.

Example: Function with Paramter and Return Types
let Sum = function(x: number, y: number) : number
{
    return x + y;
}

Sum(2,3); // returns 5

----------------------------------------------------------------------------------------------------------------------------------

Function Parameters
*******************

Parameters are values or arguments passed to a function.

Example: Function Parameters

function Greet(greeting: string, name: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

----------------------------------------------------------------------------------------------------------------------------------

Optional Parameters
*******************

TypeScript has an optional parameter functionality. 
The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.

Example: Optional Parameter

function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

----------------------------------------------------------------------------------------------------------------------------------

Default Parameters
******************

TypeScript provides the option to add default values to parameters. 
So, if the user does not provide a value to an argument, TypeScript will initialize the parameter with the default value.

Example: Default Parameter

function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

Greet('Steve');//OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"

----------------------------------------------------------------------------------------------------------------------------------
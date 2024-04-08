TypeScript - Union
******************

TypeScript allows us to use more than one data type for a variable or a function parameter. 
This is called union type.

Consider the following example of union type.

Example: Union
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error

--------------------------------------------------------------------------------------------------------------------------------

The function parameter can also be of union type, as shown below.

Example: Function Parameter as Union Type Copy
function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number

--------------------------------------------------------------------------------------------------------------------------------


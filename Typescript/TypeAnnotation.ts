TypeScript - Type Annotations

TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. 
We can specify the type using :Type after the name of the variable, parameter or property. 
There can be a space after the colon.


The following example declares variables with different data types:

Example: Type Annotation in TypeScript Copy
var age: number = 25; // number variable
var name: string = "Abdullah";// string variable
var isUpdated: boolean = true;// Boolean variable


The following example demonstrates the type annotation of paramters.

// Example: Type Annotation of Parameters Copy
function display(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}

---------------------------------------------------------------------------------------------------

var employee: {
    id: number,
    empname: string,
    isUpdated: boolean
}

employee = {
    id: 26,
    empname: "Abdullah",
    isUpdated: true
}

display(employee.id, employee.empname, employee.isUpdated);


function display(id: number, stdname: string, isUpdated: boolean)
{
    console.log(`Id = ${id}, name = ${stdname}, isUpdated = ${isUpdated}`);
}
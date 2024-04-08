TypeScript Data Type - Void
***************************

Similar to languages like Java, void is used where there is no data. 
For example, if a function does not return any value then you can specify void as return type.

Program:
********

function greeting(name: string)
{
    console.log(`Hello ${name}`);
}

greeting("Raseen");


function hello()
{
    console.log("Hello World");
}

hello();
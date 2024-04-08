
Type assertion in TypeScript is a way to tell the compiler about the intended type of a value 
when the compiler is unable to infer it automatically. 

It's like type casting in other languages, but it doesn't actually change the type of the variable at runtime; 
it's purely a compile-time feature for the TypeScript compiler. 

Here's an example:

// Example 1: Using angle bracket syntax
let someValue: any = "hello world";
let strLength1: number = (<string>someValue).length;

// Example 2: Using 'as' syntax
let strLength2: number = (someValue as string).length;

console.log(strLength1); // Output: 11
console.log(strLength2); // Output: 11

TypeScript - switch
*******************

The switch statement is used to check for multiple values and executes sets of statements for each of those values. 
A switch statement has one block of code corresponding to each value and can have any number of such blocks. 
When the match to a value is found, the corresponding block of code is executed.


Consider the following example.

Example: switch
let day : number = 4;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
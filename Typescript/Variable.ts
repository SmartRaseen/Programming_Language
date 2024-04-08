TypeScript - Variable
*********************

TypeScript follows the same rules as JavaScript for variable declarations. 
Variables can be declared using: var, let, and const.


let:

Example: Variable Declaration using let Copy

let employeeName = "John";
// or 
let employeeName:string = "John";


The let declarations follow the same syntax as var declarations. 
Unlike variables declared with var, variables declared with let have a block-scope. 
This means that the scope of let variables is limited to their containing block, 
e.g. function, if else block or loop block. Consider the following example.


Example: let Variables Scope Copy

let num1:number = 1; 
    
function letDeclaration() { 
    let num2:number = 2; 

    if (num2 > num1) { 
        let num3: number = 3;
        num3++; 
    } 

    while(num1 < num2) { 
        let num4: number = 4;
        num1++;
    }

    console.log(num1); //OK
    console.log(num2); //OK 
    console.log(num3); //Compiler Error: Cannot find name 'num3'
    console.log(num4); //Compiler Error: Cannot find name 'num4'
}

letDeclaration();

----------------------------------------------------------------------

var num1:number = 1; 
    
function varDeclaration() { 
    var num2:number = 2; 

    if (num2 > num1) { 
        var num3: number = 3;
        num3++; 
    } 

    while(num1 < num2) { 
        var num4: number = 4;
        num1++;
    }

    console.log(num1); //2
    console.log(num2); //2 
    console.log(num3); //4
    console.log(num4); //4
}

varDeclaration();
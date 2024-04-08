TypeScript - while Loop
***********************

The while loop is another type of loop that checks for a specified condition before beginning to execute the block of statements. 
The loop runs until the condition value is met.

The condition expression checks for a specified condition before running the block of code.

Example: while loop
let i: number = 2;

while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}


--------------------------------------------------------------------------------------------------------------------------------

do..while loop
**************

The do..while loop is similar to the while loop, except that the condition is given at the end of the loop. 
The do..while loop runs the block of code at least once before checking for the specified condition. 

For the rest of the iterations, it runs the block of code only if the specified condition is met.

Example: do..while loop
let i: number = 2;
do {
    console.log("Block statement execution no." + i )
    i++;
} while ( i < 4)
TypeScript - if else
********************

An if statement can include one or more expressions which return boolean. 
If the boolean expression evaluates to true, a set of statements is then executed.

Example:
if (true) 
{
    console.log('This will always executed.');
}

if (false) {
    console.log('This will never executed.');
}

----------------------------------------------------------------------------------------------------------------------

The following example includes multiple boolean expressions in the if condition.

Example: if
***********
let x: number = 10, y = 20;

if (x < y) 
{
    console.log('x is less than y');
}

----------------------------------------------------------------------------------------------------------------------

if else Condition
*****************

An if else condition includes two blocks - if block and an else block. 
If the if condition evaluates to true, then the if block is executed. Otherwies, the else block is executed.

Example: if else Copy
let let x: number = 10, y = 20;

if (x > y) 
{
    console.log('x is greater than y.');
} 
else
{
    console.log('x is less than or equal to y.'); //This will be executed
}

----------------------------------------------------------------------------------------------------------------------

else if Condition
*****************

The else if statement can be used after the if statement.

Example: else if
let x: number = 10, y = 20;

if (x > y) 
{
    console.log('x is greater than y.');
} 
else if (x < y)
{
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) 
{
    console.log('x is equal to y');
}

----------------------------------------------------------------------------------------------------------------------

Ternary operator
****************

A ternary operator is denoted by '?' and is used as a short cut for an if..else statement.
It checks for a boolean condition and executes one of the two statements, depending on the result of the boolean condition.

let x: number = 10, y = 20;

x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')

----------------------------------------------------------------------------------------------------------------------
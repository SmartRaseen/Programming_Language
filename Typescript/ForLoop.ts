TypeScript - for Loops
**********************

TypeScript supports the following for loops:

1. for loop
2. for..of loop
3. for..in loop


for Loop
********

The for loop is used to execute a block of code a given number of times, which is specified by a condition.

Example: for Loop
for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}

-----------------------------------------------------------------------------------------------------------------

for...of Loop
*************

TypeScript includes the for...of loop to iterate and access elements of an array, list, or tuple collection. 


The for...of loop returns elements from a collection

Example: for..of Loop
let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

-----------------------------------------------------------------------

The for...of loop can also return a character from a string value.

Example: for..of Loop Copy
let str = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}


-----------------------------------------------------------------------------------------------------------------

for...in Loop
Another form of the for loop is for...in. This can be used with an array, list, or tuple. The for...in loop iterates through a list or collection and returns an index on each iteration.

Example: for..in Loop Copy
let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

-----------------------------------------------------------------------------------------------------------------
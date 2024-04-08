TypeScript - Arrays
*******************

An array is a special type of data type which can store multiple values of different data types 
sequentially using a special syntax.

TypeScript supports arrays, similar to JavaScript. There are two ways to declare an array:

1. Using square brackets. This method is similar to how you would declare arrays in JavaScript.

let fruits: string[] = ['Apple', 'Orange', 'Banana'];

2. Using a generic array type, Array<elementType>.

let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

Both methods produce the same output.

----------------------------------------------------------------------

Example: Array Declaration and Initialization
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana']; 

let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; 

----------------------------------------------------------------------

Example: Multi Type Array Copy
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 

----------------------------------------------------------------------

Example: Access Array Elements Copy
let fruits: string[] = ['Apple', 'Orange', 'Banana']; 
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined

----------------------------------------------------------------------

Example: Access Array Elements using Loop Copy
let fruits: string[] = ['Apple', 'Orange', 'Banana']; 

for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}

for(var i = 0; i < fruits.length; i++)
{ 
    console.log(fruits[i]); // output: Apple Orange Banana
}

var fruitList : Array<string|number> = [1, "Apple", 2, "Grape", 3, "Banana", 4, "Mango"];

for(var fruit of fruitList)
{
    console.log(fruit);
}

for(var fruitl in fruitList)
{
    console.log(fruitList[fruitl]);
}

----------------------------------------------------------------------

TypeScript Array Methods
The following table lists all Array methods which can be used for different purposes.

----------------------------------------------------------------------------------------------------------------
Method				|	Description
----------------------------------------------------------------------------------------------------------------
pop()				|	Removes the last element of the array and return that element
push()				|	Adds new elements to the array and returns the new array length
sort()				|	Sorts all the elements of the array
concat()			|	Joins two arrays and returns the combined result
indexOf()			|	Returns the index of the first match of a value in the array (-1 if not found)
copyWithin()		|	Copies a sequence of elements within the array
fill()				|	Fills the array with a static value from the provided start index to the end index
shift()				|	Removes and returns the first element of the array
splice()			|	Adds or removes elements from the array
unshift()			|	Adds one or more elements to the beginning of the array
includes()			|	Checks whether the array contains a certain element
join()				|	Joins all elements of the array into a string
lastIndexOf()		|	Returns the last index of an element in the array
slice()				|	Extracts a section of the array and returns the new array
toString()			|	Returns a string representation of the array
toLocaleString()	|	Returns a localized string representing the array
----------------------------------------------------------------------------------------------------------------


The following example demonstrates some of the array methods.


let arr: number[] = [1, 2, 3, 4, 5];

// pop()
let poppedElement: number | undefined = arr.pop();
console.log("Popped element:", poppedElement); // Output: Popped element: 5

// push()
let newLength: number = arr.push(6);
console.log("New array:", arr); // Output: New array: [1, 2, 3, 4, 6]
console.log("New array length:", newLength); // Output: New array length: 5

// sort()
arr.sort();
console.log("Sorted array:", arr); // Output: Sorted array: [1, 2, 3, 4, 6]

// concat()
let newArr: number[] = [7, 8, 9];
let combinedArray: number[] = arr.concat(newArr);
console.log("Combined array:", combinedArray); // Output: Combined array: [1, 2, 3, 4, 6, 7, 8, 9]

// indexOf()
let index: number = arr.indexOf(3);
console.log("Index of 3:", index); // Output: Index of 3: 2

// copyWithin()
arr.copyWithin(1, 0, 2);
console.log("Copy within array:", arr); // Output: Copy within array: [1, 1, 2, 4, 6]

// fill()
arr.fill(0, 2, 4);
console.log("Fill array:", arr); // Output: Fill array: [1, 1, 0, 0, 6]

// shift()
let shiftedElement: number | undefined = arr.shift();
console.log("Shifted element:", shiftedElement); // Output: Shifted element: 1

// splice()
let splicedArray: number[] = arr.splice(1, 2, 3, 4);
console.log("Spliced array:", arr); // Output: Spliced array: [1, 3, 4, 0]

// unshift()
let unshiftLength: number = arr.unshift(2);
console.log("Unshifted array:", arr); // Output: Unshifted array: [2, 1, 3, 4, 0]
console.log("New array length after unshift:", unshiftLength); // Output: New array length after unshift: 5

// includes()
let includesResult: boolean = arr.includes(3);
console.log("Includes 3:", includesResult); // Output: Includes 3: true

// join()
let joinedString: string = arr.join("-");
console.log("Joined array:", joinedString); // Output: Joined array: 2-1-3-4-0

// lastIndexOf()
let lastIndex: number = arr.lastIndexOf(3);
console.log("Last index of 3:", lastIndex); // Output: Last index of 3: 2

// slice()
let slicedArray: number[] = arr.slice(1, 3);
console.log("Sliced array:", slicedArray); // Output: Sliced array: [1, 3]

// toString()
let arrayString: string = arr.toString();
console.log("Array as string:", arrayString); // Output: Array as string: 2,1,3,4,0

// toLocaleString()
let localizedString: string = arr.toLocaleString();
console.log("Localized string:", localizedString); // Output will depend on your locale settings

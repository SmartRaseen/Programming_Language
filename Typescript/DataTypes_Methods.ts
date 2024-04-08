TypeScript Data Type - Number
*****************************

Example: TypeScript Number Type Variables Copy

let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

----------------------------------------------------------------------------

Number Methods:

-------------------------------------------------------------------------------------------------------------------------
Method				|	Description																						|
-------------------------------------------------------------------------------------------------------------------------
toExponential()		|	Returns the exponential notation in string format.												|
toFixed()			|	Returns the fixed-point notation in string format.												|
toLocaleString()	|	Converts the number into a local specific representation of the number.							|
toPrecision()		|	Returns the string representation in exponential or fixed-point to the specified precision.		|
toString()			|	Returns the string representation of the number in the specified base.							|
valueOf()			|	Returns the primitive value of the number.														|
-------------------------------------------------------------------------------------------------------------------------

toExponential()
The toExponential method returns the exponential notation of a number in string format, based on the specified fraction digits.



Example: toExponential()
let myNumber: number = 123456;

myNumber.toExponential(); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5



toFixed()
The toFixed method returns the fixed-point notation of a number in string format.

Example: toFixed()
let myNumber: number = 10.8788;

myNumber.toFixed(); // returns 11
myNumber.toFixed(1); //returns 10.9
myNumber.toFixed(2); //returns 10.88
myNumber.toFixed(3); //returns 10.879
myNumber.toFixed(4); //returns 10.8788



toLocaleString()
The toLocaleString method converts the number into a local specific representation of the number.

Example: toLocaleString()
let myNumber: number = 10667.987;

myNumber.toLocaleString(); // returns 10,667.987 - US English
myNumber.toLocaleString('de-DE'); // returns 10.667,987 - German
myNumber.toLocaleString('ar-EG'); // returns 10667.987 in Arebic



toPrecision()
The toPrecision method returns the string representation in exponential or fixed-point to the specified precision.

Example: toPrecision() Copy
let myNumber: number = 10.5679;

myNumber.toPrecision(1); // returns 1e+1
myNumber.toPrecision(2); // returns 11
myNumber.toPrecision(3); // returns 10.6
myNumber.toPrecision(4); // returns 10.57



toString()
The toString method returns a string representation of the number in the specified base.


let myNumber: number = 123;
myNumber.toString(); // returns '123'
myNumber.toString(2); // returns '1111011'
myNumber.toString(4); // returns '1323'
myNumber.toString(8); // returns '173'
myNumber.toString(16); // returns '7b'
myNumber.toString(36); // returns '3f'


valueOf()
The valueOf method returns the primitive value of the number.


Example: valueOf() Copy
let num1 = new Number(123);
console.log(num1) //Output: a number object with value 123
console.log(num1.valueOf()) //Output: 123
console.log(typeof num1) //Output: object

let num2 = num1.valueOf() 
console.log(num2) //Output: 123
console.log(typeof num2) //Output: number

--------------------------------------------------------------------------------------------------------------------------------

TypeScript Data Type - String
*****************************

Example: Template String Pre-ES6 Copy

let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 


---------------------------------------------------------------------------------------------------------------------------------
Method				|	Description
--------------------|-------------------------------------------------------------------------------------------------------------
charAt()			|	Returns the character at the given index
concat()			|	Returns a combination of the two or more specified strings
indexOf()			|	Returns an index of first occurrence of the specified substring from a string (-1 if not found)
replace()			|	Replaces the matched substring with a new substring
split()				|	Splits the string into substrings and returns an array
toUpperCase()		|	Converts all the characters of the string into upper case
toLowerCase()		|	Converts all the characters of the string into lower case
charCodeAt()		|	Returns a number that is the UTF-16 code unit value at the given index
codePointAt()		|	Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified index
includes()			|	Checks whether a string includes another string
endsWith()			|	Checks whether a string ends with another string
LastIndexOf()		|	Returns the index of last occurrence of value in the string
localeCompare()		|	Checks whether a string comes before, after or is the same as the given string
match()				|	Matches a regular expression against the given string
normalize()			|	Returns the Unicode Normalization Form of the given string.
padEnd()			|	Pads the end of the current string with the given string
padStart()			|	Pads the beginning of the current string with given string
repeat()			|	Returns a string consisting of the elements of the object repeated in the given times.
search()			|	Searches for a match between a regular expression and a string
slice()				|	Returns a section of a string
startsWith()		|	Checks whether a string starts with another string
substr()			|	Returns a string beginning at the specified location and of the given characters
substring()			|	Returns a string between the two given indexes
toLocaleLowerCase()	|	Returns a lower case string while respecting current locale
toLocaleUpperCase()	|	Returns an upper case string while respecting current locale
trim()				|	Trims the white space from beginning and end of string
trimLeft()			|	Trims the white space from left side of the string
trimRight()			|	Trims the white space from right side of the string
---------------------------------------------------------------------------------------------------------------------------------

charAt()
The charAt() method returns a character at the specified index from a string

Example: charAt() Copy
let str: string = 'Hello TypeScript';
str.charAt(0); // returns 'H'
str.charAt(2); // returns 'l'
"Hello World".charAt(2); returns 'l'

-------------------------------------------------------------------------------

concat()
The concat() method concatenates two or more specified strings.

Example: concat() Copy
let str1: string = 'Hello';
let str2: string = 'TypeScript';
str1.concat(str2); // returns 'HelloTypeScript'
str1.concat(' ', str2); // returns 'Hello TypeScript'
str1.concat(' Mr. ', 'Bond'); // returns 'Hello Mr. Bond'

-------------------------------------------------------------------------------

indexOf()
The indexOf() method returns an index of first occurrence of the specified sub string from a string. 
The index starts from 0. It returns -1 if not found. 
the indexOf() method search is case-sensitive, so 't' and 'T' are different.

Example: indexOf() Copy
let str: string = 'TypeScript';

str.indexOf('T'); // returns 0
str.indexOf('p'); // returns 2
str.indexOf('e'); // returns 3
str.indexOf('T', 1); // returns -1
str.indexOf('t', 1); // returns 9

-------------------------------------------------------------------------------

replace()
The replace() method replaces the matched substring with the specified string. 
The regular expression can also be used for searching.

Example: replace() Copy
let str1: string = 'Hello Javascript';
let str2: string = 'TypeScript';

str1.replace('Java', 'Type'); // returns 'Hello TypeScript'
str1.replace('JavaScript', str2); // returns 'Hello TypeScript'
str1.replace(/Hello/gi, 'Hi'); // returns 'Hi TypeScript'

-------------------------------------------------------------------------------

split()
The split() method splits a string into substrings based on a specified separator character and returns an array of substrings.

Example: split() Copy
let str1: string = 'Apple, Banana, Orange';
let str2: string = ',';

str1.split(str2) // returns [ 'Apple', ' Banana', ' Orange' ]
str1.split(',') // returns [ 'Apple', ' Banana', ' Orange' ]
str1.split(',', 2) // returns [ 'Apple', ' Banana' ]
str1.split(',', 1) // returns [ 'Apple']

-------------------------------------------------------------------------------

toUpperCase()
The toUpperCase() method returns an upper case representation of the string it is called on.

Example: toUpperCase() Copy
let str: string = 'Hello Typescript';
str.toUpperCase(); // returns 'HELLO TYPESCRIPT'
'hello typescript'.toUpperCase(); // returns 'HELLO TYPESCRIPT'
toLowerCase()
The toLowerCase() method returns a lower case representation of the string it is called on.

-------------------------------------------------------------------------------

Example: toLowerCase() Copy
let str: string = 'Hello Typescript';
str.toLowerCase(); // returns hello typescript
'HELLO TYPESCRIPT'.toLowerCase(); // returns hello typescript

-------------------------------------------------------------------------------

TypeScript Data Type - Boolean
Boolean values are supported by both JavaScript and TypeScript and stored as true/false values.

TypeScript Boolean:

let isPresent:boolean = true;
The Any type comes in handy here.

Example: Any
************

let something: any = "Hello World!"; 
something = 23;
something = true;

The above code will compile into the following JavaScript.

var something = "Hello World!";
something = 23;
something = true;
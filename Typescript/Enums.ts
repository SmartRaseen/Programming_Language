TypeScript Data Type - Enum
***************************

Enums or enumerations are a new data type supported in TypeScript. 
Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.


There are three types of enums:
*******************************

1. Numeric enum
2. String enum
3. Heterogeneous enum


Numeric Enum
************

Numeric enums are number-based enums i.e. they store string values as numbers.

Example: Numeric Enum Copy
enum PrintMedia {
  Newspaper,
  Newsletter,
  Magazine,
  Book
}

In the above example, we have an enum named PrintMedia. 
The enum has four values: Newspaper, Newsletter, Magazine, and Book. 
Here, enum values start from zero and increment by 1 for each member. It would be represented as:

Newspaper = 0
Newsletter = 1
Magazine = 2
Book = 3

We also have the option to initialize the first numeric value ourselves. For example, we can write the same enum as:

enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}
The first member, Newspaper, is initialized with the numeric value 1. 
The remaining members will be incremented by 1 from the numeric value of the first value.


enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine

---------------------------------------------------------------------------------------------------------------

String Enum:
************

String enums are similar to numeric enums, except that the enum values are initialized with string values 
rather than numeric values.

Example: String Enum Copy
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE

---------------------------------------------------------------------------------------------------------------

Heterogeneous Enum
******************

Heterogeneous enums are enums that contain both string and numeric values.

Example: Heterogeneous Enum Copy
enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}

---------------------------------------------------------------------------------------------------------------
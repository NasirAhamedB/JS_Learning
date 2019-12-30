// String is a primitive data type in JavaScript. A string is textual content. It must be enclosed in single or double quotation marks

var str1 = "Hello World"

// A string can also be treated like zero index based character array
console.log("<<<< usage index based Char array >>>>>")
console.log(str1[0])
console.log(str1[1])
console.log(str1[2])
console.log(str1[3])
console.log(str1[4])
console.log(str1.length);

console.log("<<<< usage for loop >>>>>")
// Using For loop
for (i=5;i<str1.length;i++)
{
    console.log(str1[i]);
}
console.log("<<<< usage for-of loop >>>>>")
// Using for-of loop
for(var ch of str1)
{
    console.log(ch);
}

// Concatenation
console.log("<<<< usage of String Concatenation >>>>>")
console.log("Hello" + ", " + "this is" + " a string concat");

console.log("<<<< usage of indexOf() >>>>>")
// Finding a String inside Another String
var str = "If the facts don't fit the theory, change the facts."
console.log(str.indexOf("facts"))
console.log(str.lastIndexOf("facts"))

// Both the indexOf(), and the lastIndexOf() methods return -1 if the substring is not found. 
// Both methods also accept an optional integer parameter which specifies the position within the string at which to start the search
console.log(str.indexOf("facts", 20))
console.log(str.lastIndexOf("facts", 20))

// Searching for a Pattern Inside a String
var str = "Color red looks brighter than color blue.";
// Case sensitive search
var pos1 = str.search("color");
console.log(pos1)
 
// Case insensitive search using regexp
var pos2 = str.search(/color/i);
console.log(pos2)

// Extracting a Substring from a String
// slice() method used to extract a part or substring from a string  => str.slice(startIndex, endIndex)
var str = "The quick brown fox jumps over the lazy dog.";
var subStr = str.slice(4, 15);
console.log(subStr)
console.log(str.length)

/*
We can also use the substring() method to extract a section of the given string based on start and end indexes, like str.substring(startIndex, endIndex). 
The substring() method is very similar to the slice() method, except few differences:
(1) If either argument is less than 0 or is NaN, it is treated as 0.
(2) If either argument is greater than str.length, it is treated as if it were str.length.
(3) If startIndex is greater than endIndex, then substring() will swap those two arguments; for example, str.substring(5, 0) == str.substring(0, 5).
*/
console.log(str.substring(4, 15)); // Prints: quick brown
console.log(str.substring(9, 0)); // Prints: The quick
console.log(str.substring(-28, -19)); // Prints nothing
console.log(str.substring(31)); // Prints: the lazy dog.
console.log(str.substring(-1, 11));


// Extracting a Fixed Number of Characters from a String --
// JavaScript also provide the substr() method which is similar to slice() with a subtle difference, 
// the second parameter specifies the number of characters to extract instead of ending index, like str.substr(startIndex, length).
console.log(str.substr(4, 15)); // Prints: quick brown fox
console.log(str.substr(-28, -19)); // Prints nothing
console.log(str.substr(-28, 9)); // Prints: fox jumps
console.log(str.substr(31)); // Prints: the lazy dog.


// Replacing the Contents of a String
// replace() method to replace part of a string with another string
console.log(str.replace("lazy dog", "deer"));
console.log(str.replace(/the/ig,""));


// Converting a String to Uppercase or Lowercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Splitting a String into an Array
var strArray = str.split(" ");
console.log(strArray);

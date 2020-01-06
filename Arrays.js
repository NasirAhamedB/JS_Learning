
// arrays are used to store multiple values in a single variable.
var array_name = ["BMW", "volvo", "Audi", "Mini"];
console.log(array_name)
// Arrays are Objects 
console.log(typeof array_name)

var person = {firstname:"James", lastname:"bond007", age:"young age"};
console.log(person)
console.log(person.firstname + person.lastname + ", and in " + person.age);


//Length and Sorting
console.log(array_name.length);
console.log(array_name.sort());

// How to recognize an Array
console.log(Array.isArray(array_name));
console.log(array_name instanceof Array);

// Convert Array to String
console.log(array_name.toString());

//Popping and Pushing
// Popping item pop() OUT of an array, Pushing items push() INTO an array
array_name.push("Maserati", "Toyota", "Jaguar")
console.log(array_name);
array_name.pop();
console.log(array_name);

// Shifting --> works like pop() but removes the first item
array_name.shift()
console.log(array_name);
array_name.unshift("Triumph")
console.log(array_name);

// Changing elements
// Array elements are accessed using their index number
array_name[0] = "Audi";
array_name[3] = "Jensen"
array_name[5] = "Alfa Romeo"
console.log(array_name);
//another way to append a new element to a narray
array_name[array_name.length]='Volvo'
array_name[array_name.length]='Toyota'
array_name[array_name.length]='Triumph'
console.log(array_name);

// using Splice() to add new items into and removes item from an array.
// Add
array_name.splice(2,0,"Jaguar", "Porsche")
console.log(array_name);
//Remove 
array_name.splice(10,1);
console.log(array_name);
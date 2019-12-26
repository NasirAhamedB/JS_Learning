// Variables in JavaScript are containers which hold reusable data
// there are 3 ways to declare variables in Javascript
//1.  const
//Const is variable type assigned to data whose value cannot and will not change throught the script.
const x = 10;
////////////////x = 'stephen';
console.log(x);

//2.  var
var y = 'testing', y1 = 'testing_y1', y2 = 'y2_testing';
console.log(y + " " + y1 + " " + y2);
//3.  let
let z = 3.21234;
console.log(z);

// Javascript is also known as Untyped language
// creating variable to store a number
var num = 5;
// store string in the variable num
num = "JSGeeks";
console.log(num);

// testing difference between var and let
//var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped
// Calling var new_var before definition returns undefined
console.log(new_var);
var new_var = 10;
//calling let new_let before definition results error
/////////////////console.log(new_let);
let new_let = 'test';

// another example
var textcolor = 'black';
if (textcolor == 'black'){
    var color1 = 'Blue'
}else {
    color1 = 'Red'
}
if (textcolor == 'black'){
    let color2 = 'Green'
}else {
    color2 = 'Yellow'
}
console.log("var color : " + color1)
////////////////console.log("let color : " + color2);


// Variables scope in Javascript
// There are two types of scopes in JS - Global and local

let globalvar = "This is a globla variable";
function fun(){
    let localvar = "This is a local variable";
    console.log("Global scope - " + globalvar);
    console.log("Local scope - " + localvar);
}

fun();


// UNARY Operators
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)




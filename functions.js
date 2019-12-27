/*JavaScript 
a function allows us to define a block of code, give it a name and then execute it as many times as you want.
A function can be defined using function keyword and can be executed using () operator.
A function can include one or more parameters. It is optional to specify function parameter values while executing it.
JavaScript is a loosely-typed language. A function parameter can hold value of any data type.
Can specify less or more arguments while calling function.
All the functions can access arguments object by default instead of parameter names.
A function can return a literal value or another function.
A function can be assigned to a variable with different name.
JavaScript allows us to create anonymous functions that must be assigned to a variable.
*/

function welcome(oName)
{
    console.log("Hello "+ oName + ", welcome to world of Javascript!!!");
}

welcome("Nasir", "simnple");


//fibonacci series:

function fibonaci(n)
{
    if (n<0)
    {
        return("Incorrect input")
    }
    else if (n==1)
    {
        return 0
    }
    else if (n==2)
    {
        return 1
    }
    else
    {
        return fibonaci(n-1) + fibonaci(n-2);
    }
}

console.log(fibonaci(9));

//function retunring a Function

function muliple(x)
{
    function fn(y)
    {
        return x * y;
    }
    console.log(fn)
    return fn;
}
var triple = muliple(4);
console.log(triple(3));
console.log(triple(2))


// Anonymous function
// JavaScript allows us to define a function without any name. 
// This unnamed function is called anonymous function. Anonymous function must be assigned to a variable.

var sayHello = function (name)
{
    console.log("Hello " + name + ", Welcome to the Automation club");
}
sayHello("Srini")


// Needed Functions
/*     A function can have one or more inner functions. 
These nested functions are in the scope of outer function. Inner function can access variables and parameters of outer function. 
However, outer function cannot access variables defined inside inner functions.
*/

function showMessage(firstName)
{
    function SayHello()
    {
        console.log("Hello " + firstName + ", Welcome to the Automation club");
    }
    return SayHello();
}

showMessage("Nasir")


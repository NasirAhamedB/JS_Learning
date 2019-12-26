// if statement is the most simple decision making statement. It is used to decide whether a certain statemet or block of statement will be executed or not

//if-else-if ladder: Here, a user can decide among multiple options. The if statements are executed from the top down. 
// As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the ladder is bypassed. 
// If none of the conditions is true, then the final else statement will be executed.

var i = 15;
//var i;
if (typeof i == 'number'){
    console.log("Input is a Integer");
    //Nested if - Nested if statements means an if statement inside an if statement
    if (i<15){
        console.log("Imput is smaller than 15");
    }
    if (i>15){
        console.log("Imput is larger than 15");
    }
    else{
        console.log("Input == 15");
    }
}
else if (typeof i == 'string'){
    console.log("Input is a string");
    if (i.length != 0){
        console.log("Length of the input string is " + i.length)
    } else{
        console.log("Empty string")
    }
}else {
    console.log("Input undefined");
}

//The switch case statement in JavaScript is also used for decision making purposes. 
//In some cases, using the switch case statement is seen to be more convenient over if-else statements.

//The switch case statement is a multiway branch statement. 
//It provides an easy way to dispatch execution to different parts of code based on the value of the expression.
switch(typeof i) {
    case 'number':
        console.log("Input is a Integer");
        if (i<15){
            console.log("Imput is smaller than 15");
        }
        else if (i>15){
            console.log("Imput is larger than 15");
        }
        else{
            console.log("Input == 15");
        }
        break;
    case 'string':
        console.log("Input is a string");
        if (i.length != 0){
            console.log("Length of the input string is " + i.length)
        } else{
            console.log("Empty string")
        }
        break;
    default:
        console.log("Input undefined");
}


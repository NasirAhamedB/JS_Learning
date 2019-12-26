//Looping in programming languages is a feature which facilitates the execution of a set of instructions/functions repeatedly
//    while some condition evaluates to true
//Consider we want to print "Hello World for 10 times" - this can be done in two ways 
//(1) write statement to print 10 times as shown below:
console.log("write statement to print 10 times as shown below:");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

//(2) Statement needs to be written once and loop will executed 10 times as shown below:
console.log("Statement needs to be written once and loop will executed 10 times as shown below:")
for (i=0;i<10;i++){
    console.log("Hello World");
}


// There are mainly two types of loops - 
//(1) Entry controlled loops  - In this type of loops the test condition is tested before entering the loop body [For loop and While loop].
//(2) Exit controlled loops - In this type of loops the test condition is tested or evaluated at the end of loop body [do - while loop].

//1.1 While loop:-
// A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition

var x = 1;
while (x < 5) {
    console.log("Value of X : " + x);
    x++
}

//1.2 For loop:-
// for loop: for loop provides a concise way of writing the loop structure. Unlike a while loop, 
//      a for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.
for (y = 4; y < 8; y+=2){
    console.log("Value of Y : " + y);
}


//2.1 do while:-
// do while loop is similar to while loop with only difference that it checks for condition after executing the statement
var z = 20;
do{
    console.log("Value of Z : " + z);
    z++;
}while(z<5);


/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
for (i=0;i<8;i++){
    console.log("#".repeat(i))
}


//Chessboard
// Used bitwise operator to get the output
var grid = 15;
for (i=0;i<grid;i++){
    if (i%2 == 0){
        console.log(" #".repeat(grid));
    }else{
        console.log("# ".repeat(grid));
    }
}



//FizzBuzz
for(i=0;i<100;i++){
    if (i%3 == 0 && i%5 != 0){
        console.log(i);
        console.log("Fizz")
    }
    else if (i%3 != 0 && i%5 == 0){
        console.log(i);
        console.log("Buzz")
    }
    else if (i%3 == 0 && i%5 == 0){
        console.log(i);
        console.log("FizzBuzz")
    }else{
        console.log(i);
    }
}


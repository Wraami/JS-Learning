//difference between var and let keywords
//starting with ES6 in 2015, we can now declare variables with let and const as well.
// let does not let you declare a variable twice.
var catName = "Garfield";
var quote;

var catName = "Beau";

function catTalk() {
    "use strict";
    catName = "oliver";
    quote = catName + " says meow!";
}
catTalk();

//if you declare a variable with var, it is declared globally or locally if declared inside a function.

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope();
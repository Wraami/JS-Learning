//Declare a read-only variable with the const keyword
//const has all the features of let but it is readonly

function printManyTimes(str)
{
    "use strict";

    const SENTENCE = str + " is good!"; //if declaring a variable with the const keyword you cannot reassign it afterwards.
    //when using const, its very typical to use all capital letters for the variable name.

    // sentence = str + " is amazing!"

    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("Euroglaze");

//how about mutating arrays declared with const?

const s = [4, 9, 1];
function editInPlace() {
    "use strict";

   // s = [9, 1, 4]; //we can update the array using bracket notation, even if it is a const!
s[0] = 1;
s[1] = 4;
s[2] = 9;
}
editInPlace();
console.log(s)

//but what about if we want to prevent this mutation ever occuring?

//we can use something called object.freeze that will prevent data mutation.
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); //cannot change math_constants.pi
    try {
        MATH_CONSTANTS.PI = 99; // 
    
    } 
    catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
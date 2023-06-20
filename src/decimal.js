//How do we create a random decimal number?

//we do this using the math.random function.
function randomFunc() {

    return Math.random();
}

console.log(randomFunc());

// what about random whole numbers?


var randomnumbetween0and19 = Math.floor(Math.random() * 20); //floor rounds down to the nearest whole number.

function randomnum() {

    return Math.floor(Math.random() * 10); //gives random number between 0 and 10
}

console.log(randomnum());

//how about random whole numbers within a range?


function ourrange(min, max) //takes a minimum and max number and runs a calculation as seen below.
{
    return Math.floor(Math.random() * (max - min + 1)) + min; //we have the math.random, which we multiply by the maximum minus the minimum number + 1., rounding the value to the floor. 
    //we add all this to our minimum number. This just gets a random number between the minimum and maximum. This returns a number between our min and max values.
}

//let's practice this and write it again

function randomrange(mymin, mymax)
{
    return Math.floor(Math.random() * (mymax - mymin + 1)) + mymin; //the plus mymin always ensures the minimum 
}

var myRandom = randomrange(6, 12);

console.log(myRandom);

//Parse int function


function ConvertToInteger(str) {
return parseInt(str);

}
ConvertToInteger("5485274852");
console.log(ConvertToInteger("5485274852"));



function ConvertToBinaryInteger(str) {
    return parseInt(str, 2); // here we pass in our default base, which for the binary numbers being used is 2.
    
    }
    ConvertToBinaryInteger("1010001");
    console.log(ConvertToBinaryInteger("1010001"));
//What about converting a radix?

//radix, or base is the number of unique digits used to represent numbers.
//the decimal system has a radix / base number of ten, because it uses the 10 digits from 0 through 9.

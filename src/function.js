//Use Arrow functions to write concise anonymous functions

 const magic = () => new Date(); //if only returning one value, don't need the return keyword, curly braces or even the var!.

 //write arrow functions with parameters

//  var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//  };
const myConcat = (arr1, arr2) => arr1.concat(arr2);
    
    
 console.log(myConcat([1, 2], [3, 4, 5]));

 //writing higher order arrow functions.

 const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

 const squareList = (arr) => {
    const squaredintegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //will contain an array of all the numbers that are more than 0 and also integers.
    //After we get this new array, we want to get the square of each number in that array. we do this with map function. this takes a function as an argument.
    return squaredintegers; //Only positive numbers within the array, we can use the filter and map functions to do this.
 }

 const squaredintegers = squareList(realNumberArray);
 console.log(squaredintegers);

 //write higher order arrow functions
 //in order to create more flexible functions you can use default parameters. This kicks in when the argument is not specified or is undefined.

 const increment = (function() {
    return function increment(number, value  = 1) { //if a value isnt passed in, it will be set to 1 automatically, however if it is, it will be set to whatever is passed in.
        return number + value;
    };
 })();
 console.log(increment(5, 2)); //brings back 7
 console.log(increment(5)); //brings back 6

 //we want to change the above function so that we can pass in multiple arguments.
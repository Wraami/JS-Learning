//ternary operators are one line if else statements. usually follows the following format
//condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
   return a === b ?  true : false;
    // if (a === b) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
}

console.log(checkEqual(1, 2));

// how about using multiple of these?
//you can nest these operators inside each other, giving them more functionality

function checkSign(num) {
return num > 0 ? "positive" : num < 0 ? "Negative" : "Zero"

}
console.log(checkSign(-10));


//REST OPERATORS
//Allows you to create a function that takes a variable number of arguments. This is ...

const sum = (function() {
    return function sum(...args) { //converts everythign that's passed in into one array, this array will be called args.
        // const args = [x, y, z]; //now that we've added our rest operator, we're not limited to only 3 parameters and we can define any number of arguments.
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); 

//Spread Operator
//This can be used to evaluate arrays in place. It looks identical to the rest operator, however it expands an already existing array.
//can only be used in an argument to a function or in an array literal.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY' ];
let arr2;
(function() {

    arr2 = [...arr1]; //now, what if we want arr1 to be a copy of arr2? we can use the spread operator for this.
    arr1[5] = 'potato' //as a result of arr1 being a direct copy of arr2, this update does not affect arr2, only arr1.
})();
console.log(arr2);

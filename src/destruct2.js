//Use destructuring assignment to assign variables from arrays.
//the difference between destructuring froma rrays and destructuring from objects is that you cannot specify which element from the array to go into a variable.

const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // we skip the third element
console.log(z, x);

let a = 8, b = 6;
(() => {
    "use strict";
})();
[a, b] = [b, a] //this switches the positions of a and b
console.log(a);
console.log(b);

//Use destructuring assignment with the rest operator
//we can use destructuring with the rest operator to restructure array elements.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [ , , ...arr] = list; //the comma denotes a removal.

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use destructing assignment to pass an object as a function's parameters.

const stats = {
max: 56.78,
standard_deviation: 4.34,
median: 34.54,
mode: 23.87,
min: -0.75,
average: 35.85
};
const half = (function() {

    return function half({max, min}) { // instead of passing in the entire stats into the function, we can just pass in what we need. this is commonly used with api calls.
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));
//A While loop can be seen being iterated through below.
var myArray = [];

var i = 0;
while(i < 5) {
myArray.push(i);
i++;
}
// this pushes the next i increment onto the array, storing all values below i.
console.log(myArray);

var ourArray = [];

for (var i = 1; i < 10; i++) //We seperate our values using semicolons.
//iteration in a for loop is done when the number of iterations is known.
{
    ourArray.push(i);
}
console.log(ourArray);

//iteration doesn't have to be done one at a time
//you could do the following

var newarray = [];

for (var i = 0; i < 15; i +=2)
{
    newarray.push(i);
}
console.log(newarray); // this returns all even numbers in the loop

//how about counting backwards?

var backarray = [];

for (var i = 10; i > 0; i -= 2)
{
    backarray.push(i);
}
console.log(backarray); // this returns a reverse order loop.

//iterating through an array with a for loop?

var existingarray = [2, 4, 6, 8, 10];
var ourtotal = 0;

for (var i = 0; i < existingarray.length; i++)
{
    ourtotal += existingarray[i];
}

console.log(ourtotal); // here, we've added all the contents within our array.

//Nesting For loops?

//if you have a multidimensional or nested array, we can use nested 
//for loops to access all the array elements.

function MultiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++)
    {
        for (var j = 0; j < arr[i].length; j++) //gets the length of each array inside the array.
        {
            product *= arr[i][j] //multiplies the result.
        }
    }
    return product;
}
var product = MultiplyAll([[1,2], [3,4], [5, 6, 7]]);

console.log(product);

//iterate with Do.. while loops

var doarray = [];
var ido = 10;

do { // first checks the condition before it runs any code
    doarray.push(ido);
    ido++;
} while (ido < 5) 
console.log(ido, doarray);

// a do while loop however will always run one time then check the conditon
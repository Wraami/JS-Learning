//Create strings using template literals
//template literals are a special type of string that makes creating complex strings easier.

const person = {
    name: "Zodiac",
    age: 44
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`; // you can aso add single and double quotation marks in the string and you dont have to escape them.
//The third thing is you can put variables right in the string.

console.log(greeting);


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"], //each element in the array is a template literal that has some HTML in it
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}; // you use semicolons after statements, not variable assignments or blocks.
function makeList(arr) { //we want this to create a list based on the array passed in
    //many ways to do this, but lets do a for loop.
    const resultDisplayArray = [];
for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`) //this formats the array elements into seperate lines, with html syntax. the arr[i] is our element being called to change.
}
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)

//Write concise object literal declerations using simple fields

//ES6 added good support for easily defining object literals.

const createPerson = (name, age, gender, dateofbirth) => ({name, age, gender, dateofbirth}) //this is the same as the code below, but instead, we don't need to assign key value pairs.
console.log(createPerson("Kanye West", 45, "male", "08/06/1977" ));
    // return {
    //     name: name,
    //     age: age,
    //     gender: gender,
    //     dateofbirth: dateofbirth
    // };
 //if you want to create a object where the key is the name of the variable and the value is the value of the variable, there's an easier way to do this.


 //Write concise declarative functions


 const bicycle = {
    gear: 2,
    setGear(newGear) { //long way to put a function within an object. we don't need to declare setGear: function(newGear) and can just use setGear(newGear)
        "use strict";
        if (newGear < 6) {
            this.gear = newGear
            console.log(bicycle.gear)
        }
        else {
            console.log("You can't go this high in gears!")
        }
    }
 };

 bicycle.setGear(7);

 //Use class syntax to define a constructor Function

 //ES6 provides a syntax to create objects using the class keyword.

//  var SpaceShuttle = function(targetPlanet) { //constructor function where we pass the name of our target planet in.
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
}   
 var zeus = new SpaceShuttle('Jupiter'); //old way to create an object using the new keyword, instantiating the SpaceShuttle object..

 console.log(zeus.targetPlanet)

 function makeClass() {
 class Vegetable {
    constructor(name) {
        this.name = name
    }
 }
return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
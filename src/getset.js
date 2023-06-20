//use getters and setters to control access to an object
//with a class object, you often want to obtain values from the object and set a value of a property within an object
// these are getters and setters
class Book  {
    constructor(author) {
        this._author = author;
    }
    //getter
    //returns the value of an object's private variable to the user.
    get writer() {
        return this._author; //this variable is never directly interacted with.
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

//lets make our own getter and setter with the below

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32); // means the variable is only accessible within the class, private variable.
        }
        //getter
get temperature() {
    return this._temp;
}
        //setter
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


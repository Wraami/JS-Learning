//Use Destructuring assignment to assign variables from objects.
//this is a special syntax for neaty assigning values taken directly from an object to a variable.
var voxel = {x: 3.6, y: 7.4, z: 6.54} 


//the old way of assigning each of these to their own variable would be by doing the following
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//However, with destructuring, there's a simpler and quicker way to assign variables for each element in an object.

const { x : a, y : b, z : c} = voxel; //this is a one liner of the above, just with variables a, b and c.

//now let's do this to obtain the average temperature for tomorrow.


const AVG_TEMPERATURES = {
    today: 77.5, 
    tomorrow: 79
};

function getTempTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow : tempoftomorrow } = avgTemperatures; //gets the tomorrow field from the AVG_TEMPERATURES object and assign it to the tempoftomorrow variable.

    return tempoftomorrow;
}

console.log(getTempTmrw(AVG_TEMPERATURES));

//Destructuring Assignment with nested objects

const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max :  maxOfTomorrow }} = forecast; //lets use destructuring to figure out what this value could be.
    //when destructuring, always use curly braces.
    //we destructured twice here as we had two values to check against. we set the max that was inside of tomorrow to max of tomorrow.

    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));




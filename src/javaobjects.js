//A javascript object is a way to store flexible data, so you can store strings, numbers and even arrays if you want.
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "enemies" : ["everyone"]
};

var mealObj = {
    "an entree": "hamborgar",
    "my side": "fries",
    "the drink": "wamter" 
};

//Dot notation to access properties resembles the following
var namevalue = ourDog.name;
var legsvalue = ourDog.legs;
//whereas bracket notation looks like the example below, its required if the name has a space in it
var entree = mealObj["an entree"];
var drink = mealObj["the drink"];


// but what if we want to update these propeties?
ourDog.enemies = "noone :D";

//what about adding new properties to our object?
ourDog['bark'] = "woof!";
ourDog.tree = "SQUIRREL";

// and deleting?
delete ourDog.tree;

//thats good, but lets do sme testing.

function checkobj(checkprop)
{
   if (ourDog.hasOwnProperty(checkprop))
   {
    return ourDog[checkprop];
   }
   else {
    return "not found";
   }
}
//What about complex objects?
var mymusic = [
    {
        "artist": "Kanye West",
        "title": "My Beautiful Dark Twisted Fantasy",
        "release_year": 2010,
        "formats": [
            "CD",
            "Digital",
            "LP"
        
        ],
        "platinum": true
    },
    {
        "artist": "Taylor Swift",
        "title": "Red",
        "release_year": 2012,
        "formats": [
            "CD",
            "Digital",
            "LP"
        ],
        "platinum": false
    }
]

var myplants = [
    {
        type: "flowers",
        list: [
            "rose",
            "violets",
            "tulips"
        ]
    },
    {
        type: "trees",
        list: [ //key value pair
            "oak",
            "birch",
            "pine"
        ]
    }
];

var secondtree = myplants[1].list[2];

console.log(secondtree);
console.log(checkobj("name"));
 //on the decleration, you can declare your own set of objects and what you want them to be.
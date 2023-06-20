var collection = {
    "2548": {
        "album": "Madvilliany",
        "artist": "MF Doom",
        "tracks": [
            "The Illest Villains",
            "Accordion",
            "Meat Grinder",
            "Bistro",
            "Raid",
            "America's most blunted",
            "Sickfit",
            "Rainbows",
            "Curls",
            "Do Not Fire!",
            "Money Folder",
            "Shadows of tomorrow",
            "Operation Lifesaver AKA Mint Test",
            "Figaro",
            "Hardcore Hustle",
            "Strange Ways",
            "Fancy Clown",
            "Eye",
            "Supervillain theme",
            "All Caps",
            "Great Day",
            "Rhinestone Cowboy"
        ]
    },
    "2468": {
        "album": "Purple Rain",
        "artist": "Prince",
        "tracks": [
            "Lets go crazy",
            "Take me with U"
        ]
    },
    "1245": {
        "artist": "Jimi Hendrix",
        "tracks": [] //key value pair
    },
    "5439": {
        "album": "Nevermind"
    }
};
//keep a copy of the collection for testing.
//to access sub properties of an array...
var collectioncopy = JSON.parse(JSON.stringify(collection)); //makes copy of the object.

function updaterecords(id, prop, value) {
   if (value === "") {
    delete collection[id][prop]
   } else if (prop === "tracks"){
    collection[id][prop] = collection[id][prop] || [];
collection[id][prop].push(value);   
} else {
    collection[id][prop] = value;
}
    
    return collection;
}
updaterecords(2468, "tracks", "revolution");
console.log(updaterecords(5439, "artist", "Nirvana"));
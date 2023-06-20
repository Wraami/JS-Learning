var contacts = [

    {
"firstname": "Lauren",
"lastname": "Hill",
"number": "06185471",
"likes": ["Sport", "Buses", "Brownies"]

    },

    {
        "firstname": "Andre",
        "lastname": "Benjamin",
        "number": "039285495",
        "likes": ["Literature", "Races", "Ice Cream"]
        
    },

    {
        "firstname": "Frank",
        "lastname": "Ocean",
        "number": "087685495",
        "likes": ["Music", "Cars", "Food"]
        
    },

    {
        "firstname": "Tyler",
        "lastname": "Bauderlaime",
        "number": "054985495",
        "likes": ["Converse", "Bikes", "Skittles"]
        
    },

    {
        "firstname": "Kanye",
        "lastname": "West",
        "number": "051455462",
        "likes": ["Influence", "Helicopters", "Pizza"]
        
    }
];
function lookupProfile(name, prop)
{
    //iterate through each element in the contacts list
for (var i = 0;  i < contacts.length; i++)
{
//now, the next thing we're going to check is if the name is a name on the list.
if (contacts[i].firstname === name) { //if the name exists, lets then evaluate the property.
return contacts[i][prop] || "No such property" //or, if the property field doesn't exist, return no such property
}
}
return "Contact doesn't exist";
}

var data = lookupProfile("Laurenw", "likes");
console.log(data);
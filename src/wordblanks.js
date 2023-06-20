function WordBlanks(mynoun, myAdjective, myVerb, myAdverb)
{
var result = "";

result += "The " + myAdjective + " " + mynoun + " " + "saw the ham and then " + myAdverb + " " + myVerb + " under the fridge. John was lying in fear of what he had created..." 

return result;


}

console.log(WordBlanks("cat", "girthy", "slid", "slowly"));
console.log(WordBlanks("horse", "big", "flew", "rapidly"));
//Create a function that’s passed a firstName and lastName. Return lastName comma firstName.

var first = prompt("What is your first name?");
var last = prompt("What is your last name?");

function name(x,y)
{
    return y + "," + x
}

console.log(name(first, last));


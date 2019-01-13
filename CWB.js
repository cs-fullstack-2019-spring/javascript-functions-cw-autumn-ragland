//Create 4 functions called add, subtract, multiply, and divide.
//Create them to allow a user to perform the name of the function to the two numbers and return the result.

function add(x,y)
{
return x + y
}

function subratct(x,y)
{
return x - y
}

function multiply(x,y)
{
return x*y
}

function divide(x,y)
{
return x/y
}

var num1 = parseInt(prompt("Enter your first number"));
var num2 = parseInt(prompt("Enter your second number"));
var input = prompt("Would you like to ADD, SUBTRACT, MULTIPLY, or DIVIDE your numbers?");

if (input === "ADD")
    console.log(add(num1, num2));

else if (input === "SUBTRACT")
    console.log(subratct(num1, num2));

else if (input === "MULTIPLY")
    console.log(add(num1, num2));

else if (input === "DIVIDE")
    console.log(divide(num1, num2));


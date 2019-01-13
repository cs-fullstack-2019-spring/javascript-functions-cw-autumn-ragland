//Create a function called checkPassword.
// Send two string variables to the checkPassword function to check if the strings are equal.
// Return true if they are equal and false if they are not equal. Print the function's return value.

function checkPassword(input1, input2)
{
    if (input1===input2)
    {
        return "TRUE"
    }
    else
    {
        return "FALSE"
    }
}

var str1 = prompt("What is your password?");
var str2 = "password";
console.log(checkPassword(str1, str2));
/*
Conditionals I

Is the number even or odd?

Instructions:
Write a function even_odd that takes one integer as an input and checks whether the
given integer is even or odd. Display the result.

Expected Input: One Integer

Expected Output: Statement, if integer is even or odd

*/

function even_odd(integer){
    if(integer % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

console.log(even_odd(4))

// Expected output: "Even"

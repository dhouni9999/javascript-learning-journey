// Immediately Invoked Function Expressions (IIFE )

//FUnction has to run immedialtely 

/* Why Use IIFE?
To prevent variable collisions in the global scope or affecting values of the fucntion without global pollution.
To run initialization code without affecting the rest of the codebase. */

// To avoid pollution from variables in the global scope, we use IIFE

(function () {
    let privateVariable = 'I am fast and hidden from the outer world. I will get executed privately.';
    console.log(privateVariable);
})();
 //Named IIFE
/* 
   IIFE is defined using two sets of parentheses:
   (function expression)(function invocation)
   The semicolon (;) before the IIFE is important 
   when it follows another statement, to prevent 
   issues like unexpected token errors.
*/

//(function expression)(function invocation)

//use of arrow function

((name)=> {     //We are using Arrow Function and 'name' is a parameter or placeholder
    console.log(`My name is ${name}`)
})('Tarun'); //we have passed the argument as 'Tarun'
//Unnamed IIFE

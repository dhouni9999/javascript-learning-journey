function addtwonumbers(number1 , number2){ //number 1 and number 2 are called parameters


    console.log(number1+number2);
}

const result = addtwonumbers(3,5) //3 and 5 are called arguments

//Question can we store 8 in this variable const => we will not get any result because we are not returning anything

console.log(result) // function is not returning anything it will print 'undefined'


//function implementation

function userloggedIn(username){

    if(username == "undefined"){
        console.log("Please enter User Name")
    }

    return `${username} is logged In`
}

console.log(userloggedIn("tarun"))  

//Basic Understanding of Function

//Function With Objects and Arrays

//Example when we are creating Shooping Cart we don't know how many items user will add to tackle these problem

function calculatecartPrice(num1){
    return num1
}

console.log(calculatecartPrice(2)) // here we are only passing one value argument and function also have only one parameter
//But in case (...)operator when we don't know how many arguments ar being passed => (Rest ) and (Spred) =>Both are same but 
/*
✅ Rest Operator
Purpose: To collect multiple elements into a single array or object.
Used in: Function parameters or destructuring (left-hand side).
Syntax: ...rest
🔹 Example – In function parameters:

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
🔹 Example – In array destructuring:

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]


✅ Spread Operator
Purpose: To expand elements of an array or object.
Used in: Function calls, array/object literals (right-hand side).
Syntax: ...spread
🔹 Example – In function calls:

const nums = [1, 2, 3];
console.log(Math.max(...nums)); // Output: 3
🔹 Example – In array literals:

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]
🔹 Example – In object literals:

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2 }

*/
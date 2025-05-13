"use Strict";
let score = 33 //In backhand we don't have anything we just get 33 we don't know that is it number or string

console.log(typeof score); // we can use this way of using typeof
console.log(typeof(score))  //we can use this way of using typeof as a method


//When we are working on backend we don't know that score is number or string To strictly use it as a number we have to use 
//This 

let valueINNumber = Number(score);
console.log(typeof(valueINNumber)); //it will now give any form data as a number

// Let see about this 
score = "332ftc"
console.log(typeof(valueINNumber)) 
//after excrution OUTPUT - number

// lets change the value of score 

console.log(typeof(score)) 
//after excrution OUTPUT - String
console.log(typeof(valueINNumber)) 
//after excrution OUTPUT - number


//valueINNumber = number && Score = string because we have converted the value to number using 
//this let valueINNumber = Number(score); it will treat any type of data as a Number

// lets print valueINNumber

console.log(valueINNumber)
//OUTPUT - NAN


/*How  this works in Boolean */

let isloggedIn= "Tarun Dhouni";

let isBooleanLoggedIN= Boolean(isloggedIn);

console.log(isBooleanLoggedIN);

/*Output
1--> When it is 1/0  -- > True/false
2--> when it is ""(Empty String) ---> false
3-->When it is Number --> true (other than 0 everything is true)  
4 --> When it is some String -->  True


*/
/*How  this works in String */

let isString = 4;
let isStringnumber = String(isString);
console.log(isStringnumber)
console.log(typeof isStringnumber)



/*Output
1--> When it is 1/0  -- >  It will treat as String
2--> when it is ""(Empty String) ---> It will treat as String
3-->When it is Number --> It will treat as String 
4 --> When it is some String -->  It will treat as String


*/


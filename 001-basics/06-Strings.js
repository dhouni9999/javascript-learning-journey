"use Strict";

//We will  try to learn about Strings With Modern Approch

const name = "Tarun";
const repo = 50;

console.log(name+repo+"value") //Old not a ideal way to write code or anything for string

//Modern Way (String INterpolation  -- We Create Placeholder using $ sign )

console.log(`Hello My name is ${name} and repo count is ${50}`)


//New to Create String 

const fullName = new  String('Tarun dhouni');


console.log(fullName.__proto__) // __proto__ it is used to acesss functionalilty that are defined under the prototype using internal link

console.log(fullName.toUpperCase());


const subString = fullName.substring(1,4);
console.log(subString);


//Slice

const subSlice = fullName.slice(-5,-1);// -1 reprsent last index i (it is excluded) , -6 is h which is included
console.log(subSlice)

//Trim --> Widely used 
let str = "    tarun  "

console.log(str.trim());

//Replace  --> widely used as well

let url = 'https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11'

console.log(url.replace('watch' , 'embed')); // "watach is searched and replace with embed --> output we can direclty use this url and place is webpage it will work"
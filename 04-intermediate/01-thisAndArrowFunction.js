

//JavaScript Store it value of function in Heap Memory
const user = {
    username : "Hitesh", //default value it can be changed 
    price : 999,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username} And hi from My Website`);
        console.log(this) // it will point to current object //user

    }
}
//user is like a pointer it will only store reference of object stored in Heap Memory

//this refers to the object that is executing th
// e current function it referr to current context. 
// Its value depends on how the function is called, not where it's written.

user.welcomeMessage // In here a temporary variable created inside javascript and it only hold the referense of the object property
//a temporay function is just pointing at memory it will not be exectued because it is not called

//to call the function we have to use () and now it will be executed

user.welcomeMessage()


user.username = "Tarun" // we have changed the default value of the object (No copying and moving happen) Direct changes happen on heap memory 

//✅ This is a direct mutation of the object — no copying or moving happens.

//this always point to current context 
//Sice we are coding in NODE JS enviroment 

console.log(this); // In Node.js, 'this' does not refer to the global object like in the browser. It refers to an empty object: {}
console.log(this === module.exports); // true

// In Node.js, every JavaScript file is wrapped in a function.
// So 'this' points to 'module.exports'.
// Since we haven't exported anything, it's currently an empty object.

/*function chai (){
    let username = "Tarun"
    console.log(this ) //this is pointing to global Object 
}*/


// Because when a function is called on its own, not as part of an object or class,
//  JavaScript has no specific context to bind this. 
//  So it just falls back to the global object (unless you're in strict mode, then this is undefined).


// -------------------> TO Avoid This to Happen because when this is pointing to global object we can accidently create global variables ----------->

/* const chai = function (){  // if we replace function and put  => behind it it will be arraw function (Leyman Term)
    let username = "Tarun"
    console.log(this.username)
}
chai() */

const chai =  ( ) =>{  
    let username = "Tarun"
    console.log(this.username)
}
chai()


/* Bascis of Arrow Funtion */

const add = (num1,num2)=>{
    return num1+num2
}
//Basic Way of making Arrow function
console.log(add(3,4))


const addtwo= (a, b) => a + b; //both are equivalent we have remove {} and return everything in  one line
 
//IT is used in returning an object 

const name  =  {username : "Tarun"}

const returnName = (name) => ({user : name.username})
console.log(returnName(name));
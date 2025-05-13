//Singleton (It is made by Using Constructor ) => It will have only one throughout the program

/*
A Singleton object is a design pattern that ensures a class has only one instance throughout the application's lifetime, and provides a global access point to that instance.

In JavaScript, the Singleton pattern is often used when you want to ensure that a specific resource or service is accessed by different parts of your program, but only a single instance should exist.
*/

// Literal Method to Create Object 


const juser= {
    name : "Tarun",  //key : value 
    age     : 23,
    location : "Tanakpur",
    email : "123@gmail.com",
    isLoggedIN : false,
}

/*
key: The property name (can be a string, number, or symbol).
value: The value of the property (can be any valid JavaScript type, such as a string, number, function, or even another object).
*/


//How To Access the Object 


console.log(juser.name) // Dot Notation (Simplest & Most Common) Syntax => object.property  ( expects a literal property name (which must be a valid identifier — essentially a string))

console.log(juser["email"])  // Bracket Notation (Useful for Dynamic or Special Property Names) Syntax => object["property"]
/*
Bracket notation is more flexible. You can use strings or variables to access property names. It's especially useful when:

1-Property names contain spaces or special characters (e.g., first name).
2-Property names are stored in a variable.
3-Property names are computed dynamically.

*/

//Example => When To use Bracket Notation in Accessing an properties of the object

const sym = Symbol("mykeys") //that how we declare Symbol (Interview Question)
/* 
Symbol is a primitive data type introduced in ES6 that’s used to create unique property keys. 
Unlike strings or numbers, each Symbol is guaranteed to be unique, even if they have the same description.
*/

const juser1= {
    name : "Tarun",  //key : value 
    "Full name ": "Tarun Dhouni", //We cannot access this property from Dot Notation it contains space between them
    age     : 23,
    location : "Tanakpur",
    email : "123@gmail.com",
    isLoggedIN : false,
    [sym]:"this is hidden"
}

console.log(juser1.email) //accessing using dot notation 
console.log(juser1["email"])//accessing using bracket notation  

/*Bracket notation is flexible — it accepts strings, numbers (which are converted to strings), 
 and Symbols (which stay as Symbols).*/ 

 console.log(juser1[sym]) //this the way with bracket notation we access symbol (Symbol is also user to hide the data)

 //Change in the value of in the object

 juser1.email ="tarun@chatgpt.com"

 console.log(juser1.email)

 // we can also change value using bracket notation 

 juser1['age']= 18;

 console.log(juser1.age)


 // If we want our object to be immutable (we cannot do any change or we cannot add / delete anything in the object we use)
 //object.freeze

 Object.freeze(juser1); //this will now make the object immutable we cannot make any change now we just read  this object we cannot write anything on this object

 console.log(juser1)


 // Add Function to the Object 


 juser.greeting = function(){

    console.log(`Hello ${this.name} welcome to the JS COHORT  we are learning abut  Object `)
 }


 console.log(juser.greeting()) //"this" refers to the current object the function is called on



 //Learning about Object part -1  main 
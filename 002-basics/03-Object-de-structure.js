//Very Importand Destructureing 

const course ={
    name: "Js in Hindi",
    price:"499",
    courseInstructor : "hitesh"
}

console.log(course.courseInstructor )


//De- Structure way to Write Object

/*
✅ What is Destructuring of Objects in JavaScript?
Destructuring is a shorthand syntax in JavaScript used to extract values from objects or arrays and assign them to variables in a cleaner, readable way.
🎯 Why Use Destructuring?
Benefit         	                    Description
✅ Cleaner code	                       Reduces repetition like obj.key everywhere.
✅ Improves readability	               Easy to see what values you're using from an object.
✅ Works in function parameters	       Can directly pull fields from objects passed to functions.
✅ Avoids deep dot chaining	           Prevents needing to chain like user.profile.contact.email.*/

const {courseInstructor} = course //Destructured Way 
console.log(course.courseInstructor ) // Traditinal Way  => (.)dot chaining not cleaner code

console.log(courseInstructor) //Destructured Way Output will be same 

//We can make it also Reduce the value of key for our own convience

const{courseInstructor: instructor}=course ;

//now rather than using courseInstructor we can just use  instructor for our desered result highly useful for Devlopment in React 

console.log(instructor)

/*
🚀 What is an API?
An API (Application Programming Interface) is a set of rules and protocols that allow different software applications to communicate with each other. 
In simpler terms, it’s a bridge that allows two systems (often different software programs or services) to interact. */

/*🚀 What is JSON?
JSON stands for JavaScript Object Notation, 
and it is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.
It is primarily used to transmit data between a server and a web application as text.
*/
/*Jason Comes in key value pair {"Keys":"value"} both keys and value are in String Jason api we use tools like jason formatter to understand api and type of data mostly we get data in array */

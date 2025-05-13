// Stack(Primitive Data Type)  Heap (Non -preemptive)

// In Stack memory we get copy of the value  to another variable if we assign that to another variable

// in Heap Memory we get Referense of the memory if we assign it to another variable

//Example

let myName = "Tarun Dhouni"

//How Stack 

let anotherName = myName; // Copy of the value is given to anothername it will have different memory location
 

console.log(anotherName) // Copy of the value is passed but anothername will have different meory location
// Important 

anotherName = "chaiCode"

console.log(anotherName) // value is overridden now it will have diffenet value 

/*--------------------------------------HEAP MEMORY(Reference is passed) ---------------------------------------*/

let user1 ={
    name: "xyz",
    email :"xyz@hotmail.com"
}
//Object is created

let user2 = user1; //Second Object is Created and after user1 = user2 refrense of the memory is created in heap memory
 
user2.email = "abc@xyz.com";
console.log(user1.email)
console.log(user2.email)

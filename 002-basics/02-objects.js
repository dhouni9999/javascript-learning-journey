//const tinder = new Object() // this is non -singleton 

//console.log(tinder) // It will print empty object

// If we try to make Object from another method we still get 

const tinderuser = { //Singleton object defined one time we can reuse them throughtout the code 
} // A singleton is an object that is created once and reused throughout your code.


console.log(tinderuser)

//Adding value to the obejct\

tinderuser.id ="123abc";
tinderuser.name="xyz";
tinderuser.email = "abc@gmail.com"
tinderuser.isloggedIn = false;

//console.log(tinderuser)

const regularuser ={
    email : "info@gmail.com",
    fullname :{ //object as key and value (Nested object)
        username :{
                firstname :"john",
                lastname : "Doe",
        }
    }
}

//Access Nested Object

console.log(regularuser.fullname)//First Nesting

console.log(regularuser.fullname.username)//Second Level Nesting

console.log(regularuser.fullname.username.firstname)


//Merging Object (Important)

const obj1 ={1: "a",2:'b'}
const obj2 ={3: "a",4:'b'}


//The keyword const in JavaScript ensures that the variable reference (i.e., the reference to the object) cannot be changed after initialization. 
// However, the contents of the object (properties and values) can still be modified.


const merged = Object.assign({},obj1,obj2)
console.log(merged)

//Why use {} as the first argument in Object.assign()?
//The {} is an empty object used as the target of the merge. Here’s why it's necessary:

//Object.assign(target , source )  if we do Object.assign(obj1,obj2) then obj1 will be target and change will happen in obj 1
// to Solve this we pass empty object it become target (meaning new object is created) and rest of the object that has to be merged become source obj1....objn

//✅ 2. Using Spread Syntax (ES6)


const newobj = {...obj1,...obj2} //Most Widely used 

console.log(newobj)


//When we need all the keys of the object

console.log(Object.keys(tinderuser)) 
//It will return values in form of array we can say that we can loop over it and do multiple thing over it

//Sometime we have to know is key present in that object or Not present

console.log(tinderuser.hasOwnProperty("id")) // very useful when data is comming from DataBase
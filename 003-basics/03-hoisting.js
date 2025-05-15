function one(){
        const name = "Tarun"
        function two (){
            const website = "Youtube"

            console.log(`Hello ${name} you are in this ${website}`) // function two can access values of function one
        }

        //console.log(website)//We cannot access variable website because it local variable 

        // calling function two here we are outside of function 2 we can use function two anywhere inside function one 
        //because function two is defined inside function one it will only access throught the scope of function one 

        two() 
}

one()



// Hoisting 

/**
 * 🔍 What is Hoisting?
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope before code execution.
This means you can reference some functions and variables before they are actually declared in the code.
 */
sayHi();  // ✅ Works!

function sayHi() {
  console.log("Hello!");
}

//The function is hoisted with its body, so it can be called before it's defined.


//But Hoisting will not work in Function expression

// ++++++++++++++++++++++++++++++++ Interseting ++++++++++++++++++++++++++++


//More Examples
console.log(addone(5)); //we are calling and expecting result  from the function that is not even defined yet (This is Hoisting)

function addone(num){
    return num+1
}

//console.log(addtwo(6)) // We cannot do this when we have declared the function in expression () => ReferenceError: Cannot access 'addtwo' before initialization (Thrown)


const addtwo = function(num){   //Function expression
    
    return num +2
}

//Difference between function and function expression is hoisting


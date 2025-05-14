let a =10
var b = 20;  //why we don't use var more often in program reason
const c =30;

console.log(a);
console.log(b);
console.log(c);

//NO problem var ,let ,const all behave same Program Arises when variable are used in function


if(true){
    let x =10
 var y = 20;  //why we don't use var more often in program reason
 const z =30;
} //x,y,z these are declared inside this conditional{} of x,y,z  they are just used inside these braces only 
//if in we are able to access these variable outside of these {} then thats the problem

//console.log(x);//let => we are not able to access it ouside of its scope
console.log(y);// var => we are able to access it outside of scope
//console.log(z);//const => we are not able to access it ouside of its scope

/*❌ Why We Don't Use var:
1. Function Scope Only (Not Block Scoped)

var is function-scoped, not block-scoped.

2. Hoisting Confusion

var gets hoisted (moved to the top of its scope) and initialized as undefined.
This can lead to bugs that are hard to trace.

3. No Temporal Dead Zone (TDZ)

Variables declared with var can be accessed before they are declared, which is dangerous.
let and const are in a "temporal dead zone" until they are declared, making your code safer.
Example 
console.log(z); // ✅ undefined
var z = 30;
*/


/*1. Global Scope
Variables are declared outside of any function or block.
Accessible anywhere in the code, even inside functions or blocks. */

let globalVar = "I'm global";

function greet() {
  console.log(globalVar); // ✅ Accessible here
}

greet();
console.log(globalVar); // ✅ Accessible here too

/*2. Block Scope
Variables are declared inside a block {} using let or const.
Only accessible within that block. */

{
  let blockVar = "I'm block scoped";
  console.log(blockVar); // ✅ Accessible here
}

//console.log(blockVar); // ❌ ReferenceError: blockVar is not defined

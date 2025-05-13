//Way to Define number

const score = 400; //-->  JavaScript's parser interprets literal 400 as numeric and reads it as number 
console.log(score)
// Explicity defining number using new keyword

const balance = new Number(400);
console.log(balance)

/*

🧩 When does this matter?

->new Number(400) creates a wrapper object around the primitive
->That’s usually unnecessary, and can cause weird bugs, especially with === comparison
->In 99.9% of cases, you should just use Number(400) or const balance = 400

Why And Javscript Does This Process 
JavaScript automates the wrapping of primitive values using a process called autoboxing, handled by the JavaScript engine during runtime. Here's how it works step by step, under the hood:
Example:-
*/

const score1 = 42;
console.log(score1.toFixed(2));

/*
1 - The JavaScript engine does this behind the scenes:

Detects method call on a primitive
score is a primitive number, which normally doesn't have methods. 

*/

const temp = new Number(42); //Autoboxing 

/*
Autoboxing happens
JavaScript temporarily wraps score in a Number object: 
*/

// Now const temp = new Number(42);  temp is an object it has Method toFixed(2) This process is done underthehood by JavaScript 

temp.toFixed(2); // returns "42.00"

/* Temporary object is discarded
After the method call, the temp object is destroyed, and you never see it. */

/*🤖 JavaScript Engine Handles It
This process is handled automatically by the JavaScript engine (e.g., V8 in Chrome/Node.js, SpiderMonkey in Firefox).

It checks:

Is this a primitive?
Are you accessing a property/method?
If so, create a temporary wrapper object, use it, and discard it.
🔍 Applies to:
String → new String(...)
Number → new Number(...)
Boolean → new Boolean(...)
*/
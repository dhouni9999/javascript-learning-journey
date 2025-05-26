// for loop

for(let i=0;i<10;i++){
    console.log(i);
}

let superHeroName =['Flash','superman','batman']

console.log(superHeroName.length)

for (let index = 0; index < superHeroName.length; index++) {
    const element = superHeroName[index];
    console.log(` Element is ${index+1} is ${element}`)
    
}

//Break and Continue in Loop Extremely Important

for(let i= 0;i<20;i++){
    if(i>=5){
        console.log(`Five is Detected ${i}`)
        break; //break immediately terminates the loop, 
        // and control moves to the first statement after the loop in the current scope (often called the global or outer scope)."
        }
    console.log("ELement is ", i)
}
console.log("HI after the loop") // Control comes to global scope and execution start's from here


//Continue in for LOOP
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) { //condition will be checked 
        continue;// this will tell the compiler to skip this iteration and move to next iteration
        console.log( "Hello" )// Even this will not get executed
    }
    console.log(i); // only odd numbers will be printed
}

//The continue statement in a for loop is used to skip the current iteration and immediately move to the next iteration of the loop. 
//Unlike break, it does not terminate the entire loop — it just skips over the remaining code inside the loop block for the current iteration.


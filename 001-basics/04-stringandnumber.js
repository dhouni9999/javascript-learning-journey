

let value =3;
let negValue = -value;

console.log(value,negValue)

/*--Operation --*/

//How String works

let str1 = "Tarun"
let str2 = "Dhouni"

console.log(str1+str2)  // String Concatation 

//Why JavaScript Behave badly 

//Example 1

console.log("1"+ 2); 
//what will be output --> 12
//How javascript became so smart that it converted 2 to string

// What will happen Now

console.log("1"+2+2);
//output --> 122

//Example 2 (Important)
console.log(1+ 2+ "2"); //Now something different will happen (please don't write these type of ambiguish code)

//Output --> 32 (Why ) - Why javascript behave like this 

// For now let remember that is String first then everything will be Converted to String
// If it is Number First than it will behave and perform arthematic operation that concatination will be done

//Special type of COnversion 

console.log(true);


//psotfix and prefix operator 

let a =101;

console.log( a++)
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.


console.log(++a)
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


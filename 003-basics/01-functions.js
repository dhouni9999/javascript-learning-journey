function addtwonumbers(number1 , number2){ //number 1 and number 2 are called parameters


    console.log(number1+number2);
}

const result = addtwonumbers(3,5) //3 and 5 are called arguments

//Question can we store 8 in this variable const => we will not get any result because we are not returning anything

console.log(result) // function is not returning anything it will print 'undefined'


//function implementation

function userloggedIn(username){

    if(username == "undefined"){
        console.log("Please enter User Name")
    }

    return `${username} is logged In`
}

console.log(userloggedIn("tarun"))  

//Basic Understanding of Function


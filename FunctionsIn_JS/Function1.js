// Function basic syntax

function myFunction(){
    console.log("I am");
    console.log("Aishwarya");
}
// this is declartion of function

// calling the function
myFunction()
// myFunction is the reference of function and () is the execution of the function



// Function with arrguments and parameters
// function additon(num1, num2){ // Parameters: when we are passing the value at the time of defineing an function that are known as parameters.
//     console.log(num1 + num2);
// }

//additon(5,5)// Arrguments: When we are passing the value at the time of calling the function that are known as arrguments.

function additon(num1, num2){
    let result = num1 + num2
    console.log("hi");
    return result; // dont write any code after return it will not execute
//  another way of writting this code is
//  return num1 + num2
}

const result = additon(4,4) // we can store a function into a variable
console.log("Result: ", result);

// function loginUser(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} have logged in`
// }
//console.log(loginUser("Aishwarys"));


function loginUser(username = "soni"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} have logged in`
}


console.log(loginUser("Aishwarya"));
// If we dont pass any value in console it will pass soni.
// If we pass any value then it will override the default value.


function calculateCartPrice(...amount1){
    // With using rest or spread operator we can store multiple values in one variable inside the function
    return amount1
}
console.log(calculateCartPrice(100,220,330,400,500));


// how to pass or use a object in a function
const user = {
    username: "soni",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)

handleObject({
    username: "Soni",
    price: 599
})

// we can direct pass the object in the function.



// how to pass or use a Array in a function

const myArray = [500,600,700,800,900]

function returnValue(getArray){
    return getArray[3]
}

// console.log(returnValue(myArray));
console.log(returnValue([100,200,300,400]));

// we can direct pass the array in the function similary object.



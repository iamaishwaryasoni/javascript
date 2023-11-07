// const userEmail = "aishsoni@gmail.com"
const userEmail = []

if (userEmail) {
   console.log("Got user email");
}else {
    console.log("No email");
}

// falsy values

// false 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is empty");
}

const obj = {}

if (Object.keys(obj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val;
//val = 5 ?? 10 // it will gives 5
//val = null ?? 10 // here it will give 10 
//val = undefined ?? 15 // here it will give 15
val = null ?? 10 ?? 15 // here it will give 10 first true value

// ?? it is generally used for handling the errors 
// In any condition if we get null or undefined value so for tackle this error we use ?? and write a function that will execute when we get null or undefined.

console.log(val);


// Terniary Operator

// Condition ? true : false

const price = 200

price <=100 ? console.log("LESS THAN 100") : console.log("more than 100");
// IF STATEMENT


const isUserloggedin = true //  = (it uses for assign a value)

if(2 == "2"){
  console.log("executed");
}

if(2 === "2"){
      console.log("executed");
      // This will not print executed because 2 is not equals to string
      
    }
    

// Camparison operators
// < (lessthan), > (greaterthan), <=, >=, == (Checking equal or not), != (not equal) , === (It also check the typeof and check equal or not), !==


// IF ELSE STATEMENT


const temp = 26

if(temp === 50){
    console.log("Temperature is less then 50");
}
else{
    console.log("Very hot");
}

const score = 300

if(score > 200){
    let sub = "Java"
    console.log(` Scored 200+ in java subject`);
}

// Another way of writing if statement using implicit scope(it assumes that scopes are there but we dont give the scopes)

const balance = 1000

if(balance >400 ) console.log("account have money"); // it end with (;) and good practice is to write this type of if in one line
// If want to write multiple line then we can use (,).


// NASTED IF ELSE STATEMENT


if (balance < 500) {
   console.log("Less than 500");
} else if (balance < 800) {
    console.log("Less than 800");
} else if (balance < 900){
    console.log("Less than 900");
} else {
    console.log("Less than 2000");
}


// we can add multiple conditions in If statement

const userLogin = true
const upi = true
const loginFromGoogle = true
const loginFromEmail = true

// && (and) operator
if (userLogin && upi && 2==3) {
   console.log("Multiple condition executed");
   // If any one condition is false then it will not execute.
}
 

// || (OR) operator
if (loginFromGoogle || loginFromEmail) {
     console.log("User logged in");
     // If any one condition is true then this will execute.
}
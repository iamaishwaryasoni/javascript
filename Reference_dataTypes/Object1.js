// objects can be created in two ways in javascript
// 1. Object through constructor 
// 2. Object through literals 

// objects created in constractor form are known as singleton

// Object through constructor
// Object.create

// object through literals 

const mySymbol = Symbol("value1")


const user = {
     name: "Aishwarya",
     "last name": "Soni",
     age: 23,
     [mySymbol]: "MyValue", // using symbol as a key in object
     location: "Bihar",
     email: "aishsoni@gmail.com",
     isLogin: false,
     lastLoginDay: ["Monday", "Sunday"]

}
// two ways in which we access the key value of an object
console.log(user.location);  //1
console.log(user["location"]);  //2
console.log(user["last name"]);
// we cannot access "last name" without squre notation.

console.log(user[mySymbol]); // accessing symbol key in object

user.location = "Delhi" // overriding value in object
//Object.freeze(user) // objects value will not change 
user.name = "Aish"
//console.log(user);

user.fn = function(){
     console.log("hello world");
}

user.fn2 = function(){
    console.log(`Hello everyone my name is ${this.name}`);
}
console.log(user.fn());
console.log(user.fn2());
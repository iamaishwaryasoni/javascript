const user = {
  username: "Aishwarya",
  price: 299,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
        // This always takes the current value.
    }

}

// user.welcomeMessage()
// user.username = "soni"
// user.welcomeMessage()

//console.log(this); // Here will get an empty object.

// function one(){
//     let name = "Soni"
//     console.log(this.name);
//     // Inside the function this will not work 
//     // Here using this operator will give undefined
// }

// one()

// Syntax of Arrow Function

const arrow = () => {
    let name = "Soni"
    console.log(this);
}

//arrow()


// This ia an Explicit arrow Function
const addtwo = (num1, num2) => {
    return num1 + num2

}
console.log(addtwo(5,5))


// Implicit Arrow Function

//const imparrow = (num1, num2) => num1 + num2
// Another way of writing same above arrow function
//const imparrow = (num1, num2) => (num1 + num2)

const imparrow = (num1, num2) => ({username: "Aish"})
// This is the way in which we can return an object in arrow function
// objects always have to wrap in () in implicit arrow function
console.log(imparrow(2,2));

// If we give {} in arrow function then must have to use return keyword,
// If we give () in arrow function then we dont need to write return keyword.






// object through constructor
// which is also known as singleton object.

//const user = new Object()

const user = {}

user.id = "a4530"
user.name = "Aishwarya"
user.isLogin = false

//console.log(user);

const oldUser = {
   email: "soni@gmail.com",
       fullName: {
        userFullname: {
            firstname: "Aishwarya",
            lastname: "Soni"
        }
       }
}

//console.log(oldUser.fullName);
//console.log(oldUser.fullName.userFullname);
//console.log(oldUser.fullName.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2) 
// Object.assign() adds two object and returns an new object.

const obj3 = {...obj1, ...obj2}
// spread operator first spread all the elements and then combine them into a new object
// console.log(obj3);


// array of object 

const multiUser = [
    {
        id: 1,
        email:"aish@.com"
    },

    {
        id: 1,
        email:"aish@.com"
    },
]

multiUser[1].email // by this we can access objects key inside array
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("isLogin"));

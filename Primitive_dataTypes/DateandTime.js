// Dates

let Date1 = new Date()
// console.log(Date1.toString());
// console.log(Date1.toDateString());
// console.log(Date1.toLocaleDateString());
// console.log(Date1.toLocaleString());
// console.log(typeof Date1);


// let myDate = new Date(2023, 0 , 23)
// console.log(myDate.toString()); 
// In javascript months are start from 0.

// let myDate = new Date(2023, 0 , 23, 5, 3)
// console.log(myDate.toLocaleString());

//let myDate = new Date("2023-01-9")
let myDate = new Date("01-09-2023")
// console.log(myDate.toLocaleString());
// In YYYY-MM-DD format month starts from 01.

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);

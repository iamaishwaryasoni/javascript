// ***************Number*************
const salary = 1000
//console.log(salary);

const balance = new Number(2000)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 669.699999
// console.log(otherNumber.toPrecision(4));

const num = 10000000
//console.log(num.toLocaleString('en-IN'));


// ***********Maths*************

console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(6.9));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.7));
// console.log(Math.min(5,9,3,4));
// console.log(Math.max(5,9,3,4));
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
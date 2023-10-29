// Array declaration

const arr = [0,1,2,3,4,5]
console.log(arr);
// In javascript we can store numbers in array.

const arr2 = ["Aishwarya", "Soni"]
console.log(arr2);
// In javascript we can store Strings in array.

const arr3 = [1,2,3,4,"Soni", "AISH"]
console.log(arr3);
// In javascript we can store both Numbers and Strings in array.

const myArr = new Array(1,2,3,5)
// Another way in which we can declare a array
console.log(myArr[2]);
// With this we can access the index element of an array.
// In array indexing starts from 0.


// Array Methods

// myArr.push(9)
// myArr.push(10)
// push add elements in array

// myArr.pop()
// pop removes last element of array

//myArr.unshift(0)
// unshift add an element in start

//myArr.shift()
//shift removes firts element

//console.log(myArr.includes(9));
//we can check the element is present or not in the array

//console.log(myArr.indexOf(5));

const newArr = myArr.join()
// join adds element of an array and convert it into a string

//console.log(myArr);
// console.log(typeof newArr);

// Difference between slice and splice

// console.log("A", myArr);

// const newArr2 = myArr.slice(1,3)
// console.log(newArr2);
// console.log("B", myArr);

// const newArr3 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(newArr3);

// splice manipulate the original array and slice does not

const name1 = ["Aishwaryaa", "Soni"]
const name2 = ["Mouli", "Sweta"]

const allName = name1.concat(name2)
console.log(allName);
// concat marge two arrays and create a new array


const all_new_name = [...name1, ...name2]
console.log(all_new_name);
// spread method same as concat but it can add more the two arrays and in concat we can only add two arrays.


const anotherArray = [1,2,[3,4,5,6,7],8,9,[10,[11,12]]]

const realArray = anotherArray.flat(Infinity)
console.log(realArray);
// flat method it gives a new array with all the sub array elements


console.log(Array.isArray("Soni"));
// isArray check the given element is array or not

console.log(Array.from("Soni"));
// from method converts values into an array

let num1 = 10
let num2 = 20
let num3 = 30

console.log(Array.of(num1, num2, num3));
// of method gives a new array from a set of elements.


let id= [2,18,23,34,65,90];
console.log(id.fill("soni", 2,5));

const myNum = [11,22,33,44,55,66,77,88,99];

const result = myNum.filter((num) => num > 55);
console.log(result);

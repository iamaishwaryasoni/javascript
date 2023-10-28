const name = "Aishwarya "
const IQ = 90

//console.log(name + IQ + "good");

//console.log(`Hello my name is ${name} and my IQ is ${IQ}`);

const newName = new String('AishwaryaSoni')

//console.log(newName[0]);
//console.log(newName.__proto__);
//console.log(newName.length);
//console.log(newName.toUpperCase());
//console.log(newName.toLowerCase());
//console.log(newName.charAt(5));
//console.log(newName.indexOf('a'));

const newString = newName.substring(0,8)
//console.log(newString);

const anotherString = newName.slice(-5, 10)
console.log(anotherString);

// in slice we can also give the negative values.


const newString1 = "    Aishwarya.    "
//console.log(newString1);
//console.log(newString1.trim());

const url = "https://aishwarya.com/soni@@raj"

console.log(url.replace('@@', 'aish'));
console.log(url.includes('soni'));
console.log(newName.split('a'));

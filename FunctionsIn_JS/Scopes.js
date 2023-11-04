//var c = 50
let  a = 100

if(true){ // this is a block scope and outside this is the global scope.
    let a = 10
    const b =20
    //var c = 30
    console.log("Block Scope : ", a);
}

console.log("Global Scope : ", a); 
//console.log(a);
// on executing this console log we will get error beacuse let a cannot be accesed out of the scope.
//console.log(b);
// on executing this console log we will get also an error beacuse const b cannot be accesed out of the scope.
//console.log(c);
// on executing this console log it will print 30 because var c can be accesed out of the scope.
// This is the major problem with the var it can be accesed globally anywhere in the program.
// And var overrides the value with the value which is declared inside the different scope.


function one(){
    const username = "Soni"
    
    function two(){
        const age = "23"
        console.log(username);
        // This will execute because child function can access the variable of parent function.
    }

    //console.log(age);
     // this will give error because age is the local variable we can not access it out of the scope.
    two()
}

one()

if(true){
    const name = "Aish"
    if(name === "Aish"){
        const age = "23"
        console.log(name + age);
    }
    //console.log(age);
    // error
}
//console.log(name);
//error

// If we declare a function like this we can call it before.
//console.log(addone(5));
function addone(num){
    return num +1
}
console.log(addone(5));

// this another we of writting above code
// if we declare a function like this we can not call it before 
// console.log(addtwo(10)); // error

const addtwo = function(num){
    return num +2
}
console.log(addtwo(10));
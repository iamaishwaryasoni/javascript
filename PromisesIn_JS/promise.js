// Promise Create
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography , network

    setTimeout(function (){
        console.log('Async task is complete');
        // First this will execute 
        resolve() // then this resolve call
        // without resolve promise will not be consumed.
    }, 1000);
})

// Promise Consume
promiseOne.then(function(){
    // .then works with resolve
    console.log("promise consumed");
    // when the resolve is called then this will execute.
})

// We can also create promise directly without storeing it into variable.

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
   
}).then(function(){
    console.log("Promise consumed again");
})


// How to pass data in resolve()

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username: "Aishwarya", address: "Noida"
        })
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
     let err = false
     if(!err){
        resolve({username: "Soni", password: "1234"})
     }else{
        reject('Error error')
     }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("The code written inside the finally() will always execute."))
// catch are used for printing the error


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true
        if(!err){
           resolve({username: "JAVASCRIPT", password: "1234"})
        }else{
           reject('Error in JS File')
        }
       }, 1000)

})

// async await works same as .then and .catch. 
// It waits until the task is complete if task is not complete then it displays the error.

async function consumeProFive(){
    // const response = await promiseFive
    // console.log(response);
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumeProFive()

// async and await cannot directly handle the errors.
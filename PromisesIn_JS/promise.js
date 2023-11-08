const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography , network

    setTimeout(function (){
        console.log('Async task is complete');
        // First this will execute 
        resolve() // then this resolve call
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
    // when the resolve is called this will execute.
})
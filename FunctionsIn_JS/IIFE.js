// Immediately Invoked Function Expressions (IIFE)

(function one(){
    //Named IIFE
    console.log(`connected`);
})();

// For removing the global scope pollution we use IIFE 
// IIFE also invoked the function fast
// To end this Function we always have to use semicolon (;).
// Semicolon we use when have two create two IIFE functions.


( (name) => {
    // Unnamed IIFE
    console.log(`again connected ${name}`);
}) ("Aishwarya")

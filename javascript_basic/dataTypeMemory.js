// Prmitive data types are stored in stack memory. 
// In stack memory we will get copy of original value.

// Non Prmitive (Reference) data types are stored in heap memory.
// In heap memory we will get the reference or origin value.

let youtubeName = "sonidotcom"

let anothername = youtubeName
anothername = "aishwaryadotcom"

console.log(youtubeName);
console.log(anothername);

let user1 = {
    
      email:  "soni.gmail.com",
      upiId: "soni@pytm"      

}

let user2 = user1

user2.email = "aish.gmail.com"

console.log(user1);
console.log(user2);

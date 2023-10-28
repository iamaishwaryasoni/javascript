/* 
  The variables that are defined with var statement have function scope.
  The variables that are defined with let statement have block scope.

  We can declare a variable again even if it has been defined previously in the same scope.
  We cannot declare a variable more than once if we defined that previously in the same scope.
*/

const account_ID = 200001;
let  Email = "aish@gmail.com";
var password = "soni";
accountCity = "Bihar";
let state;
console.log(account_ID);

Email = "soni@ga.com";
password = "12345";
accountCity = "Delhi";

console.table([account_ID, Email, password, accountCity, state]);
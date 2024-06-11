/*const rollNumber = 1; //--------------------------line 1  
var firstName = "Aaliya"; //--------------------- line 2  
let course ="JavaScript"; //--------------------- line 3  
rollNumber= 2; //-------------------------------- line 4  //gives error because const used once only
console.log("Hi "+firstName+", your roll number is "+rollNumber+". Hope you have knowledge on HTML5");*/
// Example 1: Using let to declare variables
let a = 10;
console.log(a); // Output: 10

// Example 2: Let does not allow re-declaration
// let b = 20;
// let b = 30; // Error: Identifier 'b' has already been declared

// Example 3: Let has block scope
{
  let c = 40;
  let d=33;
  console.log(d);
  console.log(c); // Output: 40
}
{
let c = 40;//declared initially 
  let d=33;
  let c=40;//this c is already defined initially so redeclare in blocks we we use the let is not allowed
  console.log(d);
  console.log(c); // Output: 40
}
const pi = 3.14;  
console.log("The value of Pi is: "+pi);  

const pi = 3.14;  
console.log("The value of Pi is: "+pi);  //const should be declared once only and initialized once only

  {
pi = 3.141592; /* This will throw an error because the assignment to a const needs to be done at the time of declaration and it cannot be re-initialized. */ 
console.log("The value of Pi is: "+pi); 
  }


  // even though the block or curlybraces the result is going to be error only when the identifier keyword is CONST//
{
    // Example 1: Using var to declare variables
var x = 10;
console.log(x); // Output: 10

// Example 2: Var can be re-declared and updated
var y = 20;
var y = 30; // No error
console.log(y); // Output: 30

// Example 3: Var has function scope
function example() {
  var z = 40;
}
// console.log(z); // Error: z is not defined

}
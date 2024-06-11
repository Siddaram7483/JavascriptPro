let name = "William";  
console.log("Welcome to JS course, Mr." + name);
/* here the goth and siddaram both are identifiers without keyword let so these both names are reassigning to the 
above console log */

let ciss= "Goth"; // identifier name let is already declared so this will give error 
console.log("Welcome to JS course, Mr." + ciss);

{
    let lastname = "Goth"; // see this one code is within the block not outside of the block so this will not give error even though same keyword and identifier we used 
    let first="ex";
    let umesh="raj";
    console.log(umesh);// this name is used as identifier with let inside the block and again if u use it will give error
    console.log(first);
    console.log("Welcome to JS course, Mr." + lastname); 
}
 
  firstname ="siddaram";// No 'let' keyword - this is just reassigning the value to the existing variable
console.log("welcome to u sidd:"+firstname);
    

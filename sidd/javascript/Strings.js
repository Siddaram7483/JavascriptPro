let Name = "siddaram";
let Surname = "kusur";
console.log(Name);
console.log(Surname);


//strings containing single quotes must be enlosed within double quotes
// and strings containing double quotes must be enclosed within single quotes.
//only this rule is valid not like this -----> let e= 'rajeshwari"s"; and f="rujwith's'
let a="siddaram's";
let b= "kusur's";
let c='raju"';
let d='mahakavi"';


console.log(a);
console.log(b);
console.log(c);
console.log(d);
//and also
let discoshanti= "55"+3+"raju";
console.log(discoshanti);

//here u can see other example for urself
let numberring = "siddaram"+"kusur"+"33"+ 32;
console.log(numberring);


//string literals

let firstName = "siddaram";
let secondName ="kusur";
console.log("name:"+firstName+" "+secondName+ "\n email:"+firstName+ "_" +secondName+"@gmail.com");


let employee  ="raj";
let manager  ="mukund";
console.log("employee:" +employee+  "\n manner:"+manager+ "_" +manager+ "_" );

let result =0/0;
console.log(result);

let result2 = "Ten" * 5; //these are not a numbers clld nan
console.log(result2);

let result3 = "5" * 5; // result will be 25 because  "5" is coerced into the number 5, 
console.log(result3);
let result4 = "seventeen" * 5; //these are not a numbers clld nan
console.log(result4);
let result5 = "3" * 5; // result will be 15 So, "3" is coerced into the number 5, 
console.log(result5);



//tamplet lietrals
let firstName12="Kevin"; 
let lastName="Patrick";
console.log(`Names:${firstName12} ${lastName}

Email: ${firstName}_${lastName}@abc.com`);

let dd="manjus";
let  fr="diard";
console.log(`names:${dd} ${fr}
email: ${dd} _${fr}@abc.com`);


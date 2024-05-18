//Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// The syntax is:

// ${...}

let name = 'mohib';
let age = 40;
let info = `my name is ${name} and my age is ${age}`;
console.log(info);

//donot use single or double quoataion sign if your using interpolation method

//now lets create function with interpolation 
let func = `this is used to create function ${function add(){
  let a = 40;
  b = 50;
  c = 80;
  d= a+b+c;
  let addit=d;
  console.log(addit);
}
 } his is function of addition ${add()} `

 console.log(func);
 console.log(add());
// yesterdday we learn about search method string functions How we can searc a particular string value and its index value using search methid iundexOF method 

let ab = 'foyund the value in this string "value " and console it';
console.log(ab.search('value '));

// search method search value from left to right index 

let vc="with this var is used to found 'with' indexOf method found it 8";
console.log(vc.indexOf("with",10 ));

//the indexOf method resturn the substring value and 

//now let check match string using js 
let mch="this is javascript and this  is goinis ";
let mchVal=mch.match(/is/)
document.getElementById("demo").innerHTML=mch.length,"",mchVal;
console.log(mchVal);

let bnb ='start it with new query start '
console.log(bnb.startsWith('start'));

let endw="this sentence is end here ended";
console.log(endw.endsWith("end"));

//this velue return false becaus eits not ended with end value string

let incl="this is used to leanr include method in strings"
console.log(incl.includes("used"));
//it return true value 

let inclu="this is used to leanr include method in strings"
console.log(inclu.includes("no"));
//it return false value because no is not incluse in string value
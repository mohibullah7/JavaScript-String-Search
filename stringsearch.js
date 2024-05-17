let obj = "string number ";
let man=obj.search(4);
console.log(man);

let objAr=["mohib",'khan','msd'];
console.log(objAr.indexOf('msd'));

let lstInd=["mohib",'khan','msd','data','drama','farm'];
console.log(lstInd.lastIndexOf('mohib'));
//let see the difference between search and method and indexOf mehtod

let  serchValue="this is my string and 'found' this number";
console.log(serchValue.search('found'));

let indNum = "show me the index of 'value' 3 is "
console.log(indNum.indexOf("f","me"));

//lets see match() search method it give you matc value of string

let mtch="this is string to match values 900 009 maintain in thin coming";
let matchit=mtch.match('in');
console.log(matchit,"",mtch);


// ok the indexOf method return the index value of the string we put in argumnet of search mthods
//let try this on onject
let myObj={
  value:8989,
  key:"string and value 'locate' ",
   myFunc() {
    document.getElementById('demo').innerHTML='<h1>this is heading </h1>'
  },
  newFunc:function myapp(){

  }

}
//string search methods 

// String.indexOf()
// String.search()
// String.lastIndexOf()
// String.match()
// String.matchAll(){}
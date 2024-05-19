//  bigInt() is used to manage big number more than 64 bit 

let a = BigInt(2839289382938928392);
console.log(typeof(a));

//numeric data types
//String , numbers, boolean ,undefined , objects, bigint, 

let msf =Number.MAX_SAFE_INTEGER;
console.log(msf);

let ii= 10;
let n =Number.isInteger(ii)
let ini=9.99;
let m =Number.isInteger(ini)
console.log(n);
console.log(m);


let ts= 909090.898;
let ch=ts.toString();
console.log(ch,typeof(ch));

let te=892093020000;
console.log(te.toExponential());

let tf=899000032.3232;
console.log(tf.toFixed(4));
//tofixed Number fixed Number to given Number of decimal Number 
//tofixed() method of number eliminate decimal values after decimal point

// let tp=4343.34343000;
// console.log(tp.toPrecision(4));
// let tp=4343.34343000;
// console.log(tp.toPrecision(5));
let tp=4343.34343000;
console.log(tp.toPrecision(2));

let vof= 9.900;
console.log(vof.valueOf());

let valOf=898989;
console.log(valOf.valueOf());
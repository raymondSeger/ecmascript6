'use strict';
let salary =[32000, 50000, 100000];

let [ low, average, high ]  = salary;
let [ low2, , high2 ]       = salary; // we can skip one value with just empty space
let [ low3, ...remaining ]  = salary; // we can skip one value with just empty space

console.log(average);
console.log(high2);
console.log(remaining); // [50000, 100000]
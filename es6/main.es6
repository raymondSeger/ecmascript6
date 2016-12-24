'use strict';
var getPrice = () => 5.99;
var getPrice2 = (count) => count* 4.00; // 1 parameter called count
var getPrice3 = (count, tax) => count * tax * 3.00; // 2 parameters

console.log(typeof getPrice); // function
console.log(getPrice); // the function
console.log(getPrice()); // 5.99

console.log(getPrice2(2)); // 8

console.log(getPrice3(2 ,3)); // 18
"use strict";
//one way = named function/normal     optional parameter num3?
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
//second way =  arrow function required parameter num3=10
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(10, 2));
//third way = function expression
const multply = function (num1, num2) {
    return num1 * num2;
};
console.log(multply(10, 2));
//rest function   = ...num3:number[]
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));

"use strict";
//string
let lname;
lname = "Alex";
let newname = lname.toUpperCase();
console.log(newname);
//numbers
let age;
age = 20;
console.log(age);
//boolean
let isvalid = false;
console.log(isvalid);
//array
let emptyList;
emptyList = ["Alex", 'kim'];
console.log(emptyList);
let numlist;
numlist = [1, 2, 3, 4, 5];
console.log(numlist);
let results = numlist.filter((num) => num > 2);
console.log(results);
let num = numlist.find((num) => num === 2);
console.log(num);
let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.blue */;
//tuples
let swapNumb;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumb = swapNumbers(10, 20);
swapNumb[0];
//any
let department;
department = 'IT';
department = 10;
let departments;
departments = 'IT';
departments = 10;
function add1(num1, num2) {
    return num1 + num2;
}
let newsum = add1(10, 20);
//

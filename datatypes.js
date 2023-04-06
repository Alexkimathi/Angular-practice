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
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let c = Color.blue;

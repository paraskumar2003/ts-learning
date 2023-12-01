"use strict";
function multiply(a, b) {
    return a * b;
}
let n = null;
let u = undefined;
const number = 10;
const string = "Paras";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const c = { someProp: 1 };
const person = { name: "Paras", age: 19, isMale: true, isActive: true, profile: { name: "Paras", age: 20, isMale: true } };
console.log(c);
console.log(Color.Red);
console.log(Color[0]);
const array = ["paras", "aditya", "roop", "prince"];
const record = {
    name: "Paras"
};
console.log(record);
console.log(array);
let someNumber = 9;
function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
}
console.log(capitalize("hello"));
console.log(capitalize("hi"));
const a = 2;
const b = 5;
console.log(`${a} * ${b} = ${multiply(a, b)}`);

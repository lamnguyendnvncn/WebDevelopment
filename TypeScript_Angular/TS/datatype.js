"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// datatypes
let lname = 'John'; //string
let age; //number
let isFlag = false; //boolean
let listNames; //any
let listCountries; // array
age = 12;
listCountries = ['DN', 'SGN', 'HN'];
listNames = [123, 'number', 'string', 456];
let result = listNames.filter((elem) => {
    return typeof (elem) === 'number';
});
console.log(lname.toUpperCase());
console.log(age + 2.3123);
console.log(isFlag);
console.log(listCountries);
console.log(listNames);
console.log(result);
let color = 2 /* Color.Blue */;
console.log(color);
// tuple
let swapNumbers;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNumbers = swapNumber(10, 20);
swapNumbers.push(30);
console.log(swapNumbers);
let department;
department = "IT";
department = 10;
console.log(department);

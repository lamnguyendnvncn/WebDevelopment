import { ListFormat } from "typescript";

// datatypes
let lname = 'John'; //string
let age: number; //number
let isFlag: boolean = false; //boolean
let listNames: any[]; //any
let listCountries: Array<string>; // array

age = 12;
listCountries = ['DN', 'SGN', 'HN'];
listNames = [123, 'number', 'string', 456]

let result = listNames.filter((elem) => {
    return typeof (elem) === 'number'
})


console.log(lname.toUpperCase());
console.log(age + 2.3123);
console.log(isFlag);
console.log(listCountries);
console.log(listNames);
console.log(result);

// Enum
const enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Blue;
console.log(color);

// tuple
let swapNumbers: [number, number];

function swapNumber(num1: number, num2: number): [number, number] {
    return [num2, num1]
}

swapNumbers = swapNumber(10, 20);
swapNumbers.push(30);
console.log(swapNumbers);

let department;
department = "IT";
department = 10;
console.log(department);


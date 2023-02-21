// let and const
// template literals
const lines = `Lines 1
Lines 2
Lines 3`
// arrow function
const myFunction = (log) => console.log(log)
// class
class Course {
    constructor(name,price) {
        this.name=name;
        this.price = price;
    }

    getName() {
        return this.name;
    }
}
// default parameter values
function logger(log = 'default value') {// use for optional parameters
    console.log(log)
}
// enhanced object literals
var fieldFree = 'isFree';
var name = 'Javascript';
var price = 1000;

var course = {
    name,
    price,
    [fieldFree]: (price===0) ? true : false,
    getName() {
        return this.name;
    },
    children: {
        name: 'ReactJS'
    },

}

// destructuring, rest
var array = ['JS', 'PHP','Ruby']
var [a,,c] = array //if you don't want to get the middle elements
var [first,...rest] = array

var {name,children:{name:childName}} = course; //remember to rename child key that have same value at parent key
// console.log(name)
// we can also use default param value in destructuring.

// console log implementation
const log = (...params) => {
    var result = params.join(' ')
    console.log(result)
}
// log(1,1,2,3,4,5,7,6)

// Spread
var array1 = ['JS','Ruby','PHP']
var array2 = ['ReactJS','Dart']

var array3 = [...array2,...array1]; //this also work with object
// console.log(array3)

// Tagged template literals
function highlight([first,...strings],...values) {
    return strings.reduce((acc,string,index) =>{
        return acc+=`<span>${values[index]}</span> ${string}`
    },first)
    
}
var brand = 'F8';
var course = 'Javascript';
const html = highlight`Learn coding ${course} at ${brand}!`

// Modules
import {loggerFunc,TYPE_LOG,TYPE_ERROR,TYPE_WARN} from "./module.js";
import * as vars from "./module.js"
// import without destructuring {} will need to be exported default
// import with destructuring won't need destructuring
loggerFunc(TYPE_ERROR);
console.log(vars.loggerFunc)
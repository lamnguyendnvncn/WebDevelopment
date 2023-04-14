"use strict";
function add(a, b) {
    return a + b;
}
//arrow function
const sub = (num1, num2) => num1 - num2;
function add2(a, b, c) {
    return c ? a + b + c : a + b;
}
function addAll(...number) {
    return number.reduce((a, b) => a + b, 0);
}
function addAllWith2(a, b, ...c) {
    return a + b + c.reduce((a, b) => a + b);
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addAllWith2(23, 34, 45));
function createArray(...items) {
    return new Array().concat(items);
}
console.log(createArray(1, 2, 3, 4, 5));
console.log(createArray('a', 'b', 'c'));

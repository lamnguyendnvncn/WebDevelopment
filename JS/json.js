// JSON

// A data format
// Javascript Object Notation
// Data type can be expressed in JSON: number, boolean, null, array, object

// Stringify and Parse

// var json = '["Javascript","PHP"]';
var json = '{"name":"Son dang","age":18}';
var jsonNumber = '1';

console.log(JSON.parse(json));  
console.log(JSON.stringify({'name': 'Son Dang','age':18}))
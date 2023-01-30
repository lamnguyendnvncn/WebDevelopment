var a =1;
var b=2;
var c =1.5;

var name = "Lam Nguyen";
var msg = "He said: \"Hello\"";

var bl= (1==='1');

var undf;

var isNull = null;
 
var id = Symbol('id');
var id2 = Symbol('id');

var myFunction = function() {
    alert('hi')
}

var myObject = {
    name: 'Lam Nguyen',
    age: 18,
    'address': 'DN',
    printFunction: function() {
        console.log(this.name+', '+this.age+', '+this.address)
    }
};

var myArray = [1,2,'3',4,5];

// 6 falsy vales (when convert to Boolean, it's always false)
// 1. 0
// 2. '' or "" empty String
// 3. undefined
// 4. null
// 5. false
// 6. NaN

// if statement
var a=1;
var b=2;

var resultAnd = 'A' && 'B' && 'C';
var resultOr = 'A'||'B'||'C';

// console.log(resultAnd)
// console.log(resultOr)

// function

function showMsg(msg) {
    alert(msg);
}

function writeLog() {
    let result=''
    for (let arg of arguments) {
        result+=`${arg} - `
    }
    console.log(result)
}

// writeLog('log1','log2','log3','log4');

function sum(a,b){
    return a+b;
}

function toString(a,b){
    return a.toString() + b.toString();
}

// console.log(sum(2,3))
// console.log(toString(2,3))

// Different types of function
// above are declaration function: can be called before declaration

// expression function: cannot be called before declaration
var showMessage2 = function() {
    console.log(arguments)
}

var myObject = {
    myFunction: function(){
        console.log(arguments)
    }
}

setTimeout(function(){

});

// String
var fullName = 'Lam Nguyen';
var fName = new String('Nguyen Thanh Lam')
var quote = "He said: \"Hello world!\"";
var lengthName = fullName.length
var firstName = 'Lam';
var lastName = 'Nguyen';
var myName = `${firstName} ${lastName}`

// Working with string
var myString = '  My name is Lam Nguyen Lam    '

// console.log(myString.length)
// console.log(myString.indexOf('Lam',12)) //Equal -1 if not found, second parameter is start point
// console.log(myString.lastIndexOf('Lam'))
// console.log(myString.slice(myString.indexOf('Lam'),myString.length))
// console.log(myString.slice(-3))
// console.log(myString.replace('Nguyen Lam','Nguyen Thanh'))
// console.log(myString.replace(/Lam/g,''))
// console.log(myString.toUpperCase())
// console.log(myString.toLowerCase())
// console.log(myString.trim()) //remove all redundant spaces at 2 end
// console.log(myString.trim().split(" "))
// console.log(typeof myString.charAt('33'))

// Number in JS
var age = 20;
var PI=3.14;

var otherNum = new Number(23);
// console.log(typeof age, typeof otherNum)

// console.log(age.toString())
// console.log(isNaN(20/'abc')) //NaN stands for invalid result

// console.log(PI.toFixed(1)) //
// console.log(typeof PI === 'number')
// console.log(typeof NaN === "number") //NaN is still considered number

var numbers = ['1','2','3','4','5']
// console.log(typeof numbers)
// console.log(numbers.length)
// for (var i=0;i<numbers.length;i++) {
//     console.log(numbers[i])
// }
// console.log(Array.isArray(numbers)) //check if a object is array

// Array methods
var numbers=['js','php','ruby']
// console.log(numbers.toString())
// console.log(numbers.join('-'))
// console.log(numbers.pop()) //remove last element and return that element
// console.log(numbers.push('java')) // add at the end of array
// console.log(numbers)
// console.log(numbers.shift())//remove first element and return that element
// console.log(numbers.unshift('javascript')) // add at the begin of array
// var array=[1,2,3,4,6,7,8,12]
// var sub=[12,13,14]
// console.log(array.splice(2,3)) //remove from index 2, remove 3 elements, return the removed elements
// console.log(array.splice(1,0,22,33,44)) //after the number of delete, it's the items you want to add at the start position
// console.log(array)
// console.log(array.concat(sub)) //add array sub to array
// console.log(array.concat(sub).slice(2,8))
// console.log(array)
// console.log(array.slice(-1))


// Object
var addressKey = 'address'
var myInfo = {
    name: 'Lam Nguyen',
    age: 20,
    [addressKey]: 'Tampa, FL',
    printInfo: function(){
        console.log([this.name,this.age,this.address].join(', '))
    }
}
// myInfo.printInfo()
myInfo.major = "Computer Engineering"
myInfo.printInfo = function() {
    console.log([this.name,this.age,this.address,this.major].join(', '))

}
var myKey='name';
// console.log(myInfo[myKey])
delete myInfo.age
// myInfo.printInfo()


// Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${firstName} ${lastName}`
    }
    this.getPlace = function() {
        return this.place
    }
}

var teacher = new User('Lam','Nguyen','cat')
var student = new User('dave','ng','dog')
// console.log(teacher)
// console.log(student)
// console.log(teacher.constructor === User)
teacher.title = 'Teacher at home'
student.comment = 'Study at home'
// console.log(teacher)
// console.log(student)
// console.log(teacher.getName())


// Object Prototype
// we use object prototype to add new properties or methods to the object constructor
User.prototype.place = 'home'
// console.log(teacher.getPlace())


// Date Object
var date = new Date(); //without ne w keyword, date will be just a string of current date and time

// console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)


// Math object
// console.log(Math.PI)
// console.log(Math.round(12.2))
// console.log(Math.abs(-22))
// console.log(Math.ceil(13.2))
// console.log(Math.floor(13.9))
// console.log(Math.random())
// console.log(Math.min(-12,22,33,-8,-16))
// console.log(Math.max(-12,22,33,-8,-16))


// If else

// Switch
var date=6;
switch(date) {
    case 2:
        console.log('Thu 2')
        break
    case 3:
        console.log('Thu 3')
        break
    case 4:
        console.log('Thu 4')
        break
    case 5:
        console.log('Thu 5')
        break
    default:
        console.log('ngay')
}
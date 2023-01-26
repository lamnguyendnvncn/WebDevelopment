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


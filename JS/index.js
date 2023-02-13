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
// var date=6;
// switch(date) {
//     case 2:
//         console.log('Thu 2')
//         break
//     case 3:
//         console.log('Thu 3')
//         break
//     case 4:
//         console.log('Thu 4')
//         break
//     case 5:
//         console.log('Thu 5')
//         break
//     default:
//         console.log('ngay')
// }


// Ternary operator
var cost = {
    name: "Javascript",
    price: 0
}

// if (cost.price>0) {
//     console.log(`${cost.name}: ${cost.price} coins`)
// }
// else {
//     console.log('Free!')
// }

var message =cost.price>0 ? `${cost.name}: ${cost.price} coins` : 'Free!'
// console.log(message)


// Loop
// for loop
// for (var i=1;i<=1000;i++) {
//     console.log(i)
// }

// for in: get key of object
var myInfo={
    name: 'lam',
    age: 18,
    address: 'vn'
}
// for (var i in myInfo) {
//     console.log(i)
// }

// for of: get value of object (if object is dictionary access through object.keys() or object.values())
// for (var key of Object.keys(myInfo)) {
//     console.log(myInfo[key])
// }
// for (var value of Object.values(myInfo)) {
//     console.log(value)
// }

// while loop
var i=1;
while(i<=1000) {
    // console.log(i);
    i++;
}

// do while
var i=0;
do {
    // console.log(i)
    i++
} while (i<0);


// break and continue
for (var i=0;i<10;i++) {
    if (i>5) break;
    // console.log(i)
}

for (var i=0;i<10;i++) {
    if (i%2!==0) continue;
    // console.log(i)
}

// Nested loop
var myArray=[
    [1,2],
    [3,4],
    [5,6]
]

for (var elems of myArray){
    for (var elem of elems) {
        // console.log(elem)
    }
}

for (var i=0;i<100;i+=5) {
    // console.log(i)
}

var a=[1,2,3,4,1,1,2,3]
var b = [...(new Set(a))]// ... will decompose elements in set, and [] will put those decomposed elements in array
// console.log(b)

// recursion
function fibonacci(i) {
    if (i===0||i===1) {
        return 1;
    }
    else {
        return fibonacci(i-1)+fibonacci(i-2);
    }
}
function factorial(n) {
    if (n===0||n===1) {
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}
function countDown(n) {
    if (n===0) {
        return;
    }
    console.log(n);
    countDown(--n);
}
function loop(start,end,cb) {
    if (start>end) {
        return;
    }
    cb(start);
    return loop(start+1,end,cb);
}
var array = ['1','2','3','4','5'];
loop(0,array.length-1,function(index){
    // console.log('index: ',index)
})


// Array Learning
var courses = [
    {
        id: 1,
        course: 'JS',
        coin: 250
    },
    {
        id: 2,
        course: 'PHP',
        coin: 350
    },
    {
        id: 3,
        course: 'C++',
        coin: 2150
    },
    {
        id: 4,
        course: 'C',
        coin: 0
    },
    {
        id: 5,
        course: 'C++',
        coin: 150
    }
]

courses.forEach(function(course,index){ //iterate through all elements (works like for of)
    // console.log(index, course.course)
})

var isCost = courses.every(function(course){ //check to see if all the elements satisfy a condition
    return course.coin>0
})
// console.log(isCost)

var freeExist = courses.some(function(course){ // check to see if there's at least 1 element satisfy a condition
    // console.log(course.id)
    return course.coin === 0
})
// console.log(freeExist)

var findElem = courses.find(function(course) { // return first element satisfied the condition, if there's no satisifed, return undfined
    return course.course==='C'
})
// console.log(findElem)

var filterElem = courses.filter(function(course) { //return all elements satsified the condition
    return course.course==='C++'
})
// console.log(filterElem)


// Map method 
var newCourses = courses.map(function(course, index) {
    return {
        id: course.id,
        course: `Course: ${course.course}`,
        coin: course.coin,
        info: 'Beginner'
    }
})
var courseNames = courses.map(function(course) {
    return `<h2>${course.course}</h2>`
})


// // Map reduce

// var totalCoin = courses.reduce(function(total,course,currentIndex){
//     return total+course.coin
// },0)
// // console.log(totalCoin)
// // if the return value we need is the same with the elements array, we can remove initial value
// numbers = [12,23,44,3443]
// var sum = numbers.reduce(function(total,num){
//     return total+num
// })
// // console.log(sum)
// var depthArray = [1,2,[3,4],5,6,[7,8,9]]
// var flattenArray = depthArray.reduce(function(flatten,a){
//     return flatten.concat(a)
// },[])
// // console.log(flattenArray)


// // practice callback function
// var topics = [
//     {
//         topic: "Front-end",
//         course: [
//             {
//                 id: 1,
//                 title: "HTML"
//             },
//             {
//                 id:2,
//                 title: "CSS"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         course: [
//             {
//                 id:1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "Node.js"
//             }
//         ]
//     }
// ]

// var courses = topics.reduce(function(allCourses,topic){
//     var result = topic.course.reduce(function(course,c){
//         return course.concat(c.title)
//     },[])
//     return allCourses.concat(result)
// },[])
// // console.log(courses)

// var courses = [
//     {
//         id: 1,
//         course: 'JS',
//         coin: 250
//     },
//     {
//         id: 2,
//         course: 'PHP',
//         coin: 350
//     },
//     {
//         id: 3,
//         course: 'C++',
//         coin: 2150
//     },
//     {
//         id: 4,
//         course: 'C',
//         coin: 0
//     },
//     {
//         id: 5,
//         course: 'C++',
//         coin: 150
//     }
// ]

// var numbers = [1,2,3,4,5]
// var sum = numbers.reduce(function(total,num){
//     return total+num
// })

// Array.prototype.customReduce = function(callback,initValue) {
//     if (initValue===undefined) {
//         initValue = this[0]
//         for (var i =1;i<this.length;i++) {
//             initValue = callback(initValue, this[i], i, this)
//         }
//     }
//     else {
//         for (var i =0;i<this.length;i++) {
//             initValue = callback(initValue,this[i],i,this)
//         }
//     }
//     return initValue
// }

// var sum = numbers.customReduce(function(total,num){
//     return total+num
// })
// // console.log(sum)

// var allCourses = courses.customReduce(function(all,course){
//     return all.concat(course.course)
// },[])
// // console.log(allCourses)

// var newCourses = courses.map(function(course){
//     return course.coin
// })

// // console.log(newCourses)

// Array.prototype.customMap = function(callback) {
//     var mapReturn = []
//     for (var i =0;i<this.length;i++) {
//         mapReturn.push(callback(this[i]))
//     }
//     return mapReturn
// }

// var newCourses = courses.customMap(function(course){
//     return course.course
// })
// // console.log(newCourses)


// // exercise
// var arr=[
//     ['name','lam'],
//     ['age',18]
// ]

// var result = arr.reduce(function(obj,prop){
//     obj[prop[0]]=prop[1]
//     return obj
// },{})


// // String array includes
// var title = "responsive abc"
// // console.log(title.includes('es',2))


// function myFunction2(param,msg) {
//     param(msg)
// }

// function callBack(msg) {
//     console.log(msg)
// }

// // myFunction2(callBack,"Hello world!")


// var courses = [
//     'JS',
//     'PHP',
//     'Ruby'
// ]
// var allCourses = courses.map(function(course){
//     return `<h2>${course}</h2>`
// })
// // console.log(allCourses)
// Array.prototype.myMap = function(callback){
//     result = []
//     for (var i =0;i<this.length;i++) {
//         result.push(callback(this[i]))
//     }
//     return result;
// }

// var allCourses2 = courses.myMap(function(course){
//     return `<h2>${course}</h2>`
// })

// // console.log(allCourses2)

// Array.prototype.myReduce = function(callback,initValue){
//     if (initValue===undefined) {
//         initValue = this[0]
//         for (var i =1;i<this.length;i++) {
//             initValue = callback(initValue,this[i])
//         }
//     }
//     else {
//         for (var i =0;i<this.length;i++) {
//             initValue = callback(initValue,this[i])
//         }
//     }
//     return initValue
// }

// var allCoursesR = courses.myReduce(function(allStr,course){
//     return `${allStr} ${course}`
// })

// // console.log(allCoursesR)


// // practice other method
// // empty elements in array
// var courses = [
//     'JS',
//     'PHP',
//     'Ruby'
// ]
// courses.length = 10

// // for (var i =0;i<courses.length;i++) {
// //     console.log(courses[i])
// // }
// // still show empty elements

// // use for in will eliminate showing empty elements
// for (var ind in courses) {
//     // console.log(courses[ind])
// }


// // Replicate forEach function

// // for each does not iterate through empty elements --> use for in loop
// Array.prototype.myForEach = function(cb) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)){ // without this condition, the console will also print the custom foreach function.
//             cb(this[index],index,this)
//         }
//     }
// }
// courses.myForEach(function(course,index,array){
//     console.log(course,index,array)
// })


// Custom filter function
var courses = [
    {
        name: 'JS',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 520,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 340,
        isFinish: true
    }
]

// var list = courses.filter(function(course,index,courses){
//     return course.coin>1000
// })
// console.log(list)

// Array.prototype.myFilter = function(cb) {
//     var result = []
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (cb(this[index],index,this)) {
//                 result.push(this[index])
//             }
//         }
//     }
//     return result
// }

// var myList = courses.myFilter(function(course,index,array){
//     console.log(index,array)
//     return course.coin>100
// })
// console.log(myList)


// Some custom function
// var oneCourse = courses.some(function(course){
//     return course.isFinish
// })


// Array.prototype.mySome = function(cb) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (cb(this[index],index,this)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// var myOneCourse = courses.mySome(function(course,index,array){

//     return course.isFinish
// })


// Every custom function
Array.prototype.myEvery = function(cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!cb(this[index],index,this)) {
                return false;
            }
        }
    }
    return true;
}

console.log(courses.myEvery(function(course,index,array){
    console.log(index)
    return course.isFinish
}))
// JSON

// A data format
// Javascript Object Notation
// Data type can be expressed in JSON: number, boolean, null, array, object

// Stringify and Parse

// var json = '["Javascript","PHP"]';
// var json = '{"name":"Son dang","age":18}';
// var jsonNumber = '1';

// console.log(JSON.parse(json));  
// console.log(JSON.stringify({'name': 'Son Dang','age':18}))


// Promise
// setTimeout(() => {
//     console.log(1);
// }, 1000);

// console.log(2);


// Callback hell, Pyramid of doom
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000);
//     }, 1000);
// }, 1000);

var promise = new Promise(
    // executor
    function(resolve, reject) {
        // logic
        // success: run resolve()
        // fail: run reject()
        resolve();
    }
);

promise
    .then(function() {
            return new Promise(function(resolve){
                setTimeout(() => {
                    resolve([1,2,3]);
                }, 3000);
            })
        }
    )
    .then(function(number) {
        console.log(number);
        return 2;
    }
    )
    .then(function(number) {
        console.log(number);
    }
    )
    .catch(function() {
            console.log('Failure!')

        }
    )
    .finally(function() {
            console.log('Done!')

        }
    )
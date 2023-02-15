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

// var promise = new Promise(
//     // executor
//     function(resolve, reject) {
//         // logic
//         // success: run resolve()
//         // fail: run reject()
//         resolve();
//     }
// );

// promise
//     .then(function() {
//             return new Promise(function(resolve){
//                 setTimeout(() => {
//                     resolve([1,2,3]);
//                 }, 3000);
//             })
//         }
//     )
//     .then(function(number) {
//         console.log(number);
//         return 2;
//     }
//     )
//     .then(function(number) {
//         console.log(number);
//     }
//     )
//     .catch(function() {
//             console.log('Failure!')

//         }
//     )
//     .finally(function() {
//             console.log('Done!')

//         }
//     )

// var sleep = function(ms) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms);
//     })
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return new Promise((resolve,reject)=>{
//             reject('Error');
//         })
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// var promise = new Promise((resolve,reject)=>{
//     reject('Success!')
// })

// promise
//     .then((result)=>{
//         console.log('result: '+result)
//     })
//     .catch((err)=>{
//         console.log('error: '+err)
//     })

// If you want to return promise that always right (resolve) or always wrong(reject), use

// var promise = Promise.resolve('success!')

// promise
//     .then((data)=>{
//         console.log('success: '+ data);
//     })
//     .catch((err)=>{
//         console.log('error: '+err);
//     })


// // Promise all, run multiple promise at the same time if promises are not relate to each other
// var promise1 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve([1])
//     }, 1000);
// })

// var promise2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve([2,3])
//     }, 2000);
// })

// Promise.all([promise1,promise2])
//     .then((result)=>{
//         var returnArray = [];
//         for (var i in result) {
//             returnArray = returnArray.concat(result[i])
//         }
//         console.log(returnArray)
//     })

// // If one promise have error, it will cancel everything => use for checking if all promise is correct
// var promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject('error');
//     }, 2000);
// })

// Promise.all([promise1,promise2,promise3])
//     .then((result)=>{
//         var returnArray = [];
//         for (var i in result) {
//             returnArray = returnArray.concat(result[i])
//         }
//         console.log(returnArray)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })


var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Lam Nguyen'
    },
    {
        id: 3,
        name: 'DVH'
    }
];

var comments = [
    {
        id:1,
        user_id: 1,
        content: 'Anh Son chua ra vid'
    },
    {
        id:2,
        user_id: 2,
        content: 'Vua ra xong e oi!'
    },
    {
        id:3,
        user_id: 1,
        content: 'Oke a oi!'
    }
]

// Fake api

function getComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var result = users.filter((user)=>{
                return userIds.includes(user.id)
            })
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then((comments)=>{
        var userIds = comments.map((comment)=>{
            return comment.id;
        })
        return {
            id: userIds,
            comments: comments
        }
    })
    .then((data)=>{
        return getUsersByIds(data.id)
            .then((result)=>{
                return {
                    users: result,
                    comments: data.comments
                }
            })
    })
    .then((result)=>{
        var commentBox = document.querySelector('.comment-box');
        var html=''
        result.comments.forEach(function(comment){
            var user = result.users.find(function(user){
                console.log()
                return user.id===comment.user_id
            })
            html+=`<li>${user.name}: ${comment.content}</li>`
        })
        commentBox.innerHTML = html
    })




    
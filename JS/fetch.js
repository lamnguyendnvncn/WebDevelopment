// How to use fetch

var postAPI = 'https://jsonplaceholder.typicode.com/posts'

fetch(postAPI)
    .then(response => response.json()) // this will parse the received json
    .then(post => {
        console.log(post);
        var htmls = post.map(p=>{
            return `<li>
                <h3>${p.title}</h3>
                <p>${p.body}</p>
            </li>`
        })
        // var htmlScript = htmls.reduce((htmlResult,html)=>{
        //     return htmlResult+=html
        // })
        htmlScript = htmls.join('');
        var commentBox = document.querySelector('.comment-box')
        commentBox.innerHTML = htmlScript
    })
    .catch(err=>console.log('error'))
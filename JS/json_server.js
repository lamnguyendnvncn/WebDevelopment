 var course = 'http://localhost:3000/courses'

 fetch(course)
    .then(course => course.json())
    .then(course => {
        console.log(course);
        var htmls = course.map(c => {
            return `<h1>${c.name}</h1><p>${c.description}</p>`
        })
        var html = htmls.join('');
        return html;
    })
    .then(html => {
        var commentBox = document.querySelector('.comment-box')
        commentBox.innerHTML = html;
    })
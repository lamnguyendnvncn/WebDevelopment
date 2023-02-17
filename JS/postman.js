// CRUD: create, read, update, delete
// Postman: POST, GET, PUT/PATCH, DELETE

var coursesAPI = 'http://localhost:3000/courses'
var deleteBtns
function renderCourse(courses) {
    var htmls = courses.map(course => {
        return `<li>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button class="delete course-${course.id}">Delete</button>
        </li>`
    })
    var htmlScript = htmls.join('')
    var commentBox = document.querySelector('.comment-box')
    commentBox.innerHTML = htmlScript
    return document
}

function getCourse(api) {
    fetch(api)
        .then(jsonReturn => jsonReturn.json())
        .then(courses => renderCourse(courses))
        .then(documentNew => {
            deleteBtns = documentNew.querySelectorAll('.delete')
        })
}
getCourse(coursesAPI)

var createCourse = document.querySelector('#create')
createCourse.addEventListener('click', (e) => {
    var name = document.querySelector('input[name="name"]').value
    var description = document.querySelector('input[name="description"]').value
    console.log(name,description)
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({name: name,description:description})
    }
    fetch(coursesAPI, options)
        .then(response => response.json())
        .then(courses => renderCourse(courses))
})




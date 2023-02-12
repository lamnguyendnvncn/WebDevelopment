// Get element in dom

// // by id
// var heading = document.getElementById('heading')

// // by class
// var headingClass = document.getElementsByClassName('headingcl')

// // by tag
// var heading2 = document.getElementsByTagName('h2')

// // by css selector
// var headingCss = document.querySelector('.headingcl')
// console.log(headingCss)
// var headingsCss = document.querySelectorAll('h2.headingcl')
// console.log(headingsCss)

// // HTML collection: anchors(a-tag), forms, images(img-tag)
// console.log(document.forms)
// console.log(document.anchors)


// var box1_li = document.querySelectorAll('div.box-1 li')
// console.log(box1_li)
// var box2_li = document.querySelectorAll('div.box-2 li')
// console.log(box2_li)


// // Get attribute 
// var headingElement = document.querySelector('h1')
// console.log(headingElement)

// headingElement.title = 'Heading'
// headingElement.id = 'heading'
// headingElement.className = 'heading1'
// headingElement.href = 'abc'

// var anchorElement = document.querySelector('a')
// // By this way, we can only set attribute that the elements actually have
// // For example, since heading tag does not have href attribute the above codes does not work
// anchorElement.href = 'https://google.com'
// // other way: by this way, we can even set attributes that the elements does not have
// anchorElement.setAttribute('abcdef','alphabet')
// console.log(anchorElement.getAttribute('abcdef'))


// Get text
// var heading = document.querySelector('.heading')
// console.log(heading.innerText) //return text we see on web pages only
// console.log(heading.textContent) //return all text node that are in the html


// Inner HTML and OuterHTML: add element to other element
// var boxElement = document.querySelector('.box')
// boxElement.innerText = '<h1>Heading</h1>' // cannot add element to an element, must use inner html
// boxElement.innerText = ''
// boxElement.innerHTML = '<h1 title="heading">New Heading</h1>'
// console.log(document.querySelector('h1').innerText)
// console.log(boxElement.outerHTML)//return html code of itself.


// Node Properties
// var boxElement = document.querySelector('.box')
// console.log([boxElement])
/**
 * Important properties:
 * nodeType: 1 is Element, 2 is attribute, 3 is text
 * offset: position of element in html.
 */


// DOM CSS
// var boxElement = document.querySelector('.box')
// console.log(boxElement.style)
// boxElement.style.width = '300px'
// boxElement.style.height = '100px'
// boxElement.style.backgroundColor = 'red'
// // or
// Object.assign(
//     boxElement.style, {
//         width: '200px',
//         height: '100px',
//         backgroundColor: 'green'
//     }
// )
// // This will create inline-css

// console.log(boxElement.getClientRects())


// class list: add, contains, remove, toggle

// var boxElement  = document.querySelector('.box')
// boxElement.classList.add('red')

// console.log(boxElement.classList.contains(''))

// setInterval(() => {
//     boxElement.classList.toggle('red')
// }, 1000);


// Dom Event
// var boxElements = document.querySelectorAll('.box')
// boxElements.forEach(function(box) {
//     box.onclick = function(e) {
//         e.target.classList.toggle('red');
//         console.log(e.target)
//     }
// })

// var inputText = document.querySelector('input[type="text"]')
// inputText.onchange = function(e) {
//     console.log(e.target.value)
// }
// var inputCheck = document.querySelector('input[type="checkbox"]')
// inputCheck.onchange = function(e) {
//     console.log(e.target.checked)
// }

// var inputSelect = document.querySelector('select')
// inputSelect.onchange = function(e) {
//     console.log(e.target.value)
// }

// var inputText = document.querySelector('input[type="text"]')
// inputText.onkeyup = function(e) {
//     console.log(e.which)
// }


// PreventDefault and StopPropagation
// var aTags = document.querySelectorAll('a')

// aTags.forEach(function(a){
//     a.onclick = function(e) {
//         if (e.target.innerHTML!='F8') {
//             e.preventDefault();
//         }
//     }
// })

// var search = document.querySelector('input[type="text"]');
// var data = document. querySelectorAll('ul li')
// search.oninput = function(e) {
//     var searchResult = e.target.value
//     data.forEach(function(course) {
//         if (!course.innerText.toLowerCase().includes(searchResult.toLowerCase())) {
//             course.style.display = 'none'
//         }
//         else {
//             course.style.display = 'block'
//         }
//     })
// }
// data.forEach(function(course) {
//     course.onmousedown = function(e) {
//         e.preventDefault()
//     }
// })

// StopPropagation
// var btn = document.querySelector('button')
// btn.onclick = function(e) {
//     console.log('click');
//     e.stopPropagation();
// }


// Event Listener
var btn = document.querySelector('#btn')
// btn.onclick = function(e) {
//     console.log('1');
//     alert('2');
// }
// or
function consoleL() {
    console.log(Math.random())
}

btn.addEventListener('click',consoleL)

setTimeout(() => {
    btn.removeEventListener('click',consoleL)
}, 3000);
// Use DOM Event for simple cases and when you don't want to remove it
// Other cases, use addEventListener
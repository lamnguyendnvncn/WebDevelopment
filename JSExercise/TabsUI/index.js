// Active
const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const tabItems = $$('.tab-item')
const tabContents = $$('.tab-pane')
const line = $('.line')
const tabActive = $('.tab-item.active')
line.style.width = tabActive.clientWidth + 'px'
tabItems.forEach((tabItem,index)=>{
    tabItem.addEventListener('click',(e)=>{
        $('.tab-item.active').classList.remove("active")
        $('.tab-pane.active').classList.remove("active")
        tabContents[index].classList.add("active")
        tabItem.classList.add("active")
        line.style.width = tabItem.clientWidth + 'px'
        line.style.left = tabItem.offsetLeft + 'px'
    })
})
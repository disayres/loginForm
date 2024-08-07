let $ = document

const firstInputElem = $.querySelector('#inp-1')
const secondInputElem = $.querySelector('#inp-2')

firstInputElem.addEventListener('click',function(){
    firstInputElem.style.width = '100%'
    secondInputElem.style.width = '50%'
})
secondInputElem.addEventListener('click',function(){
    secondInputElem.style.width = '100%'
    firstInputElem.style.width = '50%'
})
let para1 = document.createElement('p')
para1.innerText = 'hey i am red'
document.querySelector('body').append(para1)

para1.classList.add('red')

let heading4 = document.createElement('h3')
heading4.innerText = ' i am a blue h3'
document.querySelector('body').append(heading4)

heading4.classList.add('blue')



let div = document.createElement('div')
let h1 = document.createElement('h1')
let para2 = document.createElement('p')

h1.innerText='I am in a div'
para2.innerText='ME TOO'

div.append(h1)
div.append(para2)
div.classList.add('box');

document.querySelector('body').append(div)
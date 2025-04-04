// para = document.querySelector('p')
// para.innerText = 'abc'

// para.innerText = 'Hi, i am Peter Parker!'

// para.innerText = 'Hi, i am <b> Peter Parker </b>!' // ye sab chiz text he cconsider karta hai

// para.innerHTML = 'Hi, i am <b> Peter Parker </b>!' 

// jaha hame HTML markup(tags like bold , italic etc.) ko bhi pass karna 
// hota hai vaha innerHTML ka use hota hai

// heading = document.querySelector('h1');
// heading.innerHTML = '<u> Spider Man </u>'

// if we dont want to recall the heading (spider man) then we can also inject variables

// heading.innerHTML = `<u> ${heading.innerText} </u>`


// ---------------------*********---------------------------

let img = document.querySelector('img')

console.dir(img.getAttribute('id'))

img.setAttribute('id' , 'spidermanImg')
img.setAttribute('src' , "assets/creation_3.jpeg")

console.log(img.getAttribute('class'))
img.setAttribute('class','images')

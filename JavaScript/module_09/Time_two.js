// window
// console.dir(document);
// console.dir(document.all);

// console.dir(document.all(8));
// (document.all(8).innerText)='peter parker';
// console.dir(document.all(8).innerText)

// document.getElementById("mainImg")
// ye sirf hame object return karta hai text ya image  nhi
// let imgObj = document.getElementById('mainImg');
// console.log(imgObj);
// console.dir(imgObj);
// console.dir(imgObj);

// imgObj.src
// imgObj.tagName
// imgObj.id
// imgObj.src = "assets/creation_1.png";
// console.log(document.getElementById('description'));
// console.dir(document.getElementById('description'));

// getElementByClassName('')  property

// let smallImages = document.getElementsByClassName("oldImg")

// smallImages[0];
// for (let i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//      console.log(`value of image no ${i} is changed`) 
// }


// document.getElementsByTagName('p')
// document.getElementsByTagName('p')[1]
// document.getElementsByTagName('p')[1].innerText = 'yash'

// console.dir(document.querySelector('p'))
// console.dir(document.querySelector('#discription'))
// console.dir(document.querySelector('.oldImg'))
// console.dir(document.querySelector('div a'))


// para.innerText='abc'
// 'abc'
// para.innerText='hi i am peter parker'
// 'hi i am peter parker'
// para.innerText='hi i am <b>peter parker</b>'
// 'hi i am <b>peter parker</b>'
// para.innerHTML='hi i am <b>peter parker</b>'
// 'hi i am <b>peter parker</b>'
// let heading = document.querySelector('h1');
// undefined
// heading.innerHTML='<u>Spider Man<u/>'
// '<u>Spider Man<u/>'


// // with help of backtik (``)
// let heading = document.querySelector('h1');
// undefined
// heading.innerHTML
// 'Spider Man'
// heading.innerHTML = `<b>${heading.innerText}  </b>`
// '<b>Spider Man  </b>'


// img = document.querySelector('img')
// <img src=​"assets/​spiderman_img.png" id=​"mainImg" class=​"abc xyz">​
// img.getAttribute('id')
// 'mainImg'
// img.setAttribute('id','spiderImage');
// undefined
// img.setAttribute('id','mainImg');
// undefined
// img.setAttribute('src',"assets/creation_3.jpeg");
// undefined
// img.getAttribute('class')
// 'abc xyz'
// img.setAttribute('class','images');
// undefined
// img.getAttribute('class')
// 'images'


img = document.querySelector('img')
console.dir(img)
img.style
let heading = document.querySelector('h1');
heading.style
heading.style.color
heading.style.color = 'purple'
heading.style.backgroundColor = 'yellow'

let links = document.querySelectorAll('.box a')
undefined
for(link of links) {
    link.style.color = 'purple'
}
// 'purple'
for(let i=0; i<links.length;i++){
    links[i].style.color = 'green'
}
// 'green  

// style (style property se wahi chize dikhti hai jo inline style ho )
// style property me external css nhi dikhti isliye hum style property \
// se jayda styling set nhi karte


//jab humne h1 me do classes add ki classList ki madat se and jab 
// green class remove ki classList.remove se and setattribute se set
// ki green class to purple hat gayi 
// becoz setattribute me ek time pe ek hi class ki value ho sakti hai
// that's why we don't use setAttribute regularly

// let heading = document.querySelector('h1');
// undefined
// heading.classList.add('green')
// undefined
// heading.classList
// DOMTokenList ['green', value: 'green']
// heading.classList.contains('underline')
// false
// heading.classList.contains('green')
// true
// heading.classList.toggle('green')
// false
// heading.classList.toggle('underline')
// true
// heading.classList.toggle('green')
// true
// heading.classList.remove('green')
// undefined
// heading.classList.contains('green')
// false

// toggle ka kaam hota hai agar koi class exist karti hai to usse remove kar doo agar  exist nhi karti hai to usse add kar doo

// let box = document.querySelector('.box')
// undefined
// box.classList.add('yellowbg')
// undefined
// box.classList.add('yellowBg')


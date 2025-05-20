// let img = document.querySelector('img')

// console.dir(img);
// // paste in console
// img.style 
// let heading = document.querySelector('h1');
// heading.style
// heading.style.color = 'purple'
// heading.style.backgroundColor = 'yellow'


// make box yellow

// let links = document.querySelectorAll('.box a')   // ye node(4) list dega 

// console.dir(links);
// so ispe for loop laga ke color change kar sakte hai

// use for of loop 
// for(link of links){
//      link.style.color = 'yellow'; // inline style
// }


// for(let i =0;i<links.length;i++){
//     links[i].style.color = 'purple'
// }

// paste as it is on console
// let img = document.querySelector('img')

// img.classList;
// img.classList.add('yash')
// img.classList;


// let heading = document.querySelector('h1');
// heading.classList.add('green')
// heading.classList;

// heading.classList.add('underline')

// heading.classList.remove('green')

// heading.setAttribute('class','green')  // once we used set attribute to add class green then 
// we came to know that our underline class is being removed
// thats why we dont use setattribute for styling as it only allows one class name at one time
// so we prefer to use classList;

// heading.classList.contains('green')
// true
// heading.classList.contains('yash') 
// false

// toggle means switch agar koi class exists karti hai to usse remove
//  kar do agar vo exists nhi karti to usse add kar doo 

// heading.classList.toggle('green')  // yaha green ko remove kiya
// false
// heading.classList.toggle('underline')  // yaha undeline ko add kiya
// true
// heading.classList
// DOMTokenList ['underline', value: 'underline']
// heading.classList.toggle('green') // yaha green ko add kiya
// true
// heading.classList 
// DOMTokenList(2) ['underline', 'green', value: 'underline green']


// let box = document.querySelector('.box')

// undefined
// box.classList.add('yellowBg')
// undefined
// box.classList;
// DOMTokenList(2)['box', 'yellowBg', value: 'box yellowBg']
// let smallImages = document.getElementsByClassName("oldImg")

// // document.getElementsByClassName will always give HTML Collection
// // it is similar to array but we can only iterate on it 
// // push,pop and other methods are not allowed

// for(let i =0; i<smallImages.length;i++){
//     // console.dir(smallImages[i]);
//     // console.dir(smallImages[i].src)

//     smallImages[i].src = "assets/spiderman_img.png" 
//     console.log(`value of image no ${i} is changed`)
    
// }

// query selector does not give html collection it only use to select single elements

console.dir(document.querySelectorAll('p'))

// console.dir(document.querySelector('#description'))

// console.dir(document.querySelector('.oldImg'))

// div tag ke ander anchor tag chahiye 
// sirf div ke andar ka pahla a tag select hoga with class :- boxlink
// console.dir(document.querySelector( 'div a'));

// console.dir(document.querySelectorAll( 'div a')); // here we get aa node list of 4 items 


// textContent dikhata hai ki humne index . html me ky likha hua hai
// har line ke baad /n dikhata hai 
// it shows all the hidden tags inside that element

// innerText dikhata hai ki hamari screen pe kya print hua hai

// innerHtml dikhata hai ki HTML ka markup kya tha 
// it shows tags


// har individual object  ek node hoti hai trees me 
// and querySelectorAll hame nodelist return karta hai~
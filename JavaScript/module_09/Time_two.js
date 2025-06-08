// window
// console.dir(document);
// console.dir(document.all);

// console.dir(document.all(8));
// (document.all(8).innerText)='peter parker';
// console.dir(document.all(8).innerText)

document.getElementById("mainImg")
// ye sirf hame object return karta hai text ya image  nhi
let imgObj = document.getElementById('mainImg');
console.log(imgObj);
console.dir(imgObj);
console.dir(imgObj);

imgObj.src
imgObj.tagName
imgObj.id
imgObj.src = "assets/creation_1.png";
console.log(document.getElementById('description'));
console.dir(document.getElementById('description'));

// getElementByClassName('')  property

let smallImages = document.getElementsByClassName("oldImg")

smallImages[0];
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
     console.log(`value of image no ${i} is changed`) 
}


document.getElementsByTagName('p')
document.getElementsByTagName('p')[1]
document.getElementsByTagName('p')[1].innerText = 'yash'

console.dir(document.querySelector('p'))
console.dir(document.querySelector('#discription'))
console.dir(document.querySelector('.oldImg'))
console.dir(document.querySelector('div a'))



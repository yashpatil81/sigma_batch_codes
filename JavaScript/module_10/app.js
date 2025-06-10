let btns = document.querySelectorAll('button')
// console.dir(btn);

// btn.onclick = function(){
//     console.log('button was clicked');
//     alert('button was clicked')
// }

for (btn of btns) {
    btn.onclick = sayHello;
    btn.onclick = sayName;

    // btn.onmouseenter = function(){
    //     console.log('you entered a button');       
    // }
    // console.dir(btn)
}

function sayHello(){
    alert('hello')
}

function sayName(){
    alert('Apna College')
}

/* AGAR HUM CHAHATE HAI KI BUTTON KE CLICK HONE PAR MULTIPLE FUNCTIONS EXECUTE HO YE CHIZ POSSIBLE NHI HO PAYEGI IS LIYE EVENT LISTNERS KA USE HOTA HAI */
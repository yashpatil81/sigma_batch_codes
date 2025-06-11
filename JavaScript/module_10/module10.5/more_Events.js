let form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
})

let user = document.querySelector('#user')

user.addEventListener('change',function(){
 console.log('change event');
 console.log('final value = ' , this.value);  // here this refers to user
})

user.addEventListener('input',function(){
 console.log('input event');
 console.log('final value = ' , this.value);  // here this refers to user
})






// 🔹 change event:
// Jab input element ka value change karne ke baad focus chhod dete hain (blur), tab ye event fire hota hai.

// Matlab, jab tak user Enter nahi dabata ya kisi aur jagah click nahi karta, tab tak ye event nahi chalega.

// 🔹 input event:
// Jab bhi input field ka value change hota hai (real-time), tab ye turant trigger ho jata hai.

// Har ek character type karte hi ye event fire hota hai.
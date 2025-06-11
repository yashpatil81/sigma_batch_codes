let form = document.querySelector('form')

// for extractig value which we have given as input in form
// form.addEventListener('submit',function(event){
//     event.preventDefault();

//     let inp = document.querySelector('input')
//     console.dir(inp)
//     console.dir(inp.value);   // value property is like innerText but it is used to take input values
    
// })


form.addEventListener('submit',function(event){
    event.preventDefault();

    // let user = document.querySelector('#user')
    // let pass = document.querySelector('#pass')

    // console.log(user.value);
    // console.log(pass.value);

   console.dir(form);
// here this refers to form
   let user = this.elements[0]
   let pass = this.elements[1]

    console.log(user.value);
    console.log(pass.value);
    
    alert(`Hi ${user.value}, your password is set to ${pass.value}`)
  
})



// form.elements
// HTMLFormControlsCollection(3) [input#user, input#pass, button, user: input#user, pass: input#pass]0: input#user1: input#pass2: buttonpass: input#passuser: input#userlength: 3[[Prototype]]: HTMLFormControlsCollection
// form.elements[0]
// <input type=​"text" placeholder=​"username" id=​"user">​
// form.elements[1];
// <input type=​"password" placeholder=​"password" id=​"pass">​
// form.elements[2];
// <button>​Register​</button>​

// form.elements[0].value
// 'yash'


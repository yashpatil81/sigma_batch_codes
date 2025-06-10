let btns = document.querySelectorAll('button')


for (btn of btns) {
  
    // btn.addEventListener('click', sayHello);
    // btn.addEventListener('click', sayName);
    btn.addEventListener('dblclick', function(){
        console.log('you double clicked me');
    });
    
}

function sayHello(){
    alert('hello')
}

function sayName(){
    alert('Apna College')
}


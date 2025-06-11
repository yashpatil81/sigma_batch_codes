let inp = document.querySelector('input')

inp.addEventListener('keydown',function(event){
    //  console.log('key = ',event.key);

    console.log('key = ',event.code);  // ArrowUp , ArrowDown , ArrowLeft, ArrowRight

    if(event.code == "ArrowUp"){
        console.log('character moves forward')
    }
    
    if(event.code == "ArrowDown"){
        console.log('character moves backward')
    }
    
    if(event.code == "ArrowLeft"){
        console.log('character moves left')
    }
    
    if(event.code == "ArrowRight"){
        console.log('character moves right')
    }
});


// inp.addEventListener('keyup',function(){
//     console.log(event);  
//     console.log('key was pressed');
// });



// event has two important property code and key
// code :- key ka naam
// key :- jo key humne type ki vo show hogi


// event argument ko isliye pass kiya jata hai taaki aap event ke baare me details le sako aur uske hisaab se apna code likh sako.
// Agar aapko uss event ke details ki zarurat nahi hai, to aap argument na bhi likho to code chalega — lekin information nahi milegi
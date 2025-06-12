let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener('click', function(event){
    // console.log(event.target);  // event.target hame batata hai konsi chiz ko click kiya gaya hai
    // console.log(event.target.nodeName)  // kiski wajah se event trigger ho raha hai (li ya button ya ul etc)
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        // console.log(listItem);
         listItem.remove();
        console.log('deleted');
        
    };
});


// let delBtns = document.querySelectorAll(".delete");
// for (let delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//     });
// }



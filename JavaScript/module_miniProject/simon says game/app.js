let gameSeq = []
let userSeq = []

let btns = ['yellow', 'red' , 'purple', 'green']

let started=false;
let level = 0;

let h2 = document.querySelector('h2')

document.addEventListener('keypress',function(){
    if(started == false){
        console.log('game started');
        started= true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)
}

function userFlash(btn){
    btn.classList.add('userflash')
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250)


}

function levelUp(){
    level++;
    h2.innerText = `level ${level}`

// random btn choose
let randIdx = Math.floor(Math.random() *3)
randColor = btns[randIdx];
randBtn = document.querySelector(`.${randColor}`)
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor)
console.log(gameSeq);


 gameFlash(randBtn);
}

function checkAns(idx){
    // console.log('current level :',level);
    // let idx = level-1  (cross)
    
    if(userSeq[idx] == gameSeq[idx]){
        // console.log('same value');
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000)
        }
        
    }else{
        h2.innerText = 'Game Over! Press any key to start.'
    }
}

function btnPress(){
    console.log(this);
    let btn= this;
    userFlash(btn)
    
    userColor = btn.getAttribute('id')
    userSeq.push(userColor)
    // console.log(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn')
for(btn of allBtns){
    btn.addEventListener('click',btnPress)
}

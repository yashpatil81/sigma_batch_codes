// for(let i=1;i<=10;i++){
//     console.log(i);  
// }

// for(let i=10;i>=1;i--){
//     console.log(i);  
// }

// for(let i=15;i>=1;i=i-2){
//     console.log(i);
// }

// let n = prompt("Write your number")
// n = parseInt(n)

// for (let i =n; i <= n*10 ; i=i+n) {
//     console.log(i);
    
// }

// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
//  } 

// let i=1;
// while(i<=5){
// console.log(i);
// i++;
// }

// game

const favmovie = 'avatar'
let guess = prompt("guess my favourite movie")

while( (guess != favmovie) ) {
    if(guess == 'quit'){
        console.log("you quit");
        break;
    }
     guess = prompt("Wrong guess . please try again")   
}

if(guess == favmovie) {
    console.log("congrats!!")
}

// let i = 1
// while(i<=5) {
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
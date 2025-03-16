function hello() {
    console.log('hello')   
}


function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

// print1to5()


// function isAdult(){
//     let age = 13;
//     if(age >= 18){
//         console.log('adult');
//     }else{
//         console.log('not adult');
//     }
// }

// isAdult()


function rollDice() {
    let random = Math.floor(Math.random() * 6 ) +1
    console.log(random);
}

// rollDice()
// rollDice()
// rollDice()
// rollDice()


function sum(a,b){
    return a+b
}

// s = sum( sum(1,2) , 3)
// console.log(s);


// sum(1,2)
// sum(4,5)
// sum(7,8)

function printTable(n){
    for(i = n;i<=n*10;i+=n){
        console.log(i);
    }
}

// printTable(2)

// make a function to calculate sum of all numbers from 1 to n

sum = 0;
function getSum(n){
    for(let i=1; i<=n; i++){
        sum = sum + i
    }
    return sum
}

// console.log(getSum(100));


// make a function to concatinate multiple strings string
let str = ['hi','hello','bye','!']

function concat(string){
    let result = ''
    for(let i = 0; i<string.length;i++){
        result = result + str[i]
    }
    return result;
}
console.log(concat(str));
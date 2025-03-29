// every
// it acts as a AND gate where the given cond'n is true for all elements 
// then it will give true otherewise false

let nums = [2 ,4 ,6,8]

let even = nums.every( (el) => {
    return el %2 == 0 
})

// console.log(even)

// some 
// it acts as a OR gate 


let num = [2 ,4 ,5,8]

let odd = num.some( (el) => {
    return el %2 != 0 
})

console.log(odd)
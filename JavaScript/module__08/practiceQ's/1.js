// 1. 

let nums = [10,20,30,40,5]

// let ans = nums.every( (el) => el % 10 == 0)

// console.log(ans);



// 2. 

// let min = nums.reduce( (min , el) =>{
//     if(min < el){
//         return min
//     }else{
//         return el 
//     }
// })

// console.log(min);

// now we can create a function from same logic
function getMin(nums){
    let min = nums.reduce( (min , el) =>{
        if(min < el){
            return min
        }else{
            return el 
        }
    })
    
    return min;
}

console.log(getMin(nums));
console.log(getMin([1,2,3,4,5,-1,-45]));

// reduce function
// it has two parameters accumulator , element
// acc store result and element store the element of an array.

// this is logic to find sum of all elements of an array
let nums = [1,2,3,4]

let finalVal = nums.reduce( (res , el) => {
    // console.log(res);
    
    return res+el
})


// console.log(finalVal)

// to find max value element in an array

let arr = [1,2,33,5,7,98,2113]

// let max = -1
// for(let i=0;i< arr.length;i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max);


let num = arr.reduce((max , el) =>{
    if(max<el){
        return el
    }else {
        return max
    }
})

console.log(num);

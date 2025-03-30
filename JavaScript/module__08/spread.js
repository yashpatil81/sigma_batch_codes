// default parameters

function sum(a , b=2) {
    return a+b
}

// console.log(sum(1,3))
// console.log(sum(1))  // here it directly takes value of b =2



// spread operator 
// arr = [ 1,2,34,47,57,8,587,-22]
// arr1 = [ 1,2,-1111233,34,497,57,8,587,-22]

// console.log(Math.min(...arr))
// min = Math.max(...arr1)
// console.log(min);

// console.log(...arr);

// console.log(...'yash patil');

// spread in array literals

// let arr = [1,2,3,4,5]
// let newArr = [...arr]
// console.log(newArr)

// let chars = [...'hello']
// console.log(chars)

// let odd = [1,3,5,7,9]
// let even = [2,4,6,8,10]

// let nums = [...odd, ...even]
// console.log(nums)


const data = {
    email: 'ironman@gmail.com',
    password :'abcd'
};

const dataCopy = { ...data,id:123 ,country : "India"}
console.log(dataCopy)

let arr = [1,2,3,4,5] // val 
let ob1 = { ...arr} // obj -> key:val
console.log(ob1)  // here index becomes key and elements of array become values

let obj2 ={ ...'hello'}  
console.log(obj2)  // here index becomes key and elements of String become values








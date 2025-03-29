let num = [1,2,3,4]

 let double = num.map((el) =>{
    return el *2;
});

// console.log(double)
// maps ke use se elements ke upar jo bhi operations kar rahe hai 
// amp usko new array me store karta hai jaise ki double me 
// [2,4,6,8] store hai




let students = [
    {
        name: 'aman',
        marks: 95,
    }, 
    {
        name: 'shradha',
        marks: 94.4,
    },
     {
        name: 'rajat',
        marks: 92,
    }
]

let gpa = students.map( (el) =>{
    return (el.marks)/10
})

// console.log(gpa);    // [ 9.5, 9.440000000000001, 9.2 ]  
// 2nd value 9.44000001 due to floating value precision its just a small computer error

// -------------------*********************-----------------------------

// filter

// it is used to filter the elements from a given array give a condition in 
// in return statement if cond'n is true thn the element is added to the resultant array

let nums = [1,2,3,4,5,6,7,8,9,10,12,11]
let ans = nums.filter( (el) => {
    return el %2 ==0  // true -> true , odd -> false
})

console.log(ans);

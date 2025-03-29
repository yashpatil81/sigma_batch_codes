// let arr = [1,2,3,4,5]

// arr.forEach( (el) => {
//     console.log(el); 
// })


// arr.forEach(function(el){
//     console.log(el);
// })

// let print = function(el){
//     console.log(el);
// }

// arr.forEach(print)


let arr = [
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

arr.forEach( function(student){
    console.log(student.marks)
})
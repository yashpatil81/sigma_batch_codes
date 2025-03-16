const classInfo = [
     {  
        name : 'aman',
        grade : 'A+',
        city : 'Delhi'
    },
     {
        name : 'shradha',
        grade : 'A',
        city : 'pune'
    },
    {
        name : 'karan',
        grade : 'O',
        city : 'Mumbai'
    },
];

console.log(classInfo);
console.log(classInfo[1]);
console.log(classInfo[2]);
console.log(classInfo[1].name);
console.log(classInfo[1].city);
classInfo[1].city = 'Gurgaon'
console.log(classInfo[1]);

classInfo[1].gender = 'Female'

console.log(classInfo[1]);


// math properties and functions 

console.log(Math.floor(Math.random()*10 +(1)));

// between 21 to 25 only
console.log(Math.floor(Math.random()*5 ) + 21)


// cars = ["toyota",'xuv','maruti','bmw','ferrari']
// console.log(cars.sort());
// let chars = ['b','d','e','a']
// console.log(chars.sort());

// first it converts the given numbers into string and then sort it so 100 comes first
// let marks = [99,89,67,42,100]
// console.log(marks.sort());

// practice  , p1
// let months = ["january" , "july" , "march", "august"]
// console.log( months.splice(0,2,"july",'june'))
// console.log(months);

// p2
// lang = ['c','c++','html','javascript','python','java','c#','sql']
// console.log(lang.reverse().indexOf("javascript"));



// console.log('name'=='name');
// console.log([1]==[1]); // in dono arrays ko alag alag nayi memories mili hai isliye jab in dono ko compare karege to unke address compare hoge isliye ans is False 
// console.log([]==[]);
// console.log([] === []);

let arr = ['a','b','c']
let arrCopy = arr;
console.log(arr==arrCopy)
console.log(arr===arrCopy) // true becoz they both have same address
// so any changes made to arr will also be seen in arrCopy
arr.push('d')
console.log(arr)
console.log(arrCopy)
arrCopy.pop()
console.log(arr);
console.log(arrCopy)

arrCopy = ['a','b','c'] // as we assign new value to arrCopy now it has different address so any changes made to arr will not be seen in arrCopy
arr.push('d')
console.log(arr);
console.log(arrCopy)

/* Note References == Address in Programming */
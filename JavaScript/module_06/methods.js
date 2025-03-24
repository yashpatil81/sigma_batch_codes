// jo functions Objects ke ander define hote hai unhe methods kahate hai

// const calculator = {
    
//     add: function(a,b){
//         return a+b
//     },
//     sub: function(a,b){
//         return a-b
//     },
//     mul: function(a,b){
//         return a*b
//     }
// }

// shortHand of methods
const calculator = {

    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b
    },
    mul(a,b){
        return a*b
    }
}

console.log(calculator);

console.log(calculator.add);
console.log(calculator.add(1,2));

console.log(calculator.add(5,6));
console.log(calculator.sub(5,6));
console.log(calculator.mul(5,6));

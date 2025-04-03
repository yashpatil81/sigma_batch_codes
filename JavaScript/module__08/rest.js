// arguments is a collection 
function sum(...args){
    // arguments
    for( let i =0;i<args.length;i++){
        console.log('you gave us:',args[i]);
    }
}
// sum(1,2,3,4)

function min() {
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1) 
    // l.no 13 throwing error becoz arguments are collection not array
}

// min(1,2,3,4)


function sum(...args){
    return args.reduce( (sum,el) => sum + el)
}

// console.log(sum(1,2,3,4))
function min(msg,...args){
    console.log(msg);
    
    // dry run it one time
    return args.reduce( (min,el) => {
        if(min > el){
            return el
        }else{
            return min;
        }
    })
}

console.log(min('hello',1,2,-33,45,61));


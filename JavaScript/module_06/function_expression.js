// function expression here function does not have a name rather it is stored in a variable

let sum = function(a,b){
    return a+b
}

// console.log(sum(1,2));

let hello = function(){
    console.log('hello');
    
}

hello = function(){
    console.log('namaste');
    
}
// hello()


function multipleGreet(func, count){  // higher order function
    for(let i=1; i<=count; i++){
        func();
    }
}

let greet = function (){
    console.log("hello");
    
}

// multipleGreet(greet,10)
multipleGreet(function() {console.log('namaste') },10)



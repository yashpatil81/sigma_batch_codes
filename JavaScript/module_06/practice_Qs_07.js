let greet = 'hello'  // global scope

function changeGreet(){
    let greet = 'namaste'  // functional scope
    console.log(greet);

    function innerGreet(){
        console.log(greet); // lexical scope
    }
}


console.log(greet);
changeGreet()
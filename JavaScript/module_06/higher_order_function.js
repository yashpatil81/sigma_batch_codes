// function oddEvenFactory(request){
//     if(request == 'odd'){
//         let odd =function(n) {
//             console.log(!(n %2==0));       
//         }
//         return odd;
//     } else if(request == 'even'){
//         let even =function(n) {
//             console.log((n %2==0));       
//         }
//         return even;
//     } else {
//         console.log('wrong request'); 
//     }
// }

// simplified form

function oddEvenFactory(request){
    if(request == 'odd'){
        return function(n) {
            console.log(!(n %2==0));       
        }
     } else if(request == 'even'){
                return function(n) {
            console.log((n %2==0));       
        }
    } else {
        console.log('wrong request'); 
    }
}

let request = 'odd'  // even 

let func = oddEvenFactory(request)  //iske ander odd function set ho gaya hai
func(3)
func(4)
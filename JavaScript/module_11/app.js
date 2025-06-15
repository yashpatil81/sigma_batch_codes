// function one(){
//     return 1
// }
// function two(){
//     return one() + one()
// }
// function three(){
//     let ans=  two() + one()
//     console.log(ans);
    
// }

// three();


//  callback hell *****************************************

// h1 = document.querySelector('h1')

// function changeColor(color,delay,nextColorChange){
//     setTimeout( ()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     } , delay)

// }

// changeColor('red',1000);



/******* */

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// callbacks nesting -> callback hell



/*****************////************************/*************** */ */ */

// callback Hell

// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() *10)+1
//     if(internetSpeed >4){
//         success()

//     } else{
//         failure()
//     }
// }

// saveToDb(
//     'apna college', () => {
//         console.log('success : your data was saved');
//         savetoDb(
//             'hello world',
//             () =>{
//                 console.log("success2 : data2 saved");
//                 savetoDb(
//                     'shradha',
//                     ()=>{
//                          console.log("success3 : data3 saved");
//                     },
//                     ()=>{
//                         console.log('failure3 : weak connection');
//                     }
//                 )
//             },
//             ()=>{
//                 console.log('failure2 : weak connection');
                
//             }
//         )
//     },
//     ()=>{
//         console.log('failure : weak connection . data not saved');
        
//     }
// )


function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

saveToDb("apna college");


// let request = saveToDb('apna college'); // req = promise object
// request
//  .then( () => {
//     console.log('promise was resolved ');
//     console.log(request);
//  })
//   .catch( () => {
//     console.log('promise was rejected');
//     console.log(request);
//   })

// more compact

 saveToDb('apna college')
 .then( () => {
    console.log('data1 saved promise was resolved ');
 })
  .catch( () => {
    console.log('promise was rejected');
  })
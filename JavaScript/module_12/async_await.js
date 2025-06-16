// async function hamesha promise object  return karega
// async function greet(){     
//     // throw 'some random error'
//     return 'hello!'
// }
// greet()
// .then( (result)=>{
//     console.log('promice was resolved');
//     console.log('result was : ', result);
// })
// .catch( (err) =>{
//     console.log('promise was rejected with err:' , err); 
// })

// // arrow function pe async
// let demo = async ()=>{
//     return 5;
// };

 
//******************************** */

// function getNum(){
//     return new Promise( (resolve,reject) =>{
//         setTimeout( () => {
//         let num = Math.floor(Math.random() *10)+1
//         console.log(num);
//         resolve()
//         },2000)
//     })
// }

// async function demo(){
//     await getNum()
//     await getNum()
//     await getNum()
//     await getNum()
//     getNum();
// }


/*/************************************ */

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() *5)+1
            if(num> 3) {
                reject('promise rejected')
            };
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
  try{
      await changeColor('red' , 1000)
    await changeColor('orange' , 1000)
    await changeColor('green' , 1000)
    changeColor('green' , 1000)
  } catch (err) {
    console.log('error caught');
    console.log(err);
  }
    let a =5
    console.log(a);
    console.log('New Number = ',a+3);
}





















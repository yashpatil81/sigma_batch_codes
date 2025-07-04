// let n=5;


// for(let i=0;i<n;i++){
    //     console.log('hello', i);
    // }
    
    // console.log('hello');
    
    // let args = process.argv
    // console.log(args);
    
    // for(let i =2;i<args.length;i++){
    //     console.log('hello & welcome to ',args[i]);       
    // }

    // let someValue = require('./math')
    // console.log(someValue);
    
//    const math = require('./math')

//    console.log(math);
//    console.log(math.sum(2,2));
//    console.log(math.pi);
   


//**************************************** */

// const info = require('./fruits')
// console.log(info);
// console.log(info[0].name);


// (express js and react js) ye packages hai jo node ke andar available hote hai

// node modules ne sari dependencies install karke rakha hai aur 
// package-lock.json  ne unn dependecies se related information install kar rakhi hai


// const  figlet = require("figlet");

// figlet("Yash Patil!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });





//********************************************** */

// ya to hum kisi project me require use karte hai ya kisi me import dono use nhi karte




import {sum,pi} from "./math.js"
import {generate} from "random-words";

console.log(generate());


// console.log(sum(1,2));
// console.log(pi);


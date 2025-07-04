const express = require('express')
const app = express()
 // app obj hai 
 // express function hai 
 // listen ek web server banata hai jo incoming  api request ke liye listen karta hai


//  console.dir(app)

let port = 8080;

app.listen(port , ()=>{
    console.log(`app is listning on port ${port}`);
})

// app.use( (req,res) =>{
//     // console.log(req);
//     console.log('request received');

//     // res.send("this is a basic response")
//     // res.send({
//     //     name:'apple',
//     //     color:'red'
//     // })

//     let code = "<h1>Fruits</h1><ul><li>apples</li><li>orange</li></ul>"
//     res.send(code)
// })

// http request text based hoti hai taki dusri languages me bhi server likhe hai vo bhi inko samaj paye
// express iss text based ko hamari request (req) object ke andar convert kar deta hai jo js samaj pata hai 
// res.send() iss function ko hum use karte hai to send a response from our server
// alag a;ag routes ke hisab se alag alag responses send karne ke liye hum app ke different methods ko use kar sakte hai

// app.use() ka kaam hota hai sari ki sari request ko listen karta hai 


/**************************************************** */
// app.get() ka use get  request ka response send karne ke liye hota hai

// this is routing

app.get("/", (req,res)=>{
    res.send("hello i am root")
});

app.get("/apple", (req,res)=>{
    res.send("you contacted apple path")
});

app.get("/orange", (req,res)=>{
    res.send("you contacted orange path")
});

// ye error dega use only app.use() method 

// // other than defined routes
// app.get("/*", (req,res)=>{
//     res.send("this path does not exist")
// });

app.post("/", (req,res)=>{
    res.send("you sent a post request to root")
});
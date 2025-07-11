// installation commands
// PS C:\Users\Asus\OneDrive\Desktop\EJSDIR> npm init -y
// PS C:\Users\Asus\OneDrive\Desktop\EJSDIR> npm i ejs


const express = require("express")
const app = express()
const path = require("path");

const port = 8080;

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res) =>  {
    // res.send("this is home")
    res.render("home.ejs")
})

app.get("/hello",(req,res) =>  {
    res.send("hello")
})
  
app.get("/rolldice",(req,res) =>  {
    let diceVal = Math.floor(Math.random() *6) +1  // data aaya DB se
    // res.render("rolldice.ejs", {num : diceVal}) // we can pass an object as second parameter here the key(num) can be accessed by rolldice.ejs
    res.render("rolldice.ejs", {diceVal})
})

app.listen( port , () => {
    console.log(`listening on port ${port}`);    
})

// app ke andar ek function hota hai set naam ka jo view engine ko  set kar dega to EJS
// vo chiz ya package jo hamare view(templete ) ko create karne ke kaam aayega unko render karne (dikhane ke kaam aaehga vo hota hai EJS)

// jab hum server ko aise run karte hai
// PS C:\Users\Asus\OneDrive\Desktop\Sigma_Backend> nodemon .\EJSDIR\index.js

// backend ke folder se too hamara code views directory ko backend directory  ke andar search kar raha hai (by default) iss liye error aa raha hai .

// lekin agar hum chahate hai ki vo hamesha EJSDIR folder me search kare views directory ko too path ko require karnna hoga 


 

const express = require("express")
const app = express()
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res) =>  {
    res.render("home.ejs")
});

// app.use(express.static("public"))
app.get("/ig/:username",(req,res) =>  {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]
    // console.log(data); // data object hai jiske andar username se related pura data hai 
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    // console.log(instaData);
})

app.get("/hello",(req,res) =>  {
    res.send("hello")
})
  
app.get("/rolldice",(req,res) =>  {
    let diceVal = Math.floor(Math.random() *6) +1  
    res.render("rolldice.ejs", {diceVal})
})

app.listen( port , () => {
    console.log(`listening on port ${port}`);    
})

 


/*
// pahale vala tha ye aab new wala hai jisme data.json se data aayega 

app.get("/ig/:username",(req,res) =>  {
    let followers = ['adam','bob','steeve','abc']
    let {username} = req.params;
    res.render("instagram.ejs",{username , followers})    
})

*/

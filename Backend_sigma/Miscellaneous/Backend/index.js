const express = require("express")
const app = express()
const port = 8080;

// our express does not able to read data so we havee to parse for post request
// abhi express url encoded data ko padh sakta hai
app.use(express.urlencoded({ extended : true}));  
app.use(express.json())
// abhi express json data ko bhi padh sakta hai

app.get("/register", (req,res) =>{
    let {user,password} = req.query;
    res.send(`standard Get response. Welcome ${user}!`);
})

// in get data stored in query strings but in Post data is stored in body
app.post("/register", (req,res) =>{
    // console.log(req.body);
    let {user,password} = req.body
    res.send(`standard Post response.Welcome ${user}! `);
})


app.listen(port , () =>{
    console.log(`listening to port ${port}`);
})


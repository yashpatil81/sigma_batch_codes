const express = require('express')
const app = express()

let port = 8080;

app.listen(port , ()=>{
    console.log(`app is listning on port ${port}`);
})


app.get("/", (req,res)=>{
    res.send("hello i am root")
});


// path parameters :- 
//  https://www.instagram.com/facebook/?hl=en
// iss me facebook ek variable hai jo ki change hota rahega issi ko hum path parameters kahate hai ye ek variable hai.


app.get("/:username/:id", (req,res)=>{
    // console.log(req.params); 
    
    let {username,id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}! </h1>`

    res.send(htmlStr)
});

// url ke andar query string ko handle karne ke liye
// aab query string ke liye request ko handle karne ke liye  

app.get("/search", (req,res) =>{
    // console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`<h1>search results for query: ${q}</h1>`)
});

// iss tarike se parameters ke andar jo hum additional information bhejte hai in form of query strings vo information app.get ke ander req object me aati hai req object ke "query" parameter me aake store ho jati hai  

// EJS tool used for templating
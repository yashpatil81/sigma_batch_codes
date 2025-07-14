const express = require("express")
const app = express()
const mongoose = require("mongoose");
const path = require("path")
const Chat = require("./models/chat.js");
const methodOverride = require("method-override")

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended : true}) )
app.use(methodOverride("_method"))

main()
.then( ()=>{
    console.log("connection successful");
})
.catch( (err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}
// Index route
// as our Chat.find() is a thenable function so we have to wait for it so we use await keyword and make our function async
app.get("/chats", async(req,res) =>{
   let chats = await Chat.find() //Chat.find() ye DB se sara data laayega
 //  console.log(chats);
    res.render("index.ejs",{chats})
})

// New route
app.get("/chats/new",(req,res) =>{
    res.render("new.ejs")
})

// Create  route
app.post("/chats",(req,res) =>{
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date()
    })
    newChat
    .save()
    .then(( res) =>{
        console.log("chat was saved");
    })
    .catch( (err) =>{
        console.log(err);
    })
    // console.log(newChat);
    res.redirect("/chats")
})

// Edit route
app.get("/chats/:id/edit",async (req,res) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id)  // kyuki kisi bhi object ko DB me find karna ek asynchronous kaam hai so we have to use await 
    res.render("edit.ejs",{chat})
})

// Update route 
app.put("/chats/:id",async (req,res) =>{
    let {id} = req.params;
    let {msg :newMsg} = req.body
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true, new: true}
    )
    console.log(updatedChat);
    res.redirect("/chats")
})

// Destroy Route
app.delete("/chats/:id",async(req,res) =>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id)
    console.log(deletedChat);
    res.redirect("/chats");
})

app.get("/",(req,res) =>{
    res.send("root is working")
})

app.listen(8080,() =>{
    console.log("server is listening on port 8080");
})







/* mongoose ke jo models hote hai vahi DB ke andar collections  banate hai collections  */

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {  
        id : uuidv4(),
        username : "apnacollege",
        content : "I love coding"
    },
    {   
        id : uuidv4(),
        username : "shradhakhapra",
        content : "Hardwork is important to achieve sucess"
    },
    {
        id : uuidv4(),
        username : "rahulkumar",
        content : "I got selected for my 1st internship!"
    },
]

app.get("/posts", (req,res) =>{
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req,res) =>{
    res.render("new.ejs")
})

app.get("/posts/:id", (req,res) =>{
    let {id } = req.params;
    let post = posts.find( (p) => id === p.id)
    res.render("show.ejs",{post})

    // console.log(post);
    // res.send("request working")
})

app.patch("/posts/:id" , (req,res) =>{
    let {id} = req.params;
    let NewContetnt = req.body.content;
    let post = posts.find( (p) => id === p.id)
    post.content = NewContetnt;
    console.log(post);
    res.redirect('/posts') 
    // res.send("patch request working")
})

app.post("/posts", (req,res) =>{
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({ id ,username , content})
    res.redirect('/posts') // ye by default get request samajta hai
    // res.send("post request working")
    // console.log(req.body);
})

app.get("/posts/:id/edit",(req,res) =>{
    let {id} = req.params;
    let post = posts.find( (p) => id === p.id)
    res.render("edit.ejs",{post})
})

app.delete("/posts/:id",(req,res) =>{
     let {id} = req.params;
     posts = posts.filter( (p) => id !== p.id)
     res.redirect('/posts')
     
     //  res.send("delete success")▬
     //  console.log(posts);
    })

app.listen(port, () => {
    console.log("listening to port : 8080");
});

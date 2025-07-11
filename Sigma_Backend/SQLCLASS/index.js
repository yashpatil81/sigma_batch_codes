const { faker } = require('@faker-js/faker');
const mysql = require('mysql2')
const express = require("express")
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended : true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password : 'root'
})

let  getRandomUser = () => {  
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ]
};

// Home route
app.get('/', (req,res) =>{
  q = `select count(*) from user`;
  try {
   connection.query(q, (err,result) =>{
    if(err) throw err;
    let count = result[0]["count(*)"];
    // console.log(result); o/p :- [{"count(*)":103}] and we wnat only count(number i.e 103)
    res.render("home.ejs",{count})
  });
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}
})

// show route
app.get("/user", (req,res) => {
  let q = `select * from user`;
   try {
     connection.query(q, (err,users)=>{
        if(err) throw err;

        // console.log(users);
        res.render('showusers.ejs',{users})
  });
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}
})

// Edit route
app.get("/user/:id/edit", (req,res) =>{
  let {id}=  req.params;
  let q = `select * from user where id = '${id}' ` 
 
  try {
  connection.query(q, (err,result) =>{
    if(err) throw err;
    // here result is array of objects.
    let user = result[0] ;
      res.render("edit.ejs",{user});
  });
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}
})

// Update (DB) Route

app.patch("/user/:id" ,(req,res) => {
  let {id}=  req.params;
  let {password:formPass , username: newUsername } = req.body
  let q = `select * from user where id = '${id}' ` 
 
  try {
  connection.query(q, (err,result) =>{
    if(err) throw err;
    let user = result[0] ;
    if(formPass != user.password){
      res.send("Wrong password")
    } else{
      let q2 = `update user SET username = '${newUsername}' where id= '${id}' `
      // nested query run 
      connection.query(q2 , (err,result) =>{
        if(err) throw err;
        res.redirect("/user");
      })
    }
  });
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}

});

// Add New User
app.get("/user/new" ,(req,res) =>{
  res.render("new.ejs");
})

app.post("/user/new" ,(req,res) =>{
  let {username,email,password} = req.body;
  let id = uuidv4();
  let q = `INSERT INTO USER (id,username,email,password) values ( '${id}' ,'${username}' ,'${email}', '${password}' )`;
  
  try {
  connection.query(q, (err,result) =>{
    if(err) throw err;
    console.log('added new user')
    res.redirect('/user');
  });
} catch (err) {
    // res.send("some error occured");
    console.log('not done');
    
}
  
})

app.listen('8080', ()=>{
  console.log("server is listening to port 8080");
});



// users is an array of objects. of our whole data in database 

// try {
//   connection.query(q,[data], (err,result) =>{
//     if(err) throw err;
//     console.log(result); 
//   });
// } catch (err) {
//     console.log(err);
// }

// connection.end();  
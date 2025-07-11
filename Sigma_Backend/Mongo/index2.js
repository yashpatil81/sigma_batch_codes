const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');  // iski jagah async function use karege


main() .then( () =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}



const userSchema = new mongoose.Schema( {
    name:String,
    email:String,
    age:Number
})

// const Employee= mongoose.model("Employee",userSchema);
// A model is like a tool or template we use to talk to the database.
const User = mongoose.model("User",userSchema);

// we can use User.find or we can use User.findOne() 
User.findById( '687124881ea65c6b6899d436')
.then( (res) =>{
  console.log(res);
  // console.log(res[0].name);
  })
.catch( (err) =>{
  console.log(err);
})

// jo bhi instances banate hai hai models ke unn sabke pass hota hai .save()
//  method jo ki ek asynchronous method hai jo promise return karta hai


// inserting mant documents at a time 

// User.insertMany([
//   {name: "Tony" , email:"tony@gmail.com", age:50},
//   {name: "peter" , email:"peter@gmail.com", age:30},
//   {name: "Bruce" , email:"bruce@gmail.com", age:47},
// ]).then( (res) =>{
//   console.log(res);
  
// })





// const user2 = new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48,
// });

// user2
// .save()
// .then( (res) => {
//     console.log(res);
// })
// .catch( err => {
//     console.log(err);
// })







// model is just like a collection and object is like document .
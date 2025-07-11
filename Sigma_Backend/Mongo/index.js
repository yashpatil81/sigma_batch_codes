const mongoose = require('mongoose')
// all these methods are returning query object ex:-(user.updateOne and User.updateMany)


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


const User = mongoose.model("User",userSchema);

// user.updateOne and User.updateMany
// User.findOneAndUpdate( {name:"Bruce"},{age:42},{new:true})
// .then( (res) =>{
//   console.log(res);
// })
// .catch( (err) =>{
//   console.log(err);
// })


// delete documents
//

User.deleteMany( { age: 48}).then( (res) =>{
  console.log(res);
});
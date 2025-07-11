const mongoose = require('mongoose')
// all these methods are returning query object ex:-(user.updateOne and User.updateMany)


main() .then( () =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    author: {
        type:String,
    },
    price:{
        type:Number,
    },
});

const Book = mongoose.model("Book",bookSchema)

let book1 = new Book({
    title:"How to kill a mocking bird",
    author: "Harper Lee",
    price:"299",  // yaha sirf number hii nahi lekin har vo value bhej sakte hai jo number ke form me parse ho jaye
})

book1
.save()
.then( (res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
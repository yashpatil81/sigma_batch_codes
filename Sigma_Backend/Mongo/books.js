const mongoose = require('mongoose')
// all these methods are returning query object ex:-(user.updateOne and User.updateMany)


main() .then( () =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
// enum is a validater
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        maxLength:20
    },
    author: {
        type:String,
    },
    price:{
        type:Number,
        min:[1, "price is too low for amazon selling"]  // if error occurs this will print as error
    },
    discount:{
        type:Number,
        default:0
    },
    category: {
        type: String,
        enum: ["Fiction","non-Fiction"]  // we can use only Fiction and non-Fiction in category
    },
});

const Book = mongoose.model("Book",bookSchema)
// update karte time bhi schema ke validaters ko check kiya jaye uske liye hum runValidators ki value true set  karte hai
Book.findByIdAndUpdate(
    '68726107321234c147244ab2',
    {price:-100},
    {runValidators:true}
)
.then( (res)=>{
    console.log(res)
})
.catch( (err)=>{
    console.log(err.errors.price.properties.message);
    // console.log(err);
})
// let book1 = new Book({
//     title:"Marvel Ciomics v2",
//      price:"600",  // yaha sirf number hii nahi lekin har vo value bhej sakte hai jo number ke form me parse ho jaye
//     genre: ["comics","superheroes","fictiom"]
//     //  category: "Fiction"
// })

// book1
// .save()
// .then( (res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
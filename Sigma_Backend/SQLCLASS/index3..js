const { faker } = require('@faker-js/faker');
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password : 'root'
})


// to iss tarah se hum  multiple values ko pass kar sakte hai dynamically within our query by passing user into connection.query

let q = "insert into user (id , username,email,password) values ? ";
// let users = [ ['123b','123_newuserb','abc@gmail.comb','abcb'] , ['123c','123_newuserc','abc@gmail.comc','abcc'] ];

let  getRandomUser = () => {  
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ]
};

let data = [];
for(let i = 1;i<=100;i++){
  // console.log(`${i}`,getRandomUser());
  data.push(getRandomUser()) // 100 fake users
}

// Inserting new data
try {
  connection.query(q,[data], (err,result) =>{
    if(err) throw err;
    console.log(result);
   
  });
} catch (err) {
    console.log(err);
}



connection.end();  







/************************************************************* */

// jab hame ek hii set of values ko insert karna ho to 
// hum sirf ek hi row ko insert karenge iss tarah se 

// to iss tarah se hum  multiple values ko pass kar sakte hai dynamically within our query by passing user into connection.query

/*
let q = "insert into user (id , username,email,password) values (?,?,?,?)";
let user = ['123','123_newuser','abc@gmail.com','abc']
// to iss tarah se hum  multiple values ko pass kar sakte hai dynamically within our query by passin user into connection.query

// Inserting new data
try {
  connection.query(q,user, (err,result) =>{
    if(err) throw err;
    console.log(result);
   
  });
} catch (err) {
    console.log(err);
}
 */
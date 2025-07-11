const { faker } = require('@faker-js/faker');
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password : 'root'
})

// connection object ke andar query naam  ka function hota hai jiska kaam hota hai db me query run karna

let q = 'show tables';

try {
  connection.query(q, (err,result) =>{
    if(err) throw err;
    console.log(result);
    console.log(result.length);
    console.log(result[0]);
    console.log(result[1]);
  });
} catch (err) {
    console.log(err);
}

// to iss tarah se hum  multiple values ko pass kar sakte hai dynamically within our query

connection.end(); // ye hamara sql ke connection ko end karta hai.  

let  getRandomUser = () => {  // isko arrow functions bana diya
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};






// console.log(getRandomUser());

// do methods hai DB ke sath connect karne ke 1. connection form karo aur connection.query method ko run kar sakte hai apne DB ke query ko run kar sakte hai uske error aur result ko print kar sakte hai 

// 2. CLI me mysql ko khol sakte hai 
// type command in vs code terminal and enter root password
// & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p

// console.log(result);
// iska format hai [ {} , {}, ....] array  ke andar object.


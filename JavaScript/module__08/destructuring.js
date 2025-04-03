// Array destructuring
let names = ['tony','bruce','peter','steve','abc','xyz','pyq'];
// let winner = names[0]
// let runnerup = names[1]
// let secondRunnerup = names[2]

// let [winner,runnerup,...others] = names


// object destructuring

const student = {
    name : 'karan',
    age : 14,
    class : 9,
    subjects :['hindi','english','math','science'],
    username : 'karan@123',
    password : 'abcd',
    city : 'Nagpur'
}

// let {username , password} = student 
// console.log(username);
// console.log(password);

// agar city object me nhi hai to mumbai print hogi varna given city nagpur print hogi


// let {username : user , password ,  city = 'mumbai'} = student 


// console.log(username);
// console.log(user);  // now we have stored value of username in user variable

// console.log(city);


let {username : user , password ,  city : place= 'mumbai'} = student 

// console.log(city)

console.log(place)  // we have given value of city to place variable

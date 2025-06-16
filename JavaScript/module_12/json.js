 // jo api http protocol ko use karti hai 
 // yani internet ki basis par jo api interact karwati hai softwares ko unhe hum web api's kahate hai


 let jsonRes = '{"fact":"Cats and kittens should be acquired in pairs whenever possible as cat families interact best in pairs.","length":102}'
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name : 'shradha',
    marks:95,
};
jsoon = JSON.stringify(student)
console.log(jsoon);


// AJAX ka matlab hai ki hum api's ko call kar rahe hai ye calls  Asynchronously work kar rahi hai aur hamare paas kutch response aa raha hai jiske sath hum deal kar rahe hai


//     https://www.google.com/search?q=mango

// here (   q=mango   ) ye hamara key value pair hai jisko hum query string kahate hai  aur ye query string hamare normal url ko additional information provide kar rahi hai
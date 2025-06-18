let url = 'https://catfact.ninja/fact';

// fetch(url)   // ye hame ek promise return karta hai
// .then( (res) =>{
//     console.log(res);
//     // console.log(res.json());  // ye bhi ek promise deta hamare api ke andar ka data dekhne ke liye ye method use hota hai
//     // res.json() yane ki data ko parse karwana
    
//     return res.json()
// })
// .then( (data) =>{
// console.log(data);    
// console.log(data.fact);    
// })
// .catch( (err) =>{
//     console.log("ERROR -",err);
// }) 





///****************///*///////************* */ */


// ek aur baar same code for two data


fetch(url)
.then( (res) =>{
    console.log(res);
    return res.json()
})
.then( (data) =>{
    console.log('data:',data.fact);
    return fetch(url)
})
.then( (res) =>{
    console.log(res);
    return res.json()
})
.then( (data2) =>{
    console.log('data2:',data2.fact);
    return fetch(url)
})
console.log('i am happy');

//  isliye hamari calls asynchronously kaam kar rahi hai js un calls ke resolve hone ka wait nhi kar raha
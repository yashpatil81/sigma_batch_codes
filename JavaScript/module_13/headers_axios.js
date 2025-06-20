let url = "https://icanhazdadjoke.com/"

async function getJokes(){
   try {
    // iss tarah se hum pass kar sakte hai apne headers ko within our axios request.
    let config = { headers: {Accept : "application/json"}}
    let res= await axios.get(url,config)
    console.log(res.data);
    
   } catch (e) {
    console.log('error - ',e); 
   }
}

getJokes()
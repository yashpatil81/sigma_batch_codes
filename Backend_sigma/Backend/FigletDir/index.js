const  figlet = require("figlet");

figlet("Yash Patil!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// agar kabhi hamari node modules folder delete ho jaye 
// par package.json hai to node modules ko redownload kiya ja sakta hai
// go to terminal and type npm install


// aur jab bhi hum apne project ko github pe push karege tab hum node modules ko nhi sirf package.json ko upload karege




// agar hame kisi bhi directory ke liye package.json banana hai too hum likh sakte hai npm init
// npm init ki madatt se hum  ....
// npm ki help se hum package.json ko initialize kar sakte hai kisi bhi project ke liye

 
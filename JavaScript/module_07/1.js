const student = {
    name : 'aman',
    marks : 95,
    prop : this,  // global scope so window object
    getName : function() {
        console.log(this);  // function ke liye calling object so this is student
        return this.name;
    },
    getMarks : () => {
        console.log(this);  // parent's scope  -> window
        return this.marks
    },
    getInfo1: function () {
        setTimeout( () => {
            console.log(this);  // student
        }, 2000)
    },
    getInfo2: function () {
        setTimeout( function () {
            console.log(this);  // window
        }, 2000)
    },
};

// student.getName()


// getInfo1 arrow function hai uske parent ka scope hai outer function 
// amd outer function ka scope hai student object isliye this ki value 
// student object hai


//  getInfo2  normal function so jisne use call lagayi usi ko apna scope manta hai usi ko 
// apna this manta hai isliye andar wala function ka this setTimeout ka this 
// ho gaya jo ki window object hai 
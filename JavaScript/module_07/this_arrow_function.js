const  student = {
    name: 'aman',
    marks : 95,
    prop: this, // global scope  [here this represents the windowss object ]
    getName : function() {
        console.log(this);
        return this.name        
    },
    getMarks : () => {
        console.log(this);
        return this.name           
    }
};

// arrow functions me this ki value uske parent's ke this hoti hai 
// like value of this in getMarks function is this of student i.e windows object
// but in normal function value of this is its calling object 
// so  value of this in getName function is student object

// student.getName()

// normal function ke liye this uska calling object hota hai lekin 
// arrow function ke liye this uska parent's scope hota hai
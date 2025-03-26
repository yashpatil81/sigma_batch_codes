const student = {
    name : 'aman',
    marks : 95,
    prop : this,
    getName : function() {
        console.log(this);
        return this.name;
    },
}

student.getName()
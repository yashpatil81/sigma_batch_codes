// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("student class constructor");
//         super(name, age); // parent class constructor is being called
//         this.marks = marks;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age); // parent class constructor is being called
//         this.subject = subject;
//     }
// }


//************************************ */
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("woooff..");
    }

    eat() {
        console.log("dog is eating");
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow..");
    }
}
// restful api's  means aisi api jo rest ke rules (set of rules ko follow karti hai)
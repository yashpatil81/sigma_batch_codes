// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };

//   return person;
// }

// let p1 = PersonMaker("adam", 25); // copy
// let p2 = PersonMaker("eve", 25);  // copy


// Constructor - doesn't return anything &  start with caoital
// function Person(name,age){
//   this.name = name;
//   this.age = age
// }

// Person.prototype.talk = function (){
//   console.log(`hi , my name is ${this.name}`);
// }


// p1and p2 ke andar alag alag copy nhi banegi vo same copy ko refer karaega
// new function se hum ek nayi object instance ko initialize karte hai constructor ki help se
// let p1 = new Person("adam" , 25)
// let p2 = new Person("eve" , 25)
// p1.talk === p2.talk




//********************** */
class Person {
   constructor(name,age){
  this.name = name;
  this.age = age
}
talk() {
  console.log(`hi , my name is ${this.name}`);
  }
}

let p1 = new Person("adam" , 25)
let p2 = new Person("eve" , 25)

console.log(p1);

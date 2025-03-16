let primary = ["red","yelow","blue"]
let secondary = ["orange","green","violet"]

// console.log(primary.concat(secondary));
// console.log(secondary.concat(primary));
// concat method creates new array so original(primmary,secandary) array is same(unaffected)
// console.log(primary);
// console.log(secondary);

// reverse method changes original array
// console.log(primary.reverse());
// console.log(primary)

let cars = ['audi','bmw','xuv','maruti']
// console.log(cars.slice())
// console.log(cars.slice(1))
// console.log(cars.slice(1,3))
// console.log(cars.slice(3))
// console.log(cars.slice(cars.length-1))
// console.log(cars.slice(5))
// console.log(cars.slice(cars.length))

// console.log(cars.slice(-1));
// console.log(cars.slice(-2));
// console.log(cars.slice(-3));
// console.log(cars.slice(-4));
// console.log(cars.slice(-6));

// slice method does not changes original array




// splice changes original array

// cars = ["audi", 'bmw','xuv','maruti']
// console.log(cars.splice(3));
// console.log(cars)
// console.log(cars.splice(0,1))
// console.log(cars)

// cars.push("maruti")
// cars.push("ferrari")
// console.log(cars);
// console.log(cars.splice(1,2));
// console.log(cars);
// console.log(cars.splice(0,0,"toyota","xuv","maruti"));

cars = ["toyota",'xuv','maruti','bmw','ferrari']
console.log(cars);
cars.splice(1,0,"mercedes")
console.log(cars);
cars.splice(1,1,"gwagon")
console.log(cars);

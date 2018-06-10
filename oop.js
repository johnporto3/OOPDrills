// Object Literals, Pseudo Classes and methods

// 1. 

// let person1 = {
//      firstName:'Paul',
//      sayHello: function() {
//          console.log(`Hello, my name is ${this.firstName}.`);
//      }
// };
     
// let person2 = {
//     firstName:'Andrew',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.firstName}.`);
//     }
// };

// let person3 = {
//     firstName:'Mike',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.firstName}.`);
//     }
// };

// let person4 = {
//     firstName:'Frank',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.firstName}.`);
//     }
// };

// let person5 = {
//     firstName:'Bobby',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.firstName}.`);
//     }   
//  };


// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

//2.

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
//3

Person.prototype.sayHey = function() {
    console.log('Hey! My name is ' + this.name + ' I am ' + this.age + ' years old and live in ' + this.city + '.');
}

//4

let p1 = new Person ('Paul', 'Oahu', 35);
let p2 = new Person ('Andrew', 'Bristol', 35);
let p3 = new Person ('Mike', 'Huntington Beach', 35);
let p4 = new Person ('Frank', 'Riverside', 35);
let p5 = new Person ('Bobby', 'Irvine', 35);


p1.sayHey();
p2.sayHey();
p3.sayHey();
p4.sayHey();
p5.sayHey();
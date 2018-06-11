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

// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }
// //3

// Person.prototype.sayHey = function() {
//     console.log('Hey! My name is ' + this.name + ' I am ' + this.age + ' years old and live in ' + this.city + '.');
// }

// //4

// let p1 = new Person ('Paul', 'Oahu', 35);
// let p2 = new Person ('Andrew', 'Bristol', 35);
// let p3 = new Person ('Mike', 'Huntington Beach', 35);
// let p4 = new Person ('Frank', 'Riverside', 35);
// let p5 = new Person ('Bobby', 'Irvine', 35);


// p1.sayHey();
// p2.sayHey();
// p3.sayHey();
// p4.sayHey();
// p5.sayHey();




//5

// class Person {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }

//     sayHey(){
//         console.log(`Hey! my name is ${this.name}. I am ${this.age} old and live in ${this.city}.`);
//     }    
// }

// let p1 = new Person ('Paul', 'Oahu', 35);
// let p2 = new Person ('Andrew', 'Bristol', 40);
// let p3 = new Person ('Mike', 'Huntington Beach', 32);
// let p4 = new Person ('Frank', 'Riverside', 41);
// let p5 = new Person ('Bobby', 'Irvine', 25);

// p1.sayHey();
// p2.sayHey();
// p3.sayHey();
// p4.sayHey();
// p5.sayHey();



//Inheritance Section
//1

class vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log('This vehicle is a ${type}, made by ${manufacturer} and has ${wheels}.')
    }

class truck extends vehicle {
    constructor(wheels, doors, )
}
}
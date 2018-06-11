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



//Inheritance Sectiony
//1

class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log('This vehicle is a ${type}, made by ${manufacturer} and has ${wheels}.');
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, wheels, doors, bed) {
        super(ExceptionType[Truck]);
        this.manufacturer = manufacturer;
        this.wheels = wheels;
        this.doors = doors;
        this.bed = bed;
        Boolean.prototype.bed = function() {
            if (this.valueOf() == true) {
                return "truck bed";
            }
        }
    }
    aboutVehicle() {
        console.log('This vehicle is made by ${manufacturer}, it has ${wheels}, ${doors} and a ${bed}.');
    };
}

class Sedan extends Vehicle {
    constructor(manufacturer, size, mpg) {
        this.manufacturer = manufacturer;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log('This vehicle is made by ${manufacturer}, it is a ${size} sized car and gets ${mpg} miles to the gallon.');
    };
}
class Motorcycle extends Vehicle {
    constructor(manufacturer, wheels, steering, doors) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
        this.steering = steering;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log('This vehicle is made by ${manufacturer}, it has ${wheels} wheels, uses ${steering} to steer and has ${doors} doors.');
    }
}


let v1 = new Vehicle('sports car', 'Porche', 4);
let t1 = new Truck('Ford', 4, 2, 'bed');
let s1 = new Sedan('Dodge', 'Medium', 45);
let m1 = new Motorcycle('Harley Davidson', 2, 'handlebars', 0);

v1.aboutVehicle();
t1.aboutVehicle();
s1.aboutVehicle();
m1.aboutVehicle();

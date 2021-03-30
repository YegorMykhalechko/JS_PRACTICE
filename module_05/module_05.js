'use strict'
// Задание1
// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof"
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com"
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// Задание2
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   };

//   getInfo() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//   }
// };

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers


// Задание3
// class Storage {
//   constructor(items) {
//     this.items = items;
//   };

//   getItems() {
//     return this.items;
//   };

//   addItem(item) {
//     return items.push(item);
//   };

//   removeItem(item) {
//     const idx = items.indexOf(item);
//     if (idx) {
//       items.splice(idx, 1);
//     };
//   };
// };

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// Задание4
// class StringBuilder {
//   constructor(_value) {
//     this._value = _value;
//   };

//   get value() {
//     return this._value;
//   };

//   append(str) {
//     this._value = this._value + str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='


// Задание5
class Car {

  constructor(obj) {
    this.speed = 0;
    this.price = obj.price;
    this.maxSpeed = obj.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  };

  static getSpecs(car) {
    console.log(car);
  };

  get price() {
    return this._price;
  };

  set price(newPrice) {
    return this._price = newPrice;
  };

  turnOn() {
    this.isOn = true;
  };

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  };

  accelerate(value) {
    if (this.maxSpeed > value + this.speed); {
      this.speed += value;
    };
  };

  decelerate(value) {
    if (this.speed > 0){
      this.speed -= value;
    };
   };

  drive(hours) {
    if (this.isOn){
      this.distance += hours * this.speed;
    };
   };
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000


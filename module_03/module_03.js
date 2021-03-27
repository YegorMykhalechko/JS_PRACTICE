'use strict'

// Задание 1
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: 'true',
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = 'false';

// const keys = Object.keys(user);

// for(const key of keys){
//     console.log(`${key}: ${user[key]}`)
// }


// Задание2
// const countProps = (obj) => {

//     const array = Object.entries(obj);
//     return array.length;
// };

// console.log(countProps({}));

// console.log(countProps({ name: 'Mango', age: 2 }));

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


// Задание3
// const findBestEmployee = (employees) => {
//     // let bestEmployees;
//     // let employee = 0;
//     // for (const key in employees) {
//     //     if (employees[key] >= employee) {
//     //         employee = employees[key];
//     //         bestEmployees = key;
//     //     }
//     // }
//     // return bestEmployees;

//     const values = Object.values(employees);
//     const maxValue = Math.max(...values);
//     const index = values.indexOf(maxValue);
//     const key = Object.keys(employees);  
//     const bestEmployees = key[index];
//     return bestEmployees;
// };

// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux


// Задание4
// const countTotalSalary = (employee) => {
//     const values = Object.values(employee);
//     const employeeName = Object.keys(employee);

//     let sumValue = 0;
//     for (let value of values) {
//         sumValue += value
//     }
//     return `Общая зарплата для ${employeeName} = ${sumValue}`
// }

// console.log(countTotalSalary({})); // 0

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400


// Задание5
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// // const getAllPropValues = (arr, prop) => {
// //     let objProp = [];
// //     for (let obj of arr) {
// //         if (obj[prop] !== undefined) {
// //             objProp.push(obj[prop]);
// //         };
// //     };

// //     return objProp;
// // };


// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []


// Задание6
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = (allProdcuts, productName) => {
//     for (let obj of allProdcuts) {
//         if (productName === obj.name) {
//             let price = obj.price * obj.quantity;
//             return price;
//         }
//     }
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800


// Задани7
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };



// const account = {

//   balance: 0,

//   transactions: [],

//   startId: 1,


//   createTransaction(amount, type) {
//     let id = this.startId;
//     this.transactions.push({ id, amount, type });
//     this.startId += 1;
//   },


//   deposit(amount) {
//     let type = Transaction.DEPOSIT;
//     this.balance += amount;
//     this.createTransaction(amount, type);
//   },


//   withdraw(amount) {
//     if (amount <= this.balance) {
//       let type = Transaction.WITHDRAW;
//       this.balance -= amount;
//       this.createTransaction(amount, type);
//       return
//     }
//     alert(`Cнятие такой суммы не возможно, недостаточно средств`)
//   },


//   getBalance() {
//     return this.balance;
//   },


//   getTransactionDetails(id) {
//     for (let objTransaction of this.transactions) {
//       if (objTransaction.id === id) {
//         return objTransaction;
//       }
//     }
//   },


//   getTransactionTotal(type) {
//     let total = 0;
//     for (let objTransaction of this.transactions) {
//       if (objTransaction.type === type) {
//         total += objTransaction.amount
//       }
//     }
//     return total;
//   },
// };

// account.deposit(100);
// console.log('Баланс после добавления 100 = ' + account.getBalance());
// account.deposit(10);
// console.log('Баланс после добавления 10 = ' + account.getBalance());
// account.withdraw(20);
// console.log('Баланс после снятия 20 = ' + account.getBalance());
// account.withdraw(40);
// console.log('Баланс после снятия 40 = ' + account.getBalance());

// console.log(`Детали транзакции: `);
// console.log(account.getTransactionDetails(1));

// console.log('Сумма всех транзакций этого типа: ' + account.getTransactionTotal(Transaction.DEPOSIT));
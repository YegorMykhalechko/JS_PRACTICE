'use strict'

// Задание 1
// const logItems = function (array) {
//     let giveArray;
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${i + 1}-${array[i]}`);
//     }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// Задание 2
// const calculateEngravingPrice = function (message, pricePerWord) {

//     const messageArray = message.split(' ');

//     const messageArrayLength = messageArray.length;

//     const price = messageArrayLength * pricePerWord;

//     return price;
// };


// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus', 10,
//     ),
// );

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus', 20,
//     ),
// );

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// );


// Задание 3
// const findLongestWord = function (string) {
//     const isArray = string.split(' ');
//     let longestWord = isArray[0].length;
//     let word;
//     for (let i = 0; i < isArray.length; i += 1) {
//         let isWordLength = isArray[i].length;
//         if (longestWord <= isWordLength) {
//             longestWord = isWordLength;
//             word = isArray[i];
//         };
//     };
//     return word;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


// Задание 4
// const formatString = function (string) {
//     const stringLength = string.length;

//     if (stringLength > 40) {

//         let array = string.split('');

//         let newArray = array.slice(0, 40);

//         let validArray = newArray.concat(['...']);

//         let newString = validArray.join('');

//         return newString;
//     }
//     return string;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// console.log(formatString('Curabitur ligula sapien.'));

// console.log(
//     formatString(
//         'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
// );


// Задание 5
// const checkForSpam = function (message) {
//     const text = message.toLowerCase()
//     const array = text.split(/\b/);
//     return array.includes('sale') || array.includes('spam');
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// Задание 6
// const sumOfNumber = function () {
//     let input;
//     const numbers = [];
//     let total = 0;

//     input = prompt('Введите число...');

//     while (input !== null) {
//         if (isNaN(input)) {
//             input = prompt('Было введено не число, попробуйте еще раз');
//         } else {
//             numbers.push(input);
//             input = prompt('Введите число...');
//         }

//     }
//     for (let number of numbers) {
//         let isNumber = Number(number);
//         total += isNumber;
//     }
//     return alert(`Общая сумма чисел равна ${total}`);
// }
// sumOfNumber();


// Задание 7
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// // let login = prompt('Введите логин...');
// let login;

// const isLoginValid = function (login) {
//     if (login.length < 4 || login.length > 16){
//         alert('Ошибка! Логин должен быть от 4 до 16 символов')
//         return false
//     }
//     return true
// };

// const isLoginUnique = function(allLogins, login) {
//     if( allLogins.includes(login)){
//         alert('Такой логин уже используется!');
//         return false;
//     }
//     return true;
// };

// const addLogin = function (allLogins, login) {
//     if (isLoginValid(login) && isLoginUnique(allLogins, login)){
//         logins.push(login);
//         alert('Логин успешно добавлен!')
//     }
// };

// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
'use strict'

// Задание 1

// const name = 'Генератор защитного поля';

// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);


// Задание 2

// const total = 100;

// const ordered = 50;

// let message;

// if (total >= ordered) {
//     message = 'Заказ оформлен, с вами свяжется менеджер'
//     alert (message);
// } else {
//     message = 'На складе недостаточно твоаров!'
//     alert (message);
// }


// Задание 3

// const ADMIN_PASSWORD = 'jqueryismyjam';

// let message;

// const inputPassword = prompt('Введите пароль...');
// console.log(inputPassword);

// if (inputPassword === null) {
//     message = 'Отменено пользователем';
//     alert(message);
// } else if (inputPassword === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//     alert(message);
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
//     alert(message);
// }


// Задание 4

const credits = 23580;

const pricePerDroid = 3000;

const inputAmountDroid = prompt('Введите количество...');
console.log(inputAmountDroid);

let message;

let totalPrice;

switch (inputAmountDroid) {
    case null:
        message = 'Отменено пользователем';
        alert(message);
        break;

    case !isNaN(inputAmountDroid) || inputAmountDroid:
        alert("Введите число...")
        break;

    default:
        totalPrice = inputAmountDroid * pricePerDroid;
        if (totalPrice > credits) {
            message = 'Недостаточно средств на счету!';
            alert(message);
        } else {
            message = `Вы купили ${inputAmountDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
            alert(message);
        }
}


// Задание 5 

// const country = prompt('Введите страну...');

// const validCountry = String(country.toLowerCase());
// console.log(validCountry);

// let message;

// let price;

// switch (validCountry) {
//     case 'китай':
//         price = 100;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`
//         alert(message);
//         break;

//     case 'чили':
//         price = 250;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`
//         alert(message);
//         break;

//     case 'австралия':
//         price = 170;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`
//         alert(message);
//         break;

//     case 'индия':
//         price = 80;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`
//         alert(message);
//         break;

//     case 'ямайка':
//         price = 120;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`
//         alert(message);
//         break;

//     default:
//         message = 'В вашей стране доставка не доступна';
//         alert (message);

// }


// Задание 6

// let input;

// let total = 0;

// let message;

// input = prompt('Введите число...')

// while (input !== null) {
//     if (isNaN(input)) {
//         input = prompt('Было введено не число, попробуйте еще раз');п
//     } else {
//         total += Number(input);
//         input = prompt('Введите число...');
//     }
// }

// message = `Общая сумма чисел равна ${total}`;
// alert(message);





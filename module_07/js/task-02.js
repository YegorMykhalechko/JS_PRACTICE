'use strict'
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

function createItem() {
    const ingredient = ingredients.forEach(ingredient => {
        const list = document.querySelector('ul');
        const item = document.createElement('li');
        item.textContent = ingredient;
        list.append(item);
    });
};
createItem();









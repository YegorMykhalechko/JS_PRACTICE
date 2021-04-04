'use strict'
function createBlockFirst() {
    const item = document.createElement('li');
    item.classList.add('item')
    const header = document.createElement('h2');
    header.textContent = 'Животные';
    const list = document.createElement('ul');
    const listItemFirst = document.createElement('li');
    listItemFirst.textContent = 'Кот';
    const listItemSecond = document.createElement('li');
    listItemSecond.textContent = 'Хомяк';
    const listItemThird = document.createElement('li');
    listItemThird.textContent = 'Лошадь';
    const listItemFourth = document.createElement('li');
    listItemFourth.textContent = 'Попугай';
    list.append(listItemFirst, listItemSecond, listItemThird, listItemFourth);
    item.append(header, list);
    return item;
}
const itemFirst = createBlockFirst();
function createBlockSecond() {
    const item = document.createElement('li');
    item.classList.add('item')
    const header = document.createElement('h2');
    header.textContent = 'Продукты';
    const list = document.createElement('ul');
    const listItemFirst = document.createElement('li');
    listItemFirst.textContent = 'Хлеб';
    const listItemSecond = document.createElement('li');
    listItemSecond.textContent = 'Петрушка';
    const listItemThird = document.createElement('li');
    listItemThird.textContent = 'Творог';
    list.append(listItemFirst, listItemSecond, listItemThird);
    item.append(header, list);
    return item;
}
const itemSecond = createBlockSecond();
function createBlockThird() {
    const item = document.createElement('li');
    item.classList.add('item')
    const header = document.createElement('h2');
    header.textContent = 'Технологии';
    const list = document.createElement('ul');
    const listItemFirst = document.createElement('li');
    listItemFirst.textContent = 'HTML';
    const listItemSecond = document.createElement('li');
    listItemSecond.textContent = 'CSS';
    const listItemThird = document.createElement('li');
    listItemThird.textContent = 'JavaScript';
    const listItemFourth = document.createElement('li');
    listItemFourth.textContent = 'React';
    const listItemFirth = document.createElement('li');
    listItemFirth.textContent = 'Node';
    list.append(listItemFirst, listItemSecond, listItemThird, listItemFourth, listItemFirth);
    item.append(header, list);
    return item;
}
const itemThird = createBlockThird();
const categories = document.querySelector('ul');
categories.append(itemFirst, itemSecond, itemThird);

const taskFirst = document.querySelectorAll('li.item');
console.log(`В списке ${taskFirst.length} категории.`);

const taskSecond = document.querySelectorAll('h2');
taskSecond.forEach(item => {
    console.log(item.firstChild);
    console.log(item.nextSibling.children.length);
})









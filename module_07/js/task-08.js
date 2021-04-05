'use strict'
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
    const amount = +document.querySelector('#controls input').value;
    createBoxes(amount);
}

function createBoxes(amount) {
    const basicSize = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        const size = basicSize + 10;
        const div = document.createElement("div");
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.append(div);
    }
    boxes.append(fragment);
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

function random() {
    return Math.floor(Math.random() * 256);
}


'use strict'
let counterValue = 0;

function increment() {
    counterValue += 1;
    const value = document.querySelector('#value');
    value.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    const value = document.querySelector('#value');
    value.textContent = counterValue;
}



// function decrement(){

// };

const buttonIncrement = document.querySelector('[data-action="increment"]');
buttonIncrement.addEventListener('click', increment);

const buttonDecrement = document.querySelector('[data-action="decrement"]');
buttonDecrement.addEventListener('click', decrement);

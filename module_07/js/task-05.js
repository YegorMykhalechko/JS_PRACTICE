'use strict'
const inputName = document.querySelector('#name-input');
inputName.addEventListener('input', rename);

const nameOutput = document.querySelector('#name-output');

function rename(e){
    if (e.target.value === ''){
    nameOutput.textContent = 'незнакомец';
    return
    }
    nameOutput.textContent = e.target.value;
}




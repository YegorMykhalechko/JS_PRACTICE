'use strict'
const inputName = document.querySelector('#name-input');
inputName.addEventListener('input', rename);

const nameOutput = document.querySelector('#name-output');

function rename(name){
    if (name.target.value === ''){
    nameOutput.textContent = 'незнакомец';
    return
    }
    nameOutput.textContent = name.target.value;
    console.log(nameOutput.textContent)
    
}




'use strict'
const input = document.querySelector('#validation-input');
input.addEventListener('input', validInput);

function validInput(){
    if(input.value.length === +input.getAttribute('data-length')){
        input.classList.remove('invalid')
        input.classList.add('valid');
        return;
    }
    input.classList.add('invalid');
};

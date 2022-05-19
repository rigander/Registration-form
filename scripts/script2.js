const password = document.getElementById('pass1');
const togglePassword = document.getElementById('togglePassword');
const repeatPassword = document.getElementById('pass2');
const toggleRepeatPassword = document.getElementById('togglePassword2');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const submit = document.querySelector('#submit');
const i = document.querySelector('#togglePassword');
i.style.visibility = 'hidden';
const i2 = document.querySelector('#togglePassword2');
i2.style.visibility = 'hidden';


const check = function() {
    if (password.value === repeatPassword.value) {
        message.style.color = 'green';
        message.innerHTML = 'password matching';
    } if(password.value !== repeatPassword.value) {
        message.style.color = 'red';
        message.innerHTML = 'password not matching';
        submit.disabled = true;
    }
}
password.addEventListener('keydown', check);

const emptyPassFieldsCheck = function () {
    if(password.value === '') {
        message.style.color = 'red';
        message.innerHTML = 'Please Fill Up Password Fields';
        submit.disabled = true;
    }
}
submit.addEventListener('click', emptyPassFieldsCheck);

const password = document.getElementById('pass1');
const togglePassword = document.getElementById('togglePassword');
const repeatPassword = document.getElementById('pass2');
const toggleRepeatPassword = document.getElementById('togglePassword2');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');


const check = function() {
    if (password.value === repeatPassword.value) {
        message.style.color = 'green';
        message.innerHTML = 'password matching';
    } if(password.value !== repeatPassword.value) {
        message.style.color = 'red';
        message.innerHTML = 'password not matching';
    }
}
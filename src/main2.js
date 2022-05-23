const password = document.getElementById('pass1');
const repeatPassword = document.getElementById('pass2');
const phone = document.querySelector('#phone');
const phoneMessage = document.querySelector('#invalidPhone');
const passwordsNotEqual = document.getElementById('passwordsNotEqual');
const message2 = document.getElementById('message2');
const submit = document.querySelector('#submit');
const checkPass2 = document.querySelector('#checkPass');
const checkPass = document.querySelector('#password');
const dateInput = document.querySelector('#dateOfB');


// Phone Pattern
function phonePattern(phone)
{
        if(phone.value.match(/^\+\d{12}$/))
    {
        phoneMessage.innerHTML = 'Looks Good';
        phoneMessage.style.color = 'Green';
    }
    else
    {
        phoneMessage.innerHTML = 'Wrong Tel.Number. Follow Pattern';
        return submit.disabled = true;
    }
}
submit.addEventListener('click', () =>{
    phonePattern(phone);
});


// Creating checkbox for password and checkbox event
let checkbox2 = document.createElement('input');
checkbox2.type = "checkbox";
checkbox2.name = "name2";
checkbox2.value = "value";
checkbox2.id = "id";
let checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id2";
checkPass2.appendChild(checkbox2);
checkPass.appendChild(checkbox);

checkbox.onchange = function (){
    if (checkbox.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
};
checkbox2.onchange = function (){
    if (checkbox2.checked) {
        repeatPassword.type = 'text';
    } else {
        repeatPassword.type = 'password';
    }
}


//Check if Password equals Repeat Password
const check = function() {
    if (password.value === repeatPassword.value) {
        passwordsNotEqual.style.color = 'green';
        passwordsNotEqual.innerHTML = 'Password Matching';
    } if(password.value !== repeatPassword.value) {
        passwordsNotEqual.style.color = 'red';
        passwordsNotEqual.innerHTML = 'Password Not Matching';

    }
}
password.addEventListener('keypress', check);
repeatPassword.addEventListener('keypress', check);

const emptyPassFieldsCheck = function () {
    if(password.value === '') {
        message.style.color = 'red';
        message.innerHTML = 'Please Fill Up Password Fields';

    }
}
submit.addEventListener('click', emptyPassFieldsCheck);

//Password difficulty validation
password.addEventListener('keydown', function () {
            let validated =  true;
        if(this.value.length < 8)
            validated = false;
        if(!/\d/.test(this.value))
            validated = false;
        if(!/[a-z]/.test(this.value))
            validated = false;
        if(!/[A-Z]/.test(this.value))
            validated = false;
        if(/[^0-9a-zA-Z]/.test(this.value))
            validated = false;
        if(validated) {
            message2.innerHTML = 'Strong Password';
            message2.style.color = 'green';
        }
        if(!validated) {
            message2.innerHTML = 'Weak Password';
            message2.style.color = 'red';
        }

  });





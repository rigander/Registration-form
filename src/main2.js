const name = document.getElementById('name');
const familyName = document.getElementById('fName');
const invalidFamilyName = document.getElementById('invalidFName');
const invalidName = document.getElementById('invalidName');
const dateInput = document.querySelector('#dateOfB');
const invalidDate = document.getElementById('invalidDOB');
const male = document.getElementById('radioButton1');
const female = document.getElementById('radioButton2');
const other = document.getElementById('radioButton3');
const invalidGender = document.getElementById('invalidGender');
const email = document.getElementById('email');
const invalidEmail = document.getElementById('invalidEmail');
const password = document.getElementById('pass1');
const repeatPassword = document.getElementById('pass2');
const phone = document.querySelector('#phone');
const phoneMessage = document.querySelector('#invalidPhone');
const passwordsNotEqual = document.getElementById('passwordsNotEqual');
const invalidPassword = document.getElementById('invalidPass');
const invalidConfirmPassword = document.getElementById('invalidRepeatPass');
const submit = document.querySelector('#submit');
const checkPass2 = document.querySelector('#checkPass');
const checkPass = document.querySelector('#password');



//Validator
function elValidate() {
    if ( (validateName() === false)||(validateFamilyName() === false)||
        (validateDateOfBirth() === false)||(validateGenderCheck() === false)
        ||(validateEmail() === false) ) {
         return   console.log('submit not permitted');
        } else {
        console.log('submit permitted');
        }
}

// Validate first name
function validateName() {
     if (name.value.length <= 2) {
        name.style.borderColor = 'Red';
        invalidName.innerHTML = "Fill up your First Name";
        validation = false;
    } else {
        invalidName.innerHTML = 'Looks Good';
        invalidName.style.color = 'green';
        name.style.borderColor = 'green';
        validation = true;
    }
     return validation;
}

// Validate family name
function validateFamilyName() {
    if (familyName.value.length <= 2) {
        familyName.style.borderColor = 'red';
        invalidFamilyName.style.color = 'red';
        invalidFamilyName.innerHTML = "Fill up your Family Name";
        validation = false;

    } else {
        invalidFamilyName.innerHTML = 'Looks Good';
        invalidFamilyName.style.color = 'green';
        familyName.style.borderColor = 'green';
        validation = true;

    }
    return validation;
}

// Validate date of birth
function validateDateOfBirth() {
    if (dateInput.value.length < 10) {
        dateInput.style.borderColor = 'red';
        invalidDate.style.color = 'red';
        invalidDate.innerHTML = "Fill up your Date of Birth";
        validation = false;

    } else {
        invalidDate.innerHTML = 'Looks Good';
        invalidDate.style.color = 'green';
        dateInput.style.borderColor = 'green';
        validation = true;
    }
    return validation;
}

// Validate gender checkbox
function validateGenderCheck() {
    validation = !!((male.checked) || (female.checked) || (other.checked));
    if (!validation){
        invalidGender.innerHTML = 'Choose your gender';
    } else {
        invalidGender.innerHTML = 'Looks good';
        invalidGender.style.color = 'green'
    }
    return validation;
}

//Validate e-mail

function trim(s) {
    return s.replace(/^\s+|\s+$/, ''); // removes whitespace
}
function validateEmail() {
    let trimEmail = trim(email.value);
    const emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    const illegalChars = /[()<>,;:\\"\[\]]/;

    if (email.value === '') {
        email.style.borderColor = 'red';
        invalidEmail.style.color = 'red';
        invalidEmail.innerHTML = 'Please enter an email address';
        validation = false;
    } else if(!emailFilter.test(trimEmail)) {
        email.style.borderColor = 'red';
        invalidEmail.style.color = 'red';
        invalidEmail.innerHTML = 'Please enter a valid email';
        validation = false;
    } else if (email.value.match(illegalChars)) {
        email.style.borderColor = 'red';
        invalidEmail.style.color = 'red';
        invalidEmail.innerHTML = 'Email contains invalid characters';
        validation = false;
    } else {
        email.style.borderColor = 'green';
        invalidEmail.style.color = 'green';
        invalidEmail.innerHTML = 'Looks Good';
        validation = true;
    }
    return validation;
}



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
        passwordsNotEqual.innerHTML = 'Passwords Matching';
    } if(password.value !== repeatPassword.value) {
        passwordsNotEqual.style.color = 'red';
        passwordsNotEqual.innerHTML = 'Passwords Not Matching';

    }
}
password.addEventListener('keypress', check);
repeatPassword.addEventListener('keypress', check);

const emptyPassFieldsCheck = function () {
    if(password.value === '') {
        invalidPassword.style.color = 'red';
        invalidPassword.innerHTML = 'Please Fill Up Password Fields';

    }
}
submit.addEventListener('click', emptyPassFieldsCheck);

//Password difficulty validation
password.addEventListener('keydown', function () {
            let validated =  true;
        if(this.value.length < 8)
            validated = false;
        if(!/[^\d][^a-z][^A-Z][^0-9a-zA-Z]/.test(this.value))
            validated = false;
        if(validated) {
            invalidConfirmPassword.innerHTML = 'Strong Password';
            invalidConfirmPassword.style.color = 'green';
        }
        if(!validated) {
            invalidConfirmPassword.innerHTML = 'Weak Password';
            invalidConfirmPassword.style.color = 'red';
        }
  });





const password = document.getElementById('pass1');
const submit = document.querySelector('#submit');
const questionnaire = document.getElementById('select');
const errorMessage = document.querySelectorAll('.valid-feedback');
const input = document.querySelectorAll('input');


//Submit Data (AJAX Post)
submit.addEventListener('click', (event)=>{
    event.preventDefault();
        if (elValidate() === true) {
            const Form = document.getElementById('form');
            const formData = new FormData(Form);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://registration.form/php/process.php', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                    console.log(JSON.parse(this.response));
                }
            }
            xhr.send(formData);
        } else console.log('Post not permitted');
});


//Main Validator
function elValidate() {
    if ((validateName() === false)||(validateFamilyName() === false)||
        (validateDateOfBirth() === false)||(validateGenderCheck() === false)
        ||(validateEmail() === false)||(validatePhone() === false)||
        (validatePasswords() === false)||(validateQuestionnaire()=== false)||
        (validateTermsConditions() === false) ) {
        permissionGranted = false;
         console.log('Submit Denied');
    }else {
        permissionGranted = true;
        console.log('Submit Granted');
        }
    return permissionGranted;
}


// Messages
const showError = (id, message, status) => {
    const inputName = document.getElementById(id);
    const inputDiv = inputName.parentElement;
    const errorMessage = inputDiv.querySelector('span');
    inputName.style.borderColor = 'red';
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    validation = status;
};
const showLooksGood = (id) => {
    const inputName = document.getElementById(id);
    const inputDiv = inputName.parentElement;
    const errorMessage = inputDiv.querySelector('span');
    inputName.style.borderColor = 'green';
    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Looks Good';
    validation = true;
};


// Validate first name
function validateName() {
    const name = document.getElementById('name');
     if (name.value.length <= 2) {
         showError('name', 'Fill up your Given Name', false);
    } else {
         showLooksGood('name');
    }
     return validation;
}

// Validate family name
function validateFamilyName() {
    const familyName = document.getElementById('fName');
    if (familyName.value.length <= 2) {
        showError('fName', 'Full up your Family Name',false);
    } else {
        showLooksGood('fName');
    }
    return validation;
}

// Validate date of birth
function validateDateOfBirth() {
    const DateOfBirth = document.getElementById('dateOfB');
    if (DateOfBirth.value.length < 10) {
        showError('dateOfB','Fill up your Date of Birth', false);
    } else {
        showLooksGood('dateOfB');
    }
    return validation;
}

// Validate Gender checkbox
function validateGenderCheck() {
    const genders = document.querySelectorAll('input[name="gender"]');
    for (let i = 0; i < genders.length; i++) {
        if (!genders[i].checked) {
            showError('radioButton1', 'Choose your gender', false);
        } else {
            showLooksGood('radioButton1');
            return validation;
        }
    }
    return validation;
}


// Validate email
function validateEmail() {
    const emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    const illegalChars = /[()<>,;:\\"\[\]]/;
    const email = document.getElementById('email');
    if (email.value === '') {
        showError('email','Please enter an email address!', false);
    } else if(!emailFilter.test(email.value.trim())) {
        showError('email','Please enter a valid email', false);
    } else if (email.value.match(illegalChars)) {
        showError('email', 'Email contains invalid characters', false);
    } else {
        showLooksGood('email');
    }
    return validation;
}

// Phone Pattern
function validatePhone(){
const phone = document.getElementById('phone');
const illegalChars = /[^\d]/;
const stripped = phone.value.replace(/[\+()\.\-\ ]/gi, '');
    if(phone.value === '') {
        showError('phone', 'Please enter a phone number', false);
    } else if (illegalChars.test(stripped)) {
        showError('phone','Phone number contain illegal characters', false);
    } else if (stripped.length<10) {
        showError('phone', 'Phone number is too short', false);
    } else {
        showLooksGood('phone');
    }
    return validation;
}

// Checkbox event
const passwordCheckbox = document.getElementById('passInput');
const confirmPasswordCheckbox = document.getElementById('confirmPassInput');
const Password = document.getElementById('pass1');
const confirmPassword = document.getElementById('pass2');

passwordCheckbox.onchange = function (){
    if (passwordCheckbox.checked) {
        Password.type = 'text';
    } else {
        Password.type = 'password';
    }
};
confirmPasswordCheckbox.onchange = function (){
    if (confirmPasswordCheckbox.checked) {
        confirmPassword.type = 'text';
    } else {
        confirmPassword.type = 'password';
    }
}

//Passwords validation
function validatePasswords () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if ((Password.value === '')||(confirmPassword.value === '')){
        showError('pass1','Please enter the password & confirm password', false);
    } else if(Password.value !== confirmPassword.value){
        showError('passwordsNotEqual', 'Passwords Not Matching', false);
    } else if(Password.value.length < 8) {
        showError('pass2','Password must be at least 8 characters', false);
    }else validation = !((!passDifficulty.test(Password.value)) ||
        (!passDifficulty.test(confirmPassword.value)));
    return validation;
}



//Password difficulty listener
Password.addEventListener('keypress', function () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if(!passDifficulty.test(Password.value) ) {
        showError('pass1', 'Weak Password');
    }if(passDifficulty.test(Password.value) ){
        showLooksGood('pass1');
    }if(Password.value !== confirmPassword.value) {
        showError('shortRepeatPass', 'Passwords not matching');
    }if(Password.value === confirmPassword.value) {
        showLooksGood('shortRepeatPass');
    }
});

//Validate questionnaire
function validateQuestionnaire () {
    if(questionnaire.value === 'null'){
        showError('select', 'Please choose one', false);
    } else if(questionnaire.value !== 'null'){
        showLooksGood('select');
    } return validation;
}

//Validate terms & conditions
function validateTermsConditions () {
    const termsCheckbox = input[12];
    if(termsCheckbox.checked){
        showLooksGood('agreement');
    } else {
        showError('agreement', 'Please read and click if agree', false);
    } return validation;
}







// Validate gender checkbox
// function validateGenderCheck() {
//     const male = document.getElementById('radioButton1');
//     const female = document.getElementById('radioButton2');
//     const other = document.getElementById('radioButton3');
//     validation = !!((male.checked) || (female.checked) || (other.checked));
//     if (!validation){
//         showError('radioButton1', 'Choose your gender', false);
//     } else {
//         showLooksGood('radioButton1');
//     }
//     return validation;
// }




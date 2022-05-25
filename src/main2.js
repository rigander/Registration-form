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
const invalidPhoneMessage = document.querySelector('#invalidPhone');
const passwordsNotEqual = document.getElementById('passwordsNotEqual');
const invalidPassword = document.getElementById('invalidPass');
const invalidConfirmPassword = document.getElementById('invalidRepeatPass');
const submit = document.querySelector('#submit');
const checkPass2 = document.querySelector('#checkPass');
const checkPass = document.querySelector('#password');
const tooShortPassword = document.getElementById('shortPass');
const questionnaire = document.getElementById('select');
const invalidQuestionnaire = document.getElementById('invalidSelect');
const agreementCheckBox = document.getElementById('agreement');
const invalidTerms = document.getElementById('invalidTerms');

submit.addEventListener('click', (event)=>{
    event.preventDefault();
        if (elValidate() === true) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://registration.form/php/request.php', true);

            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                    console.log(JSON.parse(this.response));
                }
            }
            xhr.send(dataCollector());
        } else console.log('Post not permitted');
});

function dataCollector () {
  const Collector = `firstName=${name.value}&lastName=${familyName.value}&DateOfBirth=${dateInput.value}&Gender=${document.querySelector('input[name="gender"]:checked').value}&Email=${email.value}&Phone=${phone.value}&Password=${password.value}&ConfirmPassword=${repeatPassword.value}&How-did-you-find-us=${document.querySelector('#select').value}&Terms-Conditions=Agreed`;
  return Collector;
}



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
function validatePhone(){
const illegalChars = /[^\d]/;
const stripped = phone.value.replace(/[\+()\.\-\ ]/gi, '');
    if(phone.value === '') {
        invalidPhoneMessage.innerHTML = 'Please enter a phone number';
        invalidPhoneMessage.style.color = 'red';
        phone.style.borderColor = 'red';
        validation = false;
    } else if (illegalChars.test(stripped)) {
        invalidPhoneMessage.innerHTML = 'Phone number contain illegal characters';
        invalidPhoneMessage.style.color = 'red';
        phone.style.borderColor = 'red';
        validation = false;
    } else if (stripped.length<10) {
        invalidPhoneMessage.innerHTML = 'The phone number is too short'
        invalidPhoneMessage.style.color = 'red';
        phone.style.borderColor = 'red';
        validation = false;
    } else {
        invalidPhoneMessage.innerHTML = 'Looks Good'
        invalidPhoneMessage.style.color = 'green';
        phone.style.borderColor = 'green';
        validation = true;
    }
    return validation;
}

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


//Passwords validation
function validatePasswords () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if (password.value === ''){
        password.style.borderColor = 'red';
        invalidPassword.innerHTML = 'Please enter the password';
        invalidPassword.style.color = 'red';
        validation = false;
    } else if(repeatPassword.value === ''){
        invalidConfirmPassword.innerHTML = 'Please confirm password';
        invalidConfirmPassword.style.color = 'red';
        repeatPassword.style.borderColor = 'red';
        validation = false;
    } else if(password.value !== repeatPassword.value){
        passwordsNotEqual.style.color = 'red';
        passwordsNotEqual.innerHTML = 'Passwords Not Matching';
        validation = false;
    } else if(password.value.length < 8) {
        password.style.borderColor = 'red';
        tooShortPassword.innerHTML = 'Password must be at least 8 characters';
        tooShortPassword.style.color = 'red';
        validation = false;
    }else if((!passDifficulty.test(password.value))||
        (!passDifficulty.test(repeatPassword.value))) {
        validation = false;
    }else if(password.value === repeatPassword.value){
        passwordsNotEqual.style.color = 'green';
        passwordsNotEqual.innerHTML = 'Passwords Matching';
        validation = true;
    } else {
        validation = true;
    }
    return validation;
}

//Password difficulty listener
password.addEventListener('keypress', function () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if(!passDifficulty.test(password.value) ) {
        invalidPassword.innerHTML = 'Weak Password';
        invalidPassword.style.color = 'red';
    }if(passDifficulty.test(password.value) ){
        invalidPassword.innerHTML = 'Strong Password';
        invalidPassword.style.color = 'green';
    }if(password.value !== repeatPassword.value) {
        passwordsNotEqual.style.color = 'red';
        passwordsNotEqual.innerHTML = 'Passwords Not Matching';
    }if(password.value === repeatPassword.value) {
        passwordsNotEqual.style.color = 'green';
        passwordsNotEqual.innerHTML = 'Passwords Matching';
    }
});

//Validate questionnaire
function validateQuestionnaire () {
    if(questionnaire.value === 'null'){
        invalidQuestionnaire.innerHTML = 'Please choose one';
        invalidQuestionnaire.style.color = 'red';
        validation = false;
    } else if(questionnaire.value !== 'null'){
        invalidQuestionnaire.innerHTML = 'Looks Good';
        invalidQuestionnaire.style.color = 'green';
        validation = true;
    } return validation;
}

//Validate terms & conditions
function validateTermsConditions () {
    if(agreementCheckBox.checked){
        invalidTerms.innerHTML = 'Looks Good';
        invalidTerms.style.color = 'green';
        validation = true;
    } else {
        invalidTerms.innerHTML = 'Please read and click checked if agree';
        validation = false;
    } return validation;
}







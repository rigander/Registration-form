const password = document.getElementById('pass1');
const submit = document.querySelector('#submit');
const questionnaire = document.getElementById('select');
const errorMessage = document.querySelectorAll('.valid-feedback');
const input = document.querySelectorAll('input');


//Submit Data (AJAX Post)


// submit.addEventListener('click', (event) =>{
//     event.preventDefault();
//     const Form = document.getElementById('form');
//     const formData = new FormData(Form);
//     const request = new XMLHttpRequest();
//     request.open('POST', 'process.php');
//     request.addEventListener('readystatechange', function() {
//         if(this.readyState == 4 && this.status == 200) {
//             let data = JSON.parse(this.reponseText);
//             console.log(data);
//         } else console.log('Post not Permitted');
//     }
//     );
//     request.send(formData);
// })




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

// Data collection via simple string.
// function dataCollector () {
//   const Collector = `firstName=${input[0].value}&lastName=${input[1].value}&DateOfBirth=${input[2].value}&Gender=${document.querySelector('input[name="gender"]:checked').value}&Email=${input[6].value}&Phone=${input[7].value}&Password=${input[8].value}&ConfirmPassword=${input[10].value}&How-did-you-find-us=${document.querySelector('#select').value}&Terms-Conditions=Agreed`;
//   return Collector;
// }

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

// Error Message
function message(i,x,color, message, status ){
    input[i].style.borderColor = color;
    errorMessage[x].style.color = 'red';
    errorMessage[x].innerHTML = message;
    validation = status;
}

// Validate first name
function validateName() {
    const name = input[0];
     if (name.value.length <= 2) {
         message(0,0, 'red', 'Fill up your Given Name', false);
    } else {
         message(0,0,'green', 'Looks Good', true);
        errorMessage[0].style.color = 'green';
        validation = true;
    }
     return validation;
}

// Validate family name
function validateFamilyName() {
    const familyName = input[1];
    if (familyName.value.length <= 2) {
        message(1,1,'red', 'Fill up your Family Name', false);
    } else {
        message(1, 1, 'green','Looks Good', true);
        errorMessage[1].style.color = 'green';
    }
    return validation;
}

// Validate date of birth
function validateDateOfBirth() {
    const DateOfBirth = input[2];
    if (DateOfBirth.value.length < 10) {
        message(2,2, 'red', 'Fill up your Date of Birth', false);
    } else {
        message(2, 2, 'green', 'Looks Good', true);
        errorMessage[2].style.color = 'green';
    }
    return validation;
}

// Validate gender checkbox
function validateGenderCheck() {
    const male = input[3];
    const female = input[4];
    const other = input[5];
    validation = !!((male.checked) || (female.checked) || (other.checked));
    if (!validation){
        errorMessage[3].innerHTML = 'Choose your gender';
    } else {
        errorMessage[3].innerHTML = 'Looks Good';
        errorMessage[3].style.color = 'green'
    }
    return validation;
}

//Validate e-mail
function trim(s) {
    return s.replace(/^\s+|\s+$/, ''); // removes whitespace
}

function validateEmail() {
    const emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    const illegalChars = /[()<>,;:\\"\[\]]/;
    const email = input[6];
    if (email.value === '') {
        message(6, 4,'red', 'Please enter an email address!', false);
    } else if(!emailFilter.test(trim(email.value))) {
        message(6,4,'red', 'Please enter a valid email', false);
    } else if (email.value.match(illegalChars)) {
        message(6,4,'red', 'Email contains invalid characters', false);
    } else {
        message(6,4,'green', 'Looks Good', true);
        errorMessage[4].style.color = 'green';
    }
    return validation;
}

// Phone Pattern
function validatePhone(){
const phone = input[7];
const illegalChars = /[^\d]/;
const stripped = phone.value.replace(/[\+()\.\-\ ]/gi, '');
    if(phone.value === '') {
        message(7,5,'red','Please enter a phone number', false );
    } else if (illegalChars.test(stripped)) {
        message(7,5, 'red', 'Phone number contain illegal characters', false);
    } else if (stripped.length<10) {
        message(7, 5, 'red', 'Phone number is too short', false);
    } else {
        message(7, 5, 'green', 'Looks Good', true);
        errorMessage[5].style.color = 'green';
    }
    return validation;
}

// Checkbox event
const passwordCheckbox = input[9];
const confirmPasswordCheckbox = input[11];
const Password = input[8];
const confirmPassword = input[10];

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
    if (Password.value === ''){
        message(8, 7, 'red', 'Please enter the password', false);
    } else if(confirmPassword.value === ''){
        message(10, 8, 'red', 'Please confirm password', false);
    } else if(Password.value !== confirmPassword.value){
        message(8, 10, 'red', 'Passwords Not Matching', false);
    } else if(Password.value.length < 8) {
        message(8, 6, 'red', 'Password must be at least 8 characters', false);
    }else validation = !((!passDifficulty.test(Password.value)) ||
        (!passDifficulty.test(confirmPassword.value)));
    return validation;
}

// Error Message 2
function message2(x,color, message ){
    errorMessage[x].style.color = color;
    errorMessage[x].innerHTML = message;
}

//Password difficulty listener
Password.addEventListener('keypress', function () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if(!passDifficulty.test(Password.value) ) {
        message2(7, 'red', 'Weak Password');
    }if(passDifficulty.test(Password.value) ){
        message2(7, 'green', 'Strong Password');
    }if(Password.value !== confirmPassword.value) {
        message2(10, 'red', 'Password not Matching ');
    }if(Password.value === confirmPassword.value) {
        message2(10, 'green', 'Password Matching');
    }
});

//Validate questionnaire
function validateQuestionnaire () {
    if(questionnaire.value === 'null'){
        message2(11, 'red', 'Please choose one')
        validation = false;
    } else if(questionnaire.value !== 'null'){
        message2(11, 'green', 'Looks Good')
        validation = true;
    } return validation;
}

//Validate terms & conditions
function validateTermsConditions () {
    const termsCheckbox = input[12];
    if(termsCheckbox.checked){
        message2(12, 'green', 'Looks Good')
        validation = true;
    } else {
        message2(12, 'red', 'Please read and click if agree')
        validation = false;
    } return validation;
}







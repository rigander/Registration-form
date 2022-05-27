const name = document.getElementById('name');
const password = document.getElementById('pass1');
const submit = document.querySelector('#submit');
const questionnaire = document.getElementById('select');
const errorMessage = document.querySelectorAll('.valid-feedback');
const input = document.querySelectorAll('input');


//Submit data (AJAX Post)


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
     if (input[0].value.length <= 2) {
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
    if (input[1].value.length <= 2) {
        message(1,1,'red', 'Fill up your Family Name', false);
    } else {
        message(1, 1, 'green','Looks Good', true);
        errorMessage[1].style.color = 'green';
    }
    return validation;
}

// Validate date of birth
function validateDateOfBirth() {
    if (input[2].value.length < 10) {
        message(2,2, 'red', 'Fill up your Date of Birth', false);
    } else {
        message(2, 2, 'green', 'Looks Good', true);
        errorMessage[2].style.color = 'green';
    }
    return validation;
}

// Validate gender checkbox
function validateGenderCheck() {
    validation = !!((input[3].checked) || (input[4].checked) || (input[5].checked));
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
    let trimEmail = trim(input[6].value);
    const emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    const illegalChars = /[()<>,;:\\"\[\]]/;
    if (input[6].value === '') {
        message(6, 4,'red', 'Please enter an email address!', false);
    } else if(!emailFilter.test(trimEmail)) {
        message(6,4,'red', 'Please enter a valid email', false);
    } else if (input[6].value.match(illegalChars)) {
        message(6,4,'red', 'Email contains invalid characters', false);
    } else {
        message(6,4,'green', 'Looks Good', true);
        errorMessage[4].style.color = 'green';
    }
    return validation;
}

// Phone Pattern
function validatePhone(){
const illegalChars = /[^\d]/;
const stripped = input[7].value.replace(/[\+()\.\-\ ]/gi, '');
    if(input[7].value === '') {
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
input[9].onchange = function (){
    if (input[9].checked) {
        input[8].type = 'text';
    } else {
        input[8].type = 'password';
    }
};
input[11].onchange = function (){
    if (input[11].checked) {
        input[10].type = 'text';
    } else {
        input[10].type = 'password';
    }
}

//Passwords validation
function validatePasswords () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if (input[8].value === ''){
        message(8, 7, 'red', 'Please enter the password', false);
    } else if(input[10].value === ''){
        message(10, 8, 'red', 'Please confirm password', false);
    } else if(input[8].value !== input[10].value){
        message(8, 10, 'red', 'Passwords Not Matching', false);
    } else if(input[8].value.length < 8) {
        message(8, 6, 'red', 'Password must be at least 8 characters', false);
    }else validation = !((!passDifficulty.test(input[8].value)) ||
        (!passDifficulty.test(input[10].value)));
    return validation;
}

// Error Message 2
function message2(x,color, message ){
    errorMessage[x].style.color = color;
    errorMessage[x].innerHTML = message;
}

//Password difficulty listener
input[8].addEventListener('keypress', function () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if(!passDifficulty.test(input[8].value) ) {
        message2(7, 'red', 'Weak Password');
    }if(passDifficulty.test(input[8].value) ){
        message2(7, 'green', 'Strong Password');
    }if(input[8].value !== input[10].value) {
        message2(10, 'red', 'Password not Matching ');
    }if(input[8].value === input[10].value) {
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
    if(input[12].checked){
        message2(12, 'green', 'Looks Good')
        validation = true;
    } else {
        message2(12, 'red', 'Please read and click if agree')
        validation = false;
    } return validation;
}







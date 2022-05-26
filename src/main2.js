const name = document.getElementById('name');
const password = document.getElementById('pass1');
const submit = document.querySelector('#submit');
const questionnaire = document.getElementById('select');
const errorMessage = document.querySelectorAll('.valid-feedback');
const input = document.querySelectorAll('input');


//Submit data (AJAX Post)
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
  const Collector = `firstName=${input[0].value}&lastName=${input[1].value}&DateOfBirth=${input[2].value}&Gender=${document.querySelector('input[name="gender"]:checked').value}&Email=${input[6].value}&Phone=${input[7].value}&Password=${input[8].value}&ConfirmPassword=${input[9].value}&How-did-you-find-us=${document.querySelector('#select').value}&Terms-Conditions=Agreed`;
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
     if (input[0].value.length <= 2) {
         input[0].style.borderColor = 'Red';
        errorMessage[0].innerHTML = "Fill up your Given Name";
        validation = false;
    } else {
        errorMessage[0].innerHTML = 'Looks Good';
        errorMessage[0].style.color = 'green';
         input[0].style.borderColor = 'green';
        validation = true;
    }
     return validation;
}

// Validate family name
function validateFamilyName() {
    if (input[1].value.length <= 2) {
        input[1].style.borderColor = 'red';
        errorMessage[1].style.color = 'red';
        errorMessage[1].innerHTML = "Fill up your Family Name";
        validation = false;

    } else {
        errorMessage[1].innerHTML = 'Looks Good';
        errorMessage[1].style.color = 'green';
        input[1].style.borderColor = 'green';
        validation = true;

    }
    return validation;
}

// Validate date of birth
function validateDateOfBirth() {
    if (input[2].value.length < 10) {
        input[2].style.borderColor = 'red';
        errorMessage[2].style.color = 'red';
        errorMessage[2].innerHTML = "Fill up your Date of Birth";
        validation = false;

    } else {
        errorMessage[2].innerHTML = 'Looks Good';
        errorMessage[2].style.color = 'green';
        input[2].style.borderColor = 'green';
        validation = true;
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
        input[6].style.borderColor = 'red';
        errorMessage[4].style.color = 'red';
        errorMessage[4].innerHTML = 'Please enter an email address';
        validation = false;
    } else if(!emailFilter.test(trimEmail)) {
        input[6].style.borderColor = 'red';
        errorMessage[4].style.color = 'red';
        errorMessage[4].innerHTML = 'Please enter a valid email';
        validation = false;
    } else if (input[6].value.match(illegalChars)) {
        input[6].style.borderColor = 'red';
        errorMessage[4].style.color = 'red';
        errorMessage[4].innerHTML = 'Email contains invalid characters';
        validation = false;
    } else {
        input[6].style.borderColor = 'green';
        errorMessage[4].style.color = 'green';
        errorMessage[4].innerHTML = 'Looks Good';
        validation = true;
    }
    return validation;
}

// Phone Pattern
function validatePhone(){
const illegalChars = /[^\d]/;
const stripped = input[7].value.replace(/[\+()\.\-\ ]/gi, '');
    if(input[7].value === '') {
        errorMessage[5].innerHTML = 'Please enter a phone number';
        errorMessage[5].style.color = 'red';
        input[7].style.borderColor = 'red';
        validation = false;
    } else if (illegalChars.test(stripped)) {
        errorMessage[5].innerHTML = 'Phone number contain illegal characters';
        errorMessage[5].style.color = 'red';
        input[7].style.borderColor = 'red';
        validation = false;
    } else if (stripped.length<10) {
        errorMessage[5].innerHTML = 'The phone number is too short'
        errorMessage[5].style.color = 'red';
        input[7].style.borderColor = 'red';
        validation = false;
    } else {
        errorMessage[5].innerHTML = 'Looks Good'
        errorMessage[5].style.color = 'green';
        input[7].style.borderColor = 'green';
        validation = true;
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
        input[8].style.borderColor = 'red';
        errorMessage[7].innerHTML = 'Please enter the password';
        errorMessage[7].style.color = 'red';
        validation = false;
    } else if(input[10].value === ''){
        errorMessage[8].innerHTML = 'Please confirm password';
        errorMessage[8].style.color = 'red';
        input[10].style.borderColor = 'red';
        validation = false;
    } else if(input[8].value !== input[9].value){
        errorMessage[10].style.color = 'red';
        errorMessage[10].innerHTML = 'Passwords Not Matching';
        validation = false;
    } else if(input[8].value.length < 8) {
        input[8].style.borderColor = 'red';
        errorMessage[6].innerHTML = 'Password must be at least 8 characters';
        errorMessage[6].style.color = 'red';
        validation = false;
    }else if((!passDifficulty.test(input[8].value))||
        (!passDifficulty.test(input[10].value))) {
        validation = false;
    }else {
        validation = true;
    }
    return validation;
}

//Password difficulty listener
input[8].addEventListener('keypress', function () {
    const passDifficulty =/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).+$/;
    if(!passDifficulty.test(input[8].value) ) {
        errorMessage[7].innerHTML = 'Weak Password';
        errorMessage[7].style.color = 'red';
    }if(passDifficulty.test(input[8].value) ){
        errorMessage[7].innerHTML = 'Strong Password';
        errorMessage[7].style.color = 'green';
    }if(input[8].value !== input[10].value) {
        errorMessage[10].style.color = 'red';
        errorMessage[10].innerHTML = 'Passwords Not Matching';
    }if(input[8].value === input[10].value) {
        errorMessage[10].style.color = 'green';
        errorMessage[10].innerHTML = 'Passwords Matching';
    }
});

//Validate questionnaire
function validateQuestionnaire () {
    if(questionnaire.value === 'null'){
        errorMessage[11].innerHTML = 'Please choose one';
        errorMessage[11].style.color = 'red';
        validation = false;
    } else if(questionnaire.value !== 'null'){
        errorMessage[11].innerHTML = 'Looks Good';
        errorMessage[11].style.color = 'green';
        validation = true;
    } return validation;
}

//Validate terms & conditions
function validateTermsConditions () {
    if(input[10].checked){
        errorMessage[12].innerHTML = 'Looks Good';
        errorMessage[12].style.color = 'green';
        validation = true;
    } else {
        errorMessage[12].innerHTML = 'Please read and click checked if agree';
        validation = false;
    } return validation;
}







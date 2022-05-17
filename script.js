$(document).ready(function (){
    $(function(){
        $("#dateOfB").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            yearRange: '1901:2005',
            minDate: new Date(1930.10-1,25),
            maxDate: '+90Y',
            inline: true,

        });
    });
})

const password = document.getElementById('pass1');
const togglePassword = document.getElementById('togglePassword');
const repeatPassword = document.getElementById('pass2');
const toggleRepeatPassword = document.getElementById('togglePassword2');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
})

















// const Email = document.querySelector('#email');
//
// const validateEmail = (email) => {
//     return email.match(
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
//
// const validate = () => {
//     const result = $('#result');
//     const email = $('#email').val();
//     result.text('');
//
//     if (validateEmail(email)) {
//         result.text(email + ' is valid :)');
//         result.css('color', 'green');
//     } else {
//         result.text(email + ' is not valid :(');
//         result.css('color', 'red');
//     }
//     return false;
// }
//
// $('#email').on('input', validate);
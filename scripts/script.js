$(document).ready(function (){
    //Datepicker
        $("#dateOfB").datepicker({
            dateFormat: 'yy-mm-dd',
            changeMonth: true,
            changeYear: true,
            yearRange: '1901:2005',
            minDate: new Date(1930.10-1,25),
            maxDate: '+90Y',
            inline: true,
        });
    //Terms and conditions
    jQuery.fn.terms_agree = function(content_area, selector) {
        let body = $('body');
        $(this).click(function() {
            body.css("height", "auto").css("height", body.height());
            if ($(content_area).html() == "") {
                $(content_area).load( $(this).attr("href") + (selector ? " " + selector : "") );
            }
            $(content_area).slideToggle();
            return false;
        });

    }
        $("#terms").terms_agree("#content-area", "#small-print");
})
const element = document.getElementById('phone');
const maskOptions = {
    mask: '+38(000)000-00-00',
    lazy: false
}
const mask = new IMask(element, maskOptions);

//Password visibility during input
const password = document.getElementById('pass1');
const togglePassword = document.getElementById('togglePassword');
const repeatPassword = document.getElementById('pass2');
const toggleRepeatPassword = document.getElementById('togglePassword2');
const message = document.getElementById('message');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
})
toggleRepeatPassword.addEventListener('click', function () {
    const type = repeatPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    repeatPassword.setAttribute('type', type);
    this.classList.toggle('bi-eye');
})
const form =document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
})

//Check if Password equals Repeat Password
const check = function() {
    if (password.value === repeatPassword.value) {
        message.style.color = 'green';
        message.innerHTML = 'password matching';
    } if(password.value !== repeatPassword.value) {
        message.style.color = 'red';
        message.innerHTML = 'password not matching';
    } if(password.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/)) {

    }
}
























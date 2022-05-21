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

// Tel.phone Mask
        $("#phone").mask("+(999) 99-999-9999", {placeholder: ""});

//Check if Password equals Repeat Password
    $('#pass1, #pass2').on('keyup', function () {
        if ($('#pass1').val() === $('#pass2').val()) {
            $('#invalidRepeatPass').html('Password Matching').css('color', 'green');
        } else
            $('#invalidRepeatPass').html('Password Not Matching').css('color', 'red');
    });

//Password visibility during input
    $('#togglePassword').on( 'click',function () {
        const type = $('#pass1').attr('type') === 'password' ? 'text' : 'password';
        $('#pass1').attr('type', type);
        this.classList.toggle('bi-eye');
    })
    $('#togglePassword2').click( function () {
        const type = $('#pass2').attr('type') === 'password' ? 'text' : 'password';
        $('#pass2').attr('type', type);
        this.classList.toggle('bi-eye');
    })
    $('form').submit( function (e) {
        e.preventDefault();
    })

//Password difficulty validation
    $("#pass1").keydown(function () {
        $('#pass1').each(function () {
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
            validated ? $('#invalidPass').html('Strong Password').css('color', 'green') : $('#invalidPass').html('Weak Password').css('color', 'red');
        });
    });



    $("#form").validate({
         rules: {
            firstName:{
                required:true,
            },
            lastName: "required",
            dateOfBirth: "required",
            options: "required",
            yourEmail: {
                required: true,
                email: true,
            },
            phoneNumber: "required",
            password1: "required",
            confirmPassword: "required",
            select: "required",
            checkTerms: "required",
        },
        messages: {
            firstName: "Fill up First Name",
            lastName: "Fill up Last Name",
            dateOfBirth: "Fill up Date of Birth",
            options: "Choose your gender",
            yourEmail: "Fill up your email",
            phoneNumber: "Fill up your phone number",
            password1: "Fill up password",
            confirmPassword: "Confirm password",
            select: "Select One",
            checkTerms: "Please read and accept if agree",
        }

    });

})




























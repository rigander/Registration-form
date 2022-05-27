<?php

if ((isset($_POST['firstName'])) && (!empty($_POST["firstName"]))) {
    $result['firstName'] = $_POST['firstName'];
} else {
    $result['firstName'] = 'Please enter the first name field!';
}if ((isset($_POST['lastName']))&& (!empty($_POST["lastName"]))) {
    $result['lastName'] = $_POST['lastName'];
} else {
    $result['lastName'] = 'Please enter the last name field!';
}if ((isset($_POST['dateOfBirth']))&& (!empty($_POST["dateOfBirth"]))) {
    $result['dateOfBirth'] = $_POST['dateOfBirth'];
} else {
    $result['dateOfBirth'] = 'Please enter your Date of Birth!';
}if ((isset($_POST['gender']))&& (!empty($_POST["gender"]))) {
    $result['gender'] = $_POST['gender'];
} else {
    $result['gender'] = 'Please enter your Gender!';
}if ((isset($_POST['Email']))&& (!empty($_POST["Email"]))) {
    $result['Email'] = $_POST['Email'];
} else {
    $result['Email'] = 'Please enter your Email!';
}if ((isset($_POST['phoneNumber']))&& (!empty($_POST["phoneNumber"]))) {
    $result['phoneNumber'] = $_POST['phoneNumber'];
} else {
    $result['phoneNumber'] = 'Please enter your phone number!';
}if ((isset($_POST['Password']))&& (!empty($_POST["Password"]))) {
    $result['Password'] = $_POST['Password'];
} else {
    $result['Password'] = 'Please enter password!';
}if ((isset($_POST['confirmPassword']))&& (!empty($_POST["confirmPassword"]))) {
    $result['confirmPassword'] = $_POST['confirmPassword'];
} else {
    $result['confirmPassword'] = 'Please enter confirm password field!';
}if ((isset($_POST['How-did-you-find-us']))&& (!empty($_POST["How-did-you-find-us"]))) {
    $result['How-did-you-find-us'] = $_POST['How-did-you-find-us'];
} else {
    $result['How-did-you-find-us'] = 'Please choose one of the options!';
}if ((isset($_POST['checkTerms']))&& (!empty($_POST["checkTerms"]))) {
    $result['checkTerms'] = $_POST['checkTerms'];
} else {
    $result['checkTerms'] = 'Please click checked if read and agree with Terms and Conditions!';
}

echo json_encode($result);
?>

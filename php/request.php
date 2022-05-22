<?php

$response = ['success' => false, 'data' => null];

$carsArray = [['name' => 'BMW', 'model' => '320', 'year' => 2020, 'color' => 'black'],
    ['name' => 'HONDA', 'model' => 'Accord', 'year' => 2011, 'color' => 'blue'],
    ['name' => 'Mitsubishi', 'model' => 'Lancer X', 'year' => 2008, 'color' => 'red']];

if (!empty($_GET)) {
    $response['data'] = $carsArray;
    $response['request_method'] = 'GET';
    $response['success'] = true;
} elseif (!empty($_POST)) {
    $response['data'] = $carsArray;
    $response['request_method'] = 'POST';
    $response['success'] = true;
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($response);
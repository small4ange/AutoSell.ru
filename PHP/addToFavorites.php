<?php
header('Content-Type: application/json'); // указываем, что ответ будет в формате JSON
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "auto_sell_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//-----------------------------------------------------------------------------------

$userId = $_POST['userId'];
$carId = $_POST['carId'];

$sql = "INSERT INTO user_favorites (user_id, car_id) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $userId, $carId);
$response = [];

if ($stmt->execute()) {
    $response['status'] = 'success';
    $response['message'] = 'Car added to favorites successfully';
} else {
    $response['status'] = 'error';
    $response['message'] = 'Error adding car to favorites: ' . $conn->error;
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>

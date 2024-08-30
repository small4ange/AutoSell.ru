<?php
//подключение к базе данных------------------------------------------------------------
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "auto_sell_db";

// создаю соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// проверяю соединение
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//--------------------------------------------------------------------------------------


$userName = $_POST['user_name'];
$userEmail = $_POST['user_email']; 
$userPassword = $_POST['user_password'];

$sql = "INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $userName, $userEmail, $userPassword);

$response = [];

try {
    $stmt->execute();
    $response['status'] = 'success';
    $response['message'] = 'User registered successfully';
} catch (Exception $e) {
    $response['status'] = 'error';
    $response['message'] = 'Error: ' . $conn->error; // Ошибка от MySQL сервера
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>

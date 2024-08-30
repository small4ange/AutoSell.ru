<?php
header('Content-Type: application/json'); // указываем, что ответ будет в формате JSON

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

$sql = "SELECT user_id FROM users WHERE user_name = ? AND user_email = ? AND user_password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $userName, $userEmail, $userPassword);
$stmt->execute();
$result = $stmt->get_result();

$response = [];
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    $response['status'] = 'success';
    $response['message'] = 'Вход в систему произведен успешно';
    $response['user_id'] = $user['user_id'];
} else {
    $response['status'] = 'error';
    $response['message'] = 'Неверное имя пользователя или пароль';
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>


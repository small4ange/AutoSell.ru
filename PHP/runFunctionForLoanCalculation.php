<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "auto_sell_db";

// подключение к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//----------------------------------------------------------------------
// принимаем данные из запроса
$carId = $_POST['carId'];
$initialPayment = $_POST['initialPayment'];
$creditYears = $_POST['creditYears'];
$creditPercent = $_POST['creditPercent'];

// вызов функции из базы данных
$sql = "SELECT CalculateLoan(?, ?, ?, ?) AS result"; 
$stmt = $conn->prepare($sql);
$stmt->bind_param("diid", $initialPayment, $carId, $creditYears, $creditPercent);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

echo json_encode($row);

$stmt->close();
$conn->close();
?>
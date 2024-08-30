<?php
header('Content-Type: application/json'); //return json

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

$sql = "SELECT ch.hood_type
FROM car_hood ch
JOIN cars c ON ch.hood_id = c.hood_id
WHERE c.car_id = ?"; //запрос

$stmt = $conn->prepare($sql);  //подготовка к выполнению запроса
$car_id = isset($_GET['id']) ? $_GET['id'] : null;
if (!$car_id) {
    echo json_encode(["error" => "No car ID provided"]);
    exit;
}                     
$stmt->bind_param("i", $car_id);                
$stmt->execute();                                   //выполнение запроса
$result = $stmt->get_result();                      //получение результата

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();                  //получение ассоциативного массива и превращение его в формат json
    echo json_encode($row);
} else {
    echo json_encode(["error" => "Car not found"]);
}

$conn->close();
?>
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

$sql = "SELECT * FROM cars"; // запрос
$result = $conn->query($sql); //получение результата

$cars = []; // массив для хранения данных автомобилей

if ($result->num_rows > 0) {
    // если в таблице есть записи, извлекаем их
    while($row = $result->fetch_assoc()) {
        $cars[] = $row; // добавляем каждую строку в массив cars
    }
    echo json_encode($cars); // преобразуем массив cars в JSON и выводим
} else {
    echo json_encode([]); // если записей нет, выводим пустой JSON массив
}
$conn->close(); // закрываем подключение
?>

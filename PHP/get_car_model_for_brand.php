<?php
header('Content-Type: application/json'); //return json

//подключение к базе данных------------------------------------------------------------
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "auto_sell_db";
$brandName = $_GET['brandName']; // Получаем brand_name из параметров запроса

// создаю соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// проверяю соединение
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//--------------------------------------------------------------------------------------

// Подготовка SQL запроса для поиска brand_id по brand_name
$sqlBrand = "SELECT brand_id FROM car_brands WHERE brand_name = ?";
$stmtBrand = $conn->prepare($sqlBrand);
$stmtBrand->bind_param("s", $brandName);
$stmtBrand->execute();
$resultBrand = $stmtBrand->get_result();

if ($resultBrand->num_rows > 0) {
    $brand = $resultBrand->fetch_assoc();
    $brandId = $brand['brand_id'];

    // Используем найденный brand_id для получения моделей
    $sqlModels = "SELECT model_name FROM car_models WHERE brand_id = ?";
    $stmtModels = $conn->prepare($sqlModels);
    $stmtModels->bind_param("i", $brandId);
    $stmtModels->execute();
    $resultModels = $stmtModels->get_result();

    $models = [];
    if ($resultModels->num_rows > 0) {
        while($row = $resultModels->fetch_assoc()) {
            $models[] = $row['model_name'];
        }
        echo json_encode($models);
    } else {
        echo json_encode([]); // Возвращаем пустой массив, если моделей нет
    }
} else {
    echo json_encode(["error" => "Brand not found"]); // Ошибка, если марка не найдена
}


$conn->close();
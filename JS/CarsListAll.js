// Создаем массив машин в виде JSON
// var cars = [
//     {
//         "imagepath" : "images/BMWX5Black.png",
//         "brand" : "BMW",
//         "model" : "X5",
//         "color" : "Черный",
//         "kuzov" : "Внедорожник",
//         "box" : "Автомат",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/audi_a6.jpg",
//         "brand" : "Audi",
//         "model" : "A6",
//         "color" : "Серебристый",
//         "kuzov" : "Седан",
//         "box" : "Робот",
//         "drive" : "Передний",
//         "engine" : "Дизельный"
//     },
//     {
//         "imagepath" : "images/toyota_camry.jpg",
//         "brand" : "Toyota",
//         "model" : "Camry",
//         "color" : "Черный",
//         "kuzov" : "Седан",
//         "box" : "Вариатор",
//         "drive" : "Передний",
//         "engine" : "Гибридный"
//     },
//     {
//         "imagepath" : "images/Mercedes-Benz_GLE.jpg",
//         "brand" : "Mercedes-Benz",
//         "model" : "GLE",
//         "color" : "Черный",
//         "kuzov" : "Кроссовер",
//         "box" : "Автоматическая",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/ford_mustang.jpg",
//         "brand" : "Ford",
//         "model" : "Mustang",
//         "color" : "Красный",
//         "kuzov" : "Купе",
//         "box" : "Механическая",
//         "drive" : "Задний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/honda_civic.jpg",
//         "brand" : "Honda",
//         "model" : "Civic",
//         "color" : "Серый",
//         "kuzov" : "Хэтчбек",
//         "box" : "Вариатор",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/volkswagen_passat.jpg",
//         "brand" : "Volkswagen",
//         "model" : "Passat",
//         "color" : "Черный",
//         "kuzov" : "Универсал",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Дизельный"
//     },
//     {
//         "imagepath" : "images/nissan-qashqai.jpg",
//         "brand" : "Nissan",
//         "model" : "Qashqai",
//         "color" : "Синий",
//         "kuzov" : "Кроссовер",
//         "box" : "Вариатор",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/porshe_911.jpg",
//         "brand" : "Porsche",
//         "model" : "911",
//         "color" : "Коричневый",
//         "kuzov" : "Купе",
//         "box" : "Робот",
//         "drive" : "Задний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/vw_Golf.jpg",
//         "brand" : "Volkswagen",
//         "model" : "Golf",
//         "color" : "Синий",
//         "kuzov" : "Хэтчбек",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/ford_focus.jpg",
//         "brand" : "Ford",
//         "model" : "Focus",
//         "color" : "Коричневый",
//         "kuzov" : "Седан",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/toyota-corolla.jpg",
//         "brand" : "Toyota",
//         "model" : "Corolla",
//         "color" : "Серебристый",
//         "kuzov" : "Седан",
//         "box" : "Вариатор",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/honda_accord.jpg",
//         "brand" : "Honda",
//         "model" : "Accord",
//         "color" : "Красный",
//         "kuzov" : "Седан",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Hyundai-Elantra-GT.jpg",
//         "brand" : "Hyundai",
//         "model" : "Elantra GT",
//         "color" : "Синий",
//         "kuzov" : "Седан",
//         "box" : "Вариатор",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Mazda-3.jpg",
//         "brand" : "Mazda",
//         "model" : "3",
//         "color" : "Красный",
//         "kuzov" : "Хэтчбек",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/kia_optima.jpeg",
//         "brand" : "KIA",
//         "model" : "Optima",
//         "color" : "Краный",
//         "kuzov" : "Седан",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/nissan_sentra.jpg",
//         "brand" : "Nissan",
//         "model" : "Sentra",
//         "color" : "Красный",
//         "kuzov" : "Седан",
//         "box" : "Вариатор",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/subaru_impreza.jpg",
//         "brand" : "Subaru",
//         "model" : "Impreza",
//         "color" : "Серебристый",
//         "kuzov" : "Хэтчбек",
//         "box" : "Автоматическая",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Mitsubishi_lancer.jpg",
//         "brand" : "Mitsubishi",
//         "model" : "Lancer",
//         "color" : "Черный",
//         "kuzov" : "Седан",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/tank_500.jpg",
//         "brand" : "Tank",
//         "model" : "500",
//         "color" : "Бежевый",
//         "kuzov" : "Внедорожник",
//         "box" : "Автоматическая",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Tesla_Model_S.jpg",
//         "brand" : "Tesla",
//         "model" : "Model S",
//         "color" : "Серый",
//         "kuzov" : "Седан",
//         "box" : "Без коробки передач",
//         "drive" : "Задний",
//         "engine" : "Электромотор"
//     },
//     {
//         "imagepath" : "images/ford_explorer.jpg",
//         "brand" : "Ford",
//         "model" : "Explorer",
//         "color" : "Белый",
//         "kuzov" : "Внедорожник",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/VW_Tiguan.jpg",
//         "brand" : "Volkswagen",
//         "model" : "Tiguan",
//         "color" : "Черный",
//         "kuzov" : "Кроссовер",
//         "box" : "Автоматическая",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Lexus_RX450.jpg",
//         "brand" : "Lexus",
//         "model" : "RX450",
//         "color" : "Белый",
//         "kuzov" : "Кроссовер",
//         "box" : "Автоматическая",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/omoda_c5.jpg",
//         "brand" : "OMODA",
//         "model" : "C5",
//         "color" : "Серый",
//         "kuzov" : "Кроссовер",
//         "box" : "Вариатор",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Audi_TT.jpg",
//         "brand" : "Audi",
//         "model" : "TT",
//         "color" : "Серый",
//         "kuzov" : "Купе",
//         "box" : "Механическая",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/mazda_mx-5.jpg",
//         "brand" : "Mazda",
//         "model" : "MX-5",
//         "color" : "Красный",
//         "kuzov" : "Кабриолет",
//         "box" : "Механическая",
//         "drive" : "Задний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/honda-s2000.jpg",
//         "brand" : "Honda",
//         "model" : "S2000",
//         "color" : "Желтый",
//         "kuzov" : "Кабриолет",
//         "box" : "Механическая",
//         "drive" : "Задний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/exeed_lx.jpg",
//         "brand" : "EXEED",
//         "model" : "LX",
//         "color" : "Белый",
//         "kuzov" : "Кроссовер",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/citroen_c3.jpg",
//         "brand" : "Citroen",
//         "model" : "C3",
//         "color" : "Красный",
//         "kuzov" : "Хэтчбек",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/HONDA_ODYSSEY.jpg",
//         "brand" : "Honda",
//         "model" : "Odyssey",
//         "color" : "Белый",
//         "kuzov" : "Минивэн",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/kia_sedona.jpg",
//         "brand" : "KIA",
//         "model" : "Sedona",
//         "color" : "Минивэн",
//         "kuzov" : "Коричневый",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/VW_Caravelle.jpg",
//         "brand" : "Volkswagen",
//         "model" : "Caravelle",
//         "color" : "Белый",
//         "kuzov" : "Минивэн",
//         "box" : "Автоматическая",
//         "drive" : "Полный",
//         "engine" : "Дизельный"
//     },
//     {
//         "imagepath" : "images/ford-f-150.jpg",
//         "brand" : "Ford",
//         "model" : "F-150",
//         "color" : "Черный",
//         "kuzov" : "Пикап",
//         "box" : "Автоматическая",
//         "drive" : "Полный",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Toyota_Tacoma.jpg",
//         "brand" : "Toyota",
//         "model" : "Tacoma",
//         "color" : "Серый",
//         "kuzov" : "Пикап",
//         "box" : "Механическая",
//         "drive" : "Полный",
//         "engine" : "Дизельный"
//     },
//     {
//         "imagepath" : "images/lada_vesta.jpeg",
//         "brand" : "LADA",
//         "model" : "Vesta",
//         "color" : "Черный",
//         "kuzov" : "Седан",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/skoda_Octavia.jpg",
//         "brand" : "Skoda",
//         "model" : "Octavia",
//         "color" : "Белый",
//         "kuzov" : "Хэтчбек",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/hyudnai_solaris.jpg",
//         "brand" : "Hyundai",
//         "model" : "Solaris",
//         "color" : "Белый",
//         "kuzov" : "Седан",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Kia_rio.jpg",
//         "brand" : "KIA",
//         "model" : "Rio",
//         "color" : "Белый",
//         "kuzov" : "Седан",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Renault_Duster.JPG",
//         "brand" : "Renault",
//         "model" : "Duster",
//         "color" : "Серый",
//         "kuzov" : "Кроссовер",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Mercedes-Benz_E-Class.jpg",
//         "brand" : "Mercedes-Benz",
//         "model" : "E-Class",
//         "color" : "Серый",
//         "kuzov" : "Седан",
//         "box" : "Автоматическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
//     {
//         "imagepath" : "images/Volkswagen_Polo.jpg",
//         "brand" : "Volkswagen",
//         "model" : "Polo",
//         "color" : "Серый",
//         "kuzov" : "Хэтчбек",
//         "box" : "Механическая",
//         "drive" : "Передний",
//         "engine" : "Бензиновый"
//     },
    
// ];
async function getCarBrand(car_id) { // метод получения brand_name по car_id
  try {
      const response = await fetch(`PHP/get_car_brand_by_id.php?id=${car_id}`);
      const data = await response.json();
      if (data.error) {
          throw new Error(data.error); // Обработка ошибки, если автомобиль не найден
      }
      return data.brand_name; // Возвращаем полученное 
  } catch (error) {
      console.error('Ошибка при получении имени бренда:', error);
      return null; // Возвращаем null в случае ошибки
  }
}

async function getCarModel(car_id) { //метод получения model_name по car_id
  try {
    const response = await fetch(`PHP/get_car_model_by_id.php?id=${car_id}`);
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error); // Обработка ошибки, если автомобиль не найден
    }
    return data.model_name; // Возвращаем полученное 
  } catch (error) {
    console.error('Ошибка при получении модели:', error);
    return null; // Возвращаем null в случае ошибки
  } 
}
async function getCarEngine(car_id) { //метод получения engine_type по car_id
  try {
    const response = await fetch(`PHP/get_car_engine_by_id.php?id=${car_id}`);
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error); // Обработка ошибки, если автомобиль не найден
    }
    return data.engine_type; // Возвращаем полученное 
  } catch (error) {
    console.error('Ошибка при получении типа двигателя:', error);
    return null; // Возвращаем null в случае ошибки
  } 
}
async function getCarHood(car_id) { //метод получения hood_type по car_id
  try {
    const response = await fetch(`PHP/get_car_hood_by_id.php?id=${car_id}`);
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error); // Обработка ошибки, если автомобиль не найден
    }
    return data.hood_type; // Возвращаем полученное
  } catch (error) {
    console.error('Ошибка при получении типа кузова:', error);
    return null; // Возвращаем null в случае ошибки
  } 
}
async function getCarColor(car_id) { // метод получения color по car_id
  try {
      const response = await fetch(`PHP/get_car_color_by_id.php?id=${car_id}`);
      const data = await response.json();
      if (data.error) {
          throw new Error(data.error); // Обработка ошибки, если автомобиль не найден
      }
      return data.color_name; // Возвращаем полученное
  } catch (error) {
      console.error('Ошибка при получении цвета:', error);
      return null; // Возвращаем null в случае ошибки
  }
}
async function getModelsByBrand(brandName) { //метод возвращающий массив моделей одного бренда
  try {
      console.log(`-${brandName}-`);
      const response = await fetch(`PHP/get_car_model_for_brand.php?brandName=${brandName}`);
      const models = await response.json(); // Парсинг JSON ответа в JavaScript объект
      console.log(models);
      return models; // Возвращает массив моделей
  } catch (error) {
      console.error('Ошибка при получении массива моделей:', error);
  }
}



fetch('PHP/getCars.php') //использование массива машин в виде json 
    .then(response => response.json())
    .then(cars => { // cars содержит массив автомобилей, как JavaScript объект
      displayCars(cars); // Вызываем функцию отображения машин с данными, полученными от сервера


// Преобразуем массив в строку JSON

var carsString = JSON.stringify(cars);

// Сохраняем строку в localStorage
localStorage.setItem('cars', carsString);

async function filterCars() {
  var brandFilter = document.getElementById("filterBrand").value;
  var modelFilter = document.getElementById("filterMark").value;
  var engineFilter = document.getElementById("filterEngine").value;
  var colorFilter = document.getElementById("filterColor").value;
  var kuzovFilter = document.getElementById("filterKuzov").value;
  var boxFilter = document.getElementById("filterBox").value;
  var driveFilter = document.getElementById("filterDrive").value;

  var filteredCars = [];
  for (const car of cars) {
      const carBrand = await getCarBrand(car.car_id);
      const carModel = await getCarModel(car.car_id);
      const carColor = await getCarColor(car.car_id);
      const carEngine = await getCarEngine(car.car_id);
      const carHood = await getCarHood(car.car_id);
      
      if ((carBrand === brandFilter || brandFilter === "")
          && (carModel === modelFilter || modelFilter === "")
          && (carColor === colorFilter || colorFilter === "")
          && (carEngine === engineFilter || engineFilter === "")
          && (carHood === kuzovFilter || kuzovFilter === "")
          && (car.box === boxFilter || boxFilter === "")
          && (car.drive === driveFilter || driveFilter === "")) {
          filteredCars.push(car);
      }
  }
  displayCars(filteredCars);
}


// Определение списка моделей для каждой марки

// const modelsByBrand = {
//     BMW: ["X5"],//
//     Audi: ["A6", "TT","Explorer"],//
//     Toyota: ["Camry", "Tacoma","Corolla","RX450"],//
//     MercedesBenz: ["E-Class", "GLE"],//
//     Ford: ["Mustang", "TT", "Focus", "F-150"],//
//     Honda: ["S2000", "Odyssey", "Civic", "Accord"],//
//     Volkswagen: ["Passat", "Tiguan", "Polo", "Golf", "Caravelle"],//
//     Nissan: ["Sentra", "Qashqai"],//
//     Porsche: ["911"],//
//     Hyundai: ["Solaris", "Elantra GT"],//
//     Mazda: ["3", "MX-5"],//
//     Kia: ["Sedona", "Optima", "Rio"],//
//     Subaru: ["Impreza"],//
//     Mitsubishi: ["Lancer"],
//     Tank: ["500"],//
//     Lexus: ["Model S"],//
//     OMODA: ["C5"],//
//     EXEED: ["LX", "TXL"],//
//     Citroen: ["C3"],//
//     LADA: ["Vesta"],//
//     Skoda: ["Octavia"],//
//     Renault: ["Duster"]//
// };


//Функция для обновления списка моделей в зависимости от выбранной марки
async function updateModels() {
  // Получение элементов из HTML
  const brandSelect = document.getElementById("filterBrand");
  const modelSelect = document.getElementById("filterMark");
  // Получаем название выбранного бренда
  const selectedBrand = brandSelect.value;
  // Очищаем текущие опции в списке моделей
  modelSelect.innerHTML = "";

  // Если выбрана марка, добавляем соответствующие модели в список
  if (selectedBrand != "") {
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Модель";
      modelSelect.appendChild(defaultOption);

      // Получаем модели для выбранного бренда
      try {
        console.log(selectedBrand);
          const models = await getModelsByBrand(selectedBrand);
          for (const model of models) {
              const option = document.createElement("option");
              option.value = model;
              option.textContent = model;
              modelSelect.appendChild(option);
          }
      } catch (error) {
          console.error('Ошибка при получении моделей:', error);
      }
  }
}

// Добавляем слушатель события "change" к элементу марки
const brandSelect = document.getElementById("filterBrand");
brandSelect.addEventListener("change", updateModels);
// Добавление слушателя события change ко всем элементам фильтра
document.getElementById("filterBrand").addEventListener("change", filterCars);
document.getElementById("filterMark").addEventListener("change", filterCars);
document.getElementById("filterColor").addEventListener("change", filterCars);
document.getElementById("filterKuzov").addEventListener("change", filterCars);
document.getElementById("filterBox").addEventListener("change", filterCars);
document.getElementById("filterEngine").addEventListener("change", filterCars);

// Функция для отображения машин на экране
async function displayCars(filteredCars) {
    var automobilesDiv = document.getElementById("automobiles");//Выбираем див для машинок
    automobilesDiv.innerHTML = ""; // Очищаем содержимое div перед отображением новых машин

    for (var i = 0; i < filteredCars.length; i++) {//Для каждой машины делаем свою карточку
      var car = filteredCars[i];
  
      var carDiv = document.createElement("div");// do div
      carDiv.classList.add("car-card");
      carDiv.setAttribute('data-car-id', car.car_id);
  
      var image = document.createElement("img");// do image
      image.src = car.image_path;
      image.classList.add("car-image");
      carDiv.setAttribute('data-car-image', car.image_path);
      carDiv.appendChild(image);
        
      var brand = document.createElement("h3");//Марка
      const brandName = await getCarBrand(car.car_id);
      brand.textContent = `Марка: ${brandName}`;
      brand.classList.add("car-brand");
      carDiv.setAttribute('data-car-brand', brandName);
      carDiv.appendChild(brand);
      
      var model = document.createElement("p");//Модель
      const modelName = await getCarModel(car.car_id);
      model.textContent = `Модель: ${modelName}`;
      model.classList.add("car-model");
      carDiv.setAttribute('data-car-model', modelName);
      carDiv.appendChild(model);

      var engine = document.createElement("p");//двигатель
      const engineType = await getCarEngine(car.car_id);
      engine.textContent = `Двигатель: ${engineType}`;
      engine.classList.add("car-engine");
      carDiv.setAttribute('data-car-engine', engineType);
      carDiv.appendChild(engine);
  
      var color = document.createElement("p");//цвет
      const colorType = await getCarColor(car.car_id);
      color.textContent = `Цвет: ${colorType}`;
      color.classList.add("car-color");
      carDiv.setAttribute('data-car-color', colorType);
      carDiv.appendChild(color);

      var hood = document.createElement("p");//кузов
      const hoodType = await getCarHood(car.car_id);
      hood.textContent = `Кузов: ${hoodType}`;
      hood.classList.add("car-kuzov");
      carDiv.setAttribute('data-car-kuzov', hoodType);
      carDiv.appendChild(hood);
      
      var box = document.createElement("p");//коробка
      box.textContent = `Коробка: ${car.box}`;
      box.classList.add("car-box");
      carDiv.setAttribute('data-car-box', car.box);
      carDiv.appendChild(box);
      
      var drive = document.createElement("p");//привод
      drive.textContent = `Привод: ${car.drive}`;
      drive.classList.add("car-drive");
      carDiv.setAttribute('data-car-drive', car.drive);
      carDiv.appendChild(drive);

      var button = document.createElement("button");
      button.textContent = "Добавить в избранное";
      button.classList.add("add-button");

      var button2 = document.createElement("button");
      button2.textContent = "Рассчитать кредит";
      button2.classList.add("calculator-button");
      
      
      button.setAttribute('data-car-image', car.image_path);
      button.setAttribute('data-car-brand', brandName);
      button.setAttribute('data-car-model', modelName);
      button.setAttribute('data-car-drive', car.drive);
      button.setAttribute('data-car-box', car.box);
      button.setAttribute('data-car-kuzov', hoodType);
      button.setAttribute('data-car-color', colorType);
      button.setAttribute('data-car-engine', engineType);

      button2.setAttribute('data-car-price', car.price);
      button2.setAttribute('data-car-id', car.car_id);
      console.log(car.car_id);
      
      button.addEventListener('click', addToLocalStorage);
      carDiv.appendChild(button);

      button2.addEventListener('click', openLoanCalculation);
      carDiv.appendChild(button2);
  
      automobilesDiv.appendChild(carDiv);
    }
  }
// Функция для фильтрации машин в соответствии с выбором пользователя
// async function filterCars() {
//     var brandFilter = document.getElementById("filterBrand").value;
//     var modelFilter = document.getElementById("filterMark").value;
//     var engineFilter = document.getElementById("filterEngine").value;
//     var colorFilter = document.getElementById("filterColor").value;
//     var kuzovFilter = document.getElementById("filterKuzov").value;
//     var boxFilter = document.getElementById("filterBox").value;
//     var driveFilter = document.getElementById("filterDrive").value;
    
//     var filteredCars = cars.filter(async function(car) {
//       console.log("filterCars:");
//       console.log(car_id);
//       return (await getCarBrand(car.car_id) === brandFilter || brandFilter === "")
//       && (await getCarModel(car.car_id) === modelFilter || modelFilter === "")
//       &&(await getCarColor(car.car_id) === colorFilter || colorFilter ==="")
//         && (await getCarEngine(car.car_id) === engineFilter || engineFilter === "")
//         && (await getCarHood(car.car_id) === kuzovFilter || kuzovFilter === "")
//         && (car.box === boxFilter || boxFilter === "")
//         && (car.drive === driveFilter || driveFilter === "");
//     });
    
//     displayCars(filteredCars);
// }

// Показываем все машины при загрузке страницы
//displayCars(cars);

//Добавление в избранное

// Получение кнопок "Добавить в избранное"
const addToFavoriteButtons = document.querySelectorAll(".add-button");

// Функция обработчика события "click" для кнопки "Добавить в избранное"
function addToLocalStorage(event) {
  // const carId = event.target.getAttribute("data-car-id");
  // const userId = localStorage.getItem('userId');

  // if (!userId) {
  //   alert("Пожалуйста, войдите в систему, чтобы добавлять автомобили в избранное!");
  //   return;
  // }

  // fetch('PHP/addToFavorites.php', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: `userId=${userId}&carId=${carId}`
  // })
  // .then(response => response.json())
  // .then(data => {
  //   if (data.status === 'success') {
  //     alert(`Машина добавлена в избранное!`);
  //   } else {
  //     alert(`Ошибка при добавлении в избранное: ${data.message}`);
  //   }
  // })
  // .catch(error => {
  //   console.error('Ошибка:', error);
  //   alert('Произошла ошибка при добавлении в избранное');
  // });
  
  // Получаем информацию о машине из атрибутов кнопки
  const carBrand = event.target.getAttribute("data-car-brand");
  console.log(carBrand);
  const carImage = event.target.getAttribute("data-car-image");
  console.log(carImage);
  const carModel = event.target.getAttribute("data-car-model");
  console.log(carModel);
  const carEngine = event.target.getAttribute("data-car-engine");
  console.log(carEngine);
  const carKuzov = event.target.getAttribute("data-car-kuzov");
  const carBox = event.target.getAttribute("data-car-box");
  const carColor = event.target.getAttribute("data-car-color");
  const carDrive = event.target.getAttribute("data-car-drive");
  

  // Создаем объект для сохранения информации о машине
  const car = {
        "imagepath" : carImage,
        "brand" : carBrand,
        "model" : carModel,
        "color" : carColor,
        "kuzov" : carKuzov,
        "box" : carBox,
        "drive" : carDrive,
        "engine" : carEngine
  };

  // Получаем текущий список избранных элементов из localStorage
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(favorites);
  } else {
    favorites = [];
  }

  // Добавляем элемент в список избранных
  if (favorites.includes(car)){
    alert(`Ваша машина ${carBrand} ${carModel} уже была добавлена в избранное!`);
  }else {
    favorites.push(car);
    // Показываем сообщение об успешном добавлении в избранное
    alert(`Машина ${carBrand} ${carModel}  добавлена в избранное!`);
  }
  
  // Сохраняем обновленный список избранных элементов в localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  
}

// Добавляем слушатель события "click" к каждой кнопке "Добавить в избранное"
addToFavoriteButtons.forEach(function(button) {
  button.addEventListener("click", addToLocalStorage);
});

//клик на кнопку "Рассчитать кредит" для машины
function openLoanCalculation(event) {
  const carPrice = event.target.getAttribute('data-car-price');
  const carId = event.target.getAttribute('data-car-id');
  console.log(carId);
  window.location.href = `LoanCalculation.html?price=${carPrice}&id=${carId}`;
}
// Добавляем слушатель события "click" к каждой кнопке "Рассчитать кредит"
addToFavoriteButtons.forEach(function(button) {
  button.addEventListener("click", openLoanCalculation);
});
})
.catch(error => console.error('Error:', error));
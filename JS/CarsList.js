// Создаем массив машин в виде JSON
var cars = [
    {
        "imagepath" : "images/BMWX5Black.png",
        "brand" : "BMW",//
        "model" : "X5",
        "color" : "Черный",
        "kuzov" : "Внедорожник",
        "box" : "Автомат",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/audi_a6.jpg",
        "brand" : "Audi",//
        "model" : "A6",
        "color" : "Серебристый",
        "kuzov" : "Седан",
        "box" : "Робот",
        "drive" : "Передний",
        "engine" : "Дизельный"
    },
    {
        "imagepath" : "images/toyota_camry.jpg",
        "brand" : "Toyota",//
        "model" : "Camry",
        "color" : "Черный",
        "kuzov" : "Седан",
        "box" : "Вариатор",
        "drive" : "Передний",
        "engine" : "Гибридный"
    },
    {
        "imagepath" : "images/Mercedes-Benz_GLE.jpg",
        "brand" : "Mercedes-Benz",//
        "model" : "GLE",
        "color" : "Черный",
        "kuzov" : "Кроссовер",
        "box" : "Автоматическая",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/ford_mustang.jpg",
        "brand" : "Ford",//
        "model" : "Mustang",
        "color" : "Красный",
        "kuzov" : "Купе",
        "box" : "Механическая",
        "drive" : "Задний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/honda_civic.jpg",
        "brand" : "Honda",//
        "model" : "Civic",
        "color" : "Серый",
        "kuzov" : "Хэтчбек",
        "box" : "Вариатор",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/volkswagen_passat.jpg",
        "brand" : "Volkswagen",//
        "model" : "Passat",
        "color" : "Черный",
        "kuzov" : "Универсал",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Дизельный"
    },
    {
        "imagepath" : "images/nissan-qashqai.jpg",
        "brand" : "Nissan",
        "model" : "Qashqai",
        "color" : "Синий",
        "kuzov" : "Кроссовер",
        "box" : "Вариатор",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/porshe_911.jpg",
        "brand" : "Porsche",
        "model" : "911",
        "color" : "Коричневый",
        "kuzov" : "Купе",
        "box" : "Робот",
        "drive" : "Задний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/vw_Golf.jpg",
        "brand" : "Volkswagen",
        "model" : "Golf",
        "color" : "Синий",
        "kuzov" : "Хэтчбек",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/ford_focus.jpg",
        "brand" : "Ford",
        "model" : "Focus",
        "color" : "Коричневый",
        "kuzov" : "Седан",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/toyota-corolla.jpg",
        "brand" : "Toyota",
        "model" : "Corolla",
        "color" : "Серебристый",
        "kuzov" : "Седан",
        "box" : "Вариатор",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/honda_accord.jpg",
        "brand" : "Honda",
        "model" : "Accord",
        "color" : "Красный",
        "kuzov" : "Седан",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Hyundai-Elantra-GT.jpg",
        "brand" : "Hyundai",
        "model" : "Elantra GT",
        "color" : "Синий",
        "kuzov" : "Седан",
        "box" : "Вариатор",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Mazda-3.jpg",
        "brand" : "Mazda",
        "model" : "3",
        "color" : "Красный",
        "kuzov" : "Хэтчбек",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/kia_optima.jpeg",
        "brand" : "KIA",
        "model" : "Optima",
        "color" : "Краный",
        "kuzov" : "Седан",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/nissan_sentra.jpg",
        "brand" : "Nissan",
        "model" : "Sentra",
        "color" : "Красный",
        "kuzov" : "Седан",
        "box" : "Вариатор",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/subaru_impreza.jpg",
        "brand" : "Subaru",
        "model" : "Impreza",
        "color" : "Серебристый",
        "kuzov" : "Хэтчбек",
        "box" : "Автоматическая",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Mitsubishi_lancer.jpg",
        "brand" : "Mitsubishi",
        "model" : "Lancer",
        "color" : "Черный",
        "kuzov" : "Седан",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/tank_500.jpg",
        "brand" : "Tank",
        "model" : "500",
        "color" : "Бежевый",
        "kuzov" : "Внедорожник",
        "box" : "Автоматическая",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Tesla_Model_S.jpg",
        "brand" : "Tesla",
        "model" : "Model S",
        "color" : "Серый",
        "kuzov" : "Седан",
        "box" : "Без коробки передач",
        "drive" : "Задний",
        "engine" : "Электромотор"
    },
    {
        "imagepath" : "images/ford_explorer.jpg",
        "brand" : "Ford",
        "model" : "Explorer",
        "color" : "Белый",
        "kuzov" : "Внедорожник",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/VW_Tiguan.jpg",
        "brand" : "Volkswagen",
        "model" : "Tiguan",
        "color" : "Черный",
        "kuzov" : "Кроссовер",
        "box" : "Автоматическая",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Lexus_RX450.jpg",
        "brand" : "Lexus",
        "model" : "RX450",
        "color" : "Белый",
        "kuzov" : "Кроссовер",
        "box" : "Автоматическая",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/omoda_c5.jpg",
        "brand" : "OMODA",
        "model" : "C5",
        "color" : "Серый",
        "kuzov" : "Кроссовер",
        "box" : "Вариатор",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Audi_TT.jpg",
        "brand" : "Audi",
        "model" : "TT",
        "color" : "Серый",
        "kuzov" : "Купе",
        "box" : "Механическая",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/mazda_mx-5.jpg",
        "brand" : "Mazda",
        "model" : "MX-5",
        "color" : "Красный",
        "kuzov" : "Кабриолет",
        "box" : "Механическая",
        "drive" : "Задний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/honda-s2000.jpg",
        "brand" : "Honda",
        "model" : "S2000",
        "color" : "Желтый",
        "kuzov" : "Кабриолет",
        "box" : "Механическая",
        "drive" : "Задний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/exeed_lx.jpg",
        "brand" : "EXEED",
        "model" : "LX",
        "color" : "Белый",
        "kuzov" : "Кроссовер",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/citroen_c3.jpg",
        "brand" : "Citroen",
        "model" : "C3",
        "color" : "Красный",
        "kuzov" : "Хэтчбек",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/HONDA_ODYSSEY.jpg",
        "brand" : "Honda",
        "model" : "Odyssey",
        "color" : "Белый",
        "kuzov" : "Минивэн",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/kia_sedona.jpg",
        "brand" : "KIA",
        "model" : "Sedona",
        "color" : "Минивэн",
        "kuzov" : "Коричневый",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/VW_Caravelle.jpg",
        "brand" : "Volkswagen",
        "model" : "Caravelle",
        "color" : "Белый",
        "kuzov" : "Минивэн",
        "box" : "Автоматическая",
        "drive" : "Полный",
        "engine" : "Дизельный"
    },
    {
        "imagepath" : "images/ford-f-150.jpg",
        "brand" : "Ford",
        "model" : "F-150",
        "color" : "Черный",
        "kuzov" : "Пикап",
        "box" : "Автоматическая",
        "drive" : "Полный",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Toyota_Tacoma.jpg",
        "brand" : "Toyota",
        "model" : "Tacoma",
        "color" : "Серый",
        "kuzov" : "Пикап",
        "box" : "Механическая",
        "drive" : "Полный",
        "engine" : "Дизельный"
    },
    {
        "imagepath" : "images/lada_vesta.jpeg",
        "brand" : "LADA",
        "model" : "Vesta",
        "color" : "Черный",
        "kuzov" : "Седан",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/skoda_Octavia.jpg",
        "brand" : "Skoda",
        "model" : "Octavia",
        "color" : "Белый",
        "kuzov" : "Хэтчбек",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/hyudnai_solaris.jpg",
        "brand" : "Hyundai",
        "model" : "Solaris",
        "color" : "Белый",
        "kuzov" : "Седан",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Kia_rio.jpg",
        "brand" : "KIA",
        "model" : "Rio",
        "color" : "Белый",
        "kuzov" : "Седан",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Renault_Duster.JPG",
        "brand" : "Renault",
        "model" : "Duster",
        "color" : "Серый",
        "kuzov" : "Кроссовер",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Mercedes-Benz_E-Class.jpg",
        "brand" : "Mercedes-Benz",
        "model" : "E-Class",
        "color" : "Серый",
        "kuzov" : "Седан",
        "box" : "Автоматическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    {
        "imagepath" : "images/Volkswagen_Polo.jpg",
        "brand" : "Volkswagen",
        "model" : "Polo",
        "color" : "Серый",
        "kuzov" : "Хэтчбек",
        "box" : "Механическая",
        "drive" : "Передний",
        "engine" : "Бензиновый"
    },
    
];
// Преобразуем массив в строку JSON
var carsString = JSON.stringify(cars);

// Сохраняем строку в localStorage
localStorage.setItem('cars', carsString);

// Функция для отображения машин на экране
function displayCars(filteredCars) {
    var automobilesDiv = document.getElementById("automobiles");//Выбираем див для машинок
    automobilesDiv.innerHTML = ""; // Очищаем содержимое div перед отображением новых машин

    for (var i = 0; i < filteredCars.length; i++) {//Для каждой машины делаем свою карточку
      var car = filteredCars[i];
  
      var carDiv = document.createElement("div");// do div
      carDiv.classList.add("car-card");
  
      var image = document.createElement("img");// do image
      image.src = car.imagepath;
      image.classList.add("car-image");
      carDiv.setAttribute('data-car-image', car.imagepath);
      carDiv.appendChild(image);
        
      var brand = document.createElement("h3");//Марка
      brand.textContent = "Марка: " + car.brand;
      brand.classList.add("car-brand");
      carDiv.setAttribute('data-car-brand', car.brand);
      carDiv.appendChild(brand);
      
      var model = document.createElement("p");//Модель
      model.textContent = "Модель: " + car.model;
      model.classList.add("car-model");
      carDiv.setAttribute('data-car-model', car.model);
      carDiv.appendChild(model);

      var engine = document.createElement("p");//двигатель
      engine.textContent = "Двигатель: " + car.engine;
      engine.classList.add("car-engine");
      carDiv.setAttribute('data-car-engine', car.engine);
      carDiv.appendChild(engine);
  
      var color = document.createElement("p");//цвет
      color.textContent = "Цвет: " + car.color;
      color.classList.add("car-color");
      carDiv.setAttribute('data-car-color', car.color);
      carDiv.appendChild(color);

      var kuzov = document.createElement("p");//кузов
      kuzov.textContent = "Кузов: " + car.kuzov;
      kuzov.classList.add("car-kuzov");
      carDiv.setAttribute('data-car-kuzov', car.kuzov);
      carDiv.appendChild(kuzov);
      
      var box = document.createElement("p");//коробка
      box.textContent = "Коробка: " + car.box;
      box.classList.add("car-box");
      carDiv.setAttribute('data-car-box', car.box);
      carDiv.appendChild(box);
      
      var drive = document.createElement("p");//привод
      drive.textContent = "Привод: " + car.drive;
      drive.classList.add("car-drive");
      carDiv.setAttribute('data-car-drive', car.drive);
      carDiv.appendChild(drive);

      var button = document.createElement("button");
      button.textContent = "Добавить в избранное";
      button.classList.add("add-button");
      
      
      button.setAttribute('data-car-image', car.imagepath);
      button.setAttribute('data-car-brand', car.brand);
      button.setAttribute('data-car-model', car.model);
      button.setAttribute('data-car-drive', car.drive);
      button.setAttribute('data-car-box', car.box);
      button.setAttribute('data-car-kuzov', car.kuzov);
      button.setAttribute('data-car-color', car.color);
      button.setAttribute('data-car-engine', car.engine);
      
      button.addEventListener('click', addToLocalStorage);
      carDiv.appendChild(button);
  
      automobilesDiv.appendChild(carDiv);
    }
  }

// Показываем все машины при загрузке страницы
displayCars(cars);

//Добавление в избранное

// Получение кнопок "Добавить в избранное"
const addToFavoriteButtons = document.querySelectorAll(".add-button");

// Функция обработчика события "click" для кнопки "Добавить в избранное"
function addToLocalStorage(event) {
  // Получаем информацию о машине из атрибутов кнопки
  const carBrand = event.target.getAttribute("data-car-brand");
  const carImage = event.target.getAttribute("data-car-image");
  const carModel = event.target.getAttribute("data-car-model");
  const carEngine = event.target.getAttribute("data-car-engine");
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
  favorites.push(car);

  // Сохраняем обновленный список избранных элементов в localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  // Показываем сообщение об успешном добавлении в избранное
  alert(`Машина ${carBrand} ${carModel}  добавлена в избранное!`);
}

// Добавляем слушатель события "click" к каждой кнопке "Добавить в избранное"
addToFavoriteButtons.forEach(function(button) {
  button.addEventListener("click", addToLocalStorage);
});

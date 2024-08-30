//получаем элемент, куда будем выводить список избранных элементов
const favoritesList = document.getElementById("favoritesList");

//получаем список избранных элементов из localStorage
let favorites = localStorage.getItem("favorites");
if (favorites) {
  favorites = JSON.parse(favorites);
} else {
  favorites = [];
}
//функция для удаления элемента из избранного
function removeFromFavorites(index) {
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderFavorites();
  location.reload();
}
function renderFavorites() {

//проходимся по каждому элементу избранных элементов

favorites.forEach(function(car) {
  //создаем див для элемента
  const carDiv = document.createElement("div");
  carDiv.classList.add("car-card");

  //создаем элементы для отображения информации о машине
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

    //кнопка "Удалить из избранного"
    const removeButton = document.createElement("button");
    removeButton.textContent = "Удалить из избранного";
    removeButton.classList.add("add-button");
    //назначаем обработчик события при нажатии на кнопку
    removeButton.addEventListener("click", function() {
      removeFromFavorites(favorites.indexOf(car));
    });
    carDiv.appendChild(removeButton);

  //добавляем див в список избранных элементов
  favoritesList.appendChild(carDiv);
});
}
//вызываем функцию для отображения списка избранных элементов
renderFavorites();
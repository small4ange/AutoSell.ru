
<!DOCTYPE html>
<html lang="en">
<head>
    <!--Кодировка-->
    <meta charset="UTF-8">
    <!--Легкий поиск для пользователя-->
    <meta name = "author" content = "Волкова Екатерина">
    <meta name = "keywords" content = "машина, кредит, рассчет кредита, выбор машины, тест">
    <meta name = "description" content = "AutoSell">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Название страницы-->
    <title>Главная - AutoSell.ru</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!--Подключение шрифтов-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel = "stylesheet" href = "CSS/Home.css">
    
</head>
<body>
    <div id="sidebar">
        <div class="toggle-button" onclick = "openMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
            <li>Меню</li>
            <li><a class = "header-link" href="index.php" target="_self" title = "Главная">Главная</a></li>
            <li><a class = "header-link" href="AboutUs.html" target="_self" title = "О нас">О нас</a></li>
            <li><a class = "header-link" href="LoanCalculation.html" target="_self" title = "Рассчет кредита">Рассчет кредита</a></li>
            <li><a class = "header-link" href="Test.html" target="_self" title = "Тест">Тест</a></li>
            <li><a class = "header-link" href="Catalog.html" target="_self" title = "Каталог">Каталог</a></li>
            <li><a class = "header-link" href="Favorites.html" target="_self" title = "Избранное">Избранное</a></li>
            <li> <a class = "header-link" href="Profile.html" target="_self" title = "Профиль">Профиль</a></li>
        </ul>
    </div>
    <!--Шапка сайта-->
    
    <header>
        <div class = "header">
        <img id = "logo" src="images/лого 3 сайт-01.png" width = "4%" alt="Логотип">
        <b>AutoSell</b>
        <span>
            <span>
                <a class = "header-link" href="index.php" target="_self" title = "Главная">Главная</a>
            </span>
            <span>
                <a class = "header-link" href="AboutUs.html" target="_self" title = "О нас">О нас</a>
            </span>
            <span>
                <a class = "header-link" href="LoanCalculation.html" target="_self" title = "Рассчет кредита">Рассчет кредита</a>
            </span>
            <span>
                <a class = "header-link" href="Test.html" target="_self" title = "Тест">Тест</a>
            </span>
            <span>
                <a class = "header-link" href="Catalog.html" target="_self" title = "Каталог">Каталог</a>
            </span>
            <span>
                <a class = "header-link" href="Favorites.html" target="_self" title = "Избранное">Избранное</a>
            </span>
            <span>
                <a class = "header-link" href="Profile.html" target="_self" title = "Профиль">Профиль</a>
            </span>
        </span>
        </div>
    </header>
    
    
    <div id = "first-image">
    <h1 id = "head-text"><b>Ищешь машину?<br>Мы поможем!</b></h1>
    <!--<img id = "automobile" src = "images/automobile.jpg">-->
    </div>
    <!--Текст главной страницы-->
    <div class = "container1">
    <p class = "content">Мы понимаем, что выбор автомобиля - это важный и ответственный шаг, поэтому мы подберем для вас оптимальное предложение по вашим предпочтениям всего за <spin class = "colorful">несколько шагов!</spin></p>
    <h2 class = "home-h2"><big><b>1</b></big><small><b> <spin class = "colorful">Зарегестрируйся</spin> на нашем сайте</b></small></h2>
    <div class = "registration">
        <input class = "registration-input" id = "user_name" type="text" placeholder="Имя"><br>
        <input class = "registration-input" id = "user_login" type="text" placeholder="Логин"><br>
        <input class = "registration-input" id = "user_password" type="text" placeholder="Пароль"><br>
        <button id = "registration-button" >Зарегистрироваться</button>
        <div id="message"></div>
    </div>
    <p class = "content">Для прохождения теста вам необходимо <spin class = "colorful">зарегистрироваться</spin> на нашем сайте, так вы сможете сохранить выбранные вами машины.</p>
    <h2 class = "home-h2"><big><b>2</b></big><small><b> Пройди <spin class = "colorful">тест</spin></b></small></h2>
    <p class = "content">Не забудь добавить свой выбор в <spin class = "colorful">избранное</spin></p>
    <button id = "test-button" >Начать тест</button>
    <h2 class = "home-h2"><big><b>3</b></big><small><b> Зайди в <spin class = "colorful">избранное</spin> и жми кнопку <spin class = "colorful">рассчитать кредит</spin></b></small></h2>
    <p class = "content">Это поможет вам выбрать машину в соответствии с вашим бюджетом</p>
    <h2 class = "home-h2"><big><b>4</b></big><small><b> <spin class = "colorful">Готово!</spin> Вы подобрали для себя идеальную машину</b></small></h2>
    <p class = "content">Расскажите о нашем сайте свойм друзьям и близким, которые находятся в поисках своей идеальной машины!</p>
    <div id = "filters">
        <div class = "question">
            <select class="answer" id = "filterBrand">
              <option value="" >Марка</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Cherry">Cherry</option>
              <option value="EXEED">EXEED</option>
              <option value="Citroen">Citroen</option>
              <option value="FAW">FAW</option>
              <option value="Ford">Ford</option>
              <option value="ГАЗ">ГАЗ</option>
              <option value="Geely">Geely</option>
              <option value="Haval">Haval</option>
              <option value="Honda">Honda</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Infiniti">Infiniti</option>
              <option value="JAC">JAC</option>
              <option value="KIA">KIA</option>
              <option value="LADA">LADA</option>
              <option value="Lexus">Lexus</option>
              <option value="Livan">Livan</option>
              <option value="Mazda">Mazda</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="Москвич">Москвич</option>
              <option value="Nissan">Nissan</option>
              <option value="OMODA">OMODA</option>
              <option value="Porsche">Porsche</option>
              <option value="Skoda">Skoda</option>
              <option value="Subaru">Subaru</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Tank">Tank</option>
              <option value="Tesla">Tesla</option>
              <option value="Toyota">Toyota</option>
              <option value="УАЗ">УАЗ</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Volvo">Volvo</option>
              <option value="Voyah">Voyah</option>
            </select>
        </div>
        <div class = "question">
            <select class="answer" id = "filterMark">
                <option value="">Модель</option>
            </select>
        </div>
        <div class = "question">
            <select class="answer" id = "filterColor" >
                <option value="">Цвет</option>
                <option value="Красный">Красный</option>
                <option value="Серебристый">Серебристый</option>
                <option value="Бежевый">Бежевый</option>
                <option value="Белый">Белый</option>
                <option value="Черный">Черный</option>
                <option value="Синий">Синий</option>
                <option value="Коричневый">Коричневый</option>
                <option value="Желтый">Желтый</option>
            </select>
        </div>
        <div class = "question">
        <select class="answer" id = "filterKuzov" >
            <option value="">Кузов</option>
          <option value="Седан">Седан</option>
          <option value="Купе">Купе</option>
          <option value="Кроссовер">Кроссовер</option>
          <option value="Хетчбэк">Хетчбэк</option>
          <option value="Кабриолет">Кабриолет</option>
          <option value="Универсал">Универсал</option>
          <option value="Минивэн">Минивэн</option>
          <option value="Внедорожник">Внедорожник</option>
          <option value="Пикап">Пикап</option>
          <option value="Микроавтобус">Микроавтобус</option>
          <option value="Грузовик">Грузовик</option>
          <option value="Фургон">Фургон</option>
        </select>
        </div>
        
        <div class = "question">
        <select class="answer" id = "filterBox" >
            <option value="">Коробка</option>
          <option value="Автомат">Автомат</option>
          <option value="Робот">Робот</option>
          <option value="Автоматическая">Автоматическая</option>
          <option value="Вариатор">Вариатор</option>
          <option value="Механическая">Механическая</option>
        </select>
        </div>
    
        <div class = "question">
            <select class="answer" id = "filterDrive" >
                <option value="">Привод</option>
              <option value="Полный">Полный</option>
              <option value="Передний">Передний</option>
              <option value="Задний">Задний</option>
            </select>
        </div>
        <div class = "question">
            <select class="answer" id = "filterEngine" >
              <option value="">Двигатель</option>
              <option value="Бензиновый">Бензиновый</option>
              <option value="Дизельный">Дизельный</option>
              <option value="Электромотор">Электромотор</option>
              <option value="Гибридный">Гибридный</option>
            </select>
        </div>
    </div>
    <!--<button id = "result">Посмотреть автомобили</button>-->
    <ul id = "results">

    </ul>
    <div id = "automobiles">

    </div>
    </div>
    <!--Текст в конце страницы-->
    <footer>
    <a class = "footer-link" href="mailto:katrinavolk37695@gmail.com">Написать на почту</a>
    <p></p>
    <p>Контакты</p>
    <p>+ 7 (917) 878-31-21</p>
    </footer>



<script src = 'JS/Menu.js'></script>
<script src = 'JS/CarsListAll.js'></script>
<script src = 'JS/User.js'></script>


</body>
</html>
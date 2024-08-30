document.getElementById('registration-button').addEventListener('click', function() {
    var userName = document.getElementById('user_name').value;
    var userLogin = document.getElementById('user_login').value;
    var userPassword = document.getElementById('user_password').value;

    var formData = new FormData();
    formData.append('user_name', userName);
    formData.append('user_email', userLogin);
    formData.append('user_password', userPassword);

    fetch('/Курсовая_сайт/PHP/register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
       // const messageElement = document.getElementById('message');
        if (data.status === 'error') {
            alert('Ошибка: ' + data.message); // Вывод ошибки через alert
        } else {
            alert(data.message); // Вывод ошибки через alert
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

    
});

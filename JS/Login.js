document.getElementById('login-button').addEventListener('click', function() {
    var userName = document.getElementById('login_user_name').value;
    var userEmail = document.getElementById('login_user_email').value;
    var userPassword = document.getElementById('login_user_password').value;

    var formData = new FormData();
    formData.append('user_name', userName);
    formData.append('user_email', userEmail);
    formData.append('user_password', userPassword);

    fetch('/Курсовая_сайт/PHP/login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('login-message');
        if (data.status === 'success') {
            messageElement.textContent = data.message;
            messageElement.style.color = 'green';
            // Сохраняю пользователя в localStorage
            localStorage.setItem('userId', data.user_id);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userEmail', userEmail);
            document.getElementById('user-name').textContent = userName;
            document.getElementById('user-email').textContent = userEmail;
        } else { 
            messageElement.textContent = data.message;
            messageElement.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});

// Проверяем статус входа при загрузке страницы
if (localStorage.getItem('userId')) {
    document.getElementById('login-message').textContent = 'Вход в систему уже выполнен';
}

window.addEventListener('load', () => {
    let userForm = document.querySelector('.form-login');
    let userEmail = document.querySelector('#email');
    let userPassword = document.querySelector('#password');

    userForm.addEventListener('submit', (e) => {
        if (userEmail.value == '') {
            e.preventDefault();
            
            let errorEmail = document.querySelector('.error-message-email');
            errorEmail.innerHTML += 'Por favor, ingresa tu email';
            userEmail.classList.add('input-error');
        }
        else if (!(userEmail.value.includes ("@") && userEmail.value.includes ("."))) {
            e.preventDefault();
            
            let errorEmail = document.querySelector('.error-message-email');
            errorEmail.innerHTML += 'Debes ingresar un email válido';
            userEmail.classList.toggle('form-input');
            userEmail.classList.add('input-error');
        }

        if (userPassword.value == '') {
            e.preventDefault();
            
            let errorPassword = document.querySelector('.error-message-password');
            errorPassword.innerHTML += 'Debes completar la contraseña';
            userPassword.classList.toggle('form-input');
            userPassword.classList.add('input-error');
        }
    });
});
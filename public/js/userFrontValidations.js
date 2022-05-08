window.addEventListener('load', () => {
    let userForm = document.querySelector('.formLogin');
    let userEmail = document.querySelector('#email');
    let userPassword = document.querySelector('#password');

    userForm.addEventListener('submit', (e) => {
        if (userEmail.value == '') {
            e.preventDefault();
            
            let errorEmail = document.querySelector('.error-message-email');
            errorEmail.innerHTML += 'Debes completar el email';

        }
        else if (!(userEmail.value.includes ("@") && userEmail.value.includes ("."))) {
            e.preventDefault();
            
            let errorEmail = document.querySelector('.error-message-email');
            errorEmail.innerHTML += 'Tiene que ser un email válido';
        }

        if (userPassword.value == '') {
            e.preventDefault();
            
            let errorPassword = document.querySelector('.error-message-password');
            errorPassword.innerHTML += 'Debes completar la contraseña';
        }
    });
});
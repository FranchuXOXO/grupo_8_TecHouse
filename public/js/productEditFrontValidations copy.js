window.addEventListener('load', () => {
    let userForm = document.querySelector('.formLogin');
    let userEmail = document.querySelector('#correo');

    userForm.addEventListener('submit', (e) => {
        if (userEmail.value == '') {
            e.preventDefault();
            
            let errorEmail = document.querySelector('.error-message-email');
            errorEmail.innerHTML += 'Debes completar el email';
        }
    });
});
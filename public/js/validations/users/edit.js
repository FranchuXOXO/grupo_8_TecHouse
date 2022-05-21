window.addEventListener('load', () => {
    let userForm = document.querySelector('.form-sign-up');
    let userFirstName = document.querySelector('#first_name');
    let userLastName = document.querySelector('#last_name');
    let userImage = document.querySelector('#profile_image');

    userForm.addEventListener('submit', (e) => {
        if (userFirstName.value == '') {
            e.preventDefault();
            
            let errorFirstName = document.querySelector('.error-message-first-name');
            errorFirstName.innerHTML += 'Por favor, ingresa tu nombre';
        }
        
        if (userLastName.value == '') {
            e.preventDefault();
            
            let errorlastName = document.querySelector('.error-message-last-name');
            errorlastName.innerHTML += 'Por favor, ingresa tu apellido';
        }

        if (userImage.value == '') {
            e.preventDefault();
            
            let errorUserImage = document.querySelector('.error-message-userImage');
            errorUserImage.innerHTML += 'Por favor, ingresa una imagen para tu usuario';
        }
    });
});
window.addEventListener('load', () => {
    let userForm = document.querySelector('.form-sign-up');
    let userFirstName = document.querySelector('#first_name');
    let userLastName = document.querySelector('#last_name');
    let userEmail = document.querySelector('#email');
    let userCategory = document.querySelector('#id_category');
    let userImage = document.querySelector('#profile_image');
    let userPassword = document.querySelector('#password');

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

        if (userEmail.value == '') {
            e.preventDefault();
            
            let errorlastName = document.querySelector('.error-message-email');
            errorlastName.innerHTML += 'Por favor, ingresa tu email';
        }
        else if (!(userEmail.value.includes("@") && userEmail.value.includes("."))) {
            e.preventDefault();
            
            let errorEmail = document.querySelector('.error-message-email');
            errorEmail.innerHTML += 'Debes ingresar un email válido';
        }

        if (userCategory.value == '') {
            e.preventDefault();
            
            let errorCategory = document.querySelector('.error-message-category');
            errorCategory.innerHTML += 'Por favor, selecciona una categoría para el usuario';
        }

        if (userImage.value == '') {
            e.preventDefault();
            
            let errorUserImage = document.querySelector('.error-message-userImage');
            errorUserImage.innerHTML += 'Por favor, ingresa una imagen para tu usuario';
        }
        
        if (userPassword.value == '') {
            e.preventDefault();
            
            let errorPassword = document.querySelector('.error-message-password');
            errorPassword.innerHTML += 'Por favor, ingresa una contraseña';
        }
    });
});
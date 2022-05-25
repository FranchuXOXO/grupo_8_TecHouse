window.addEventListener('load', () => {
    let userForm = document.querySelector('.form-sign-up');
    let userFirstName = document.querySelector('#first_name');
    let userLastName = document.querySelector('#last_name');
    let userImage = document.querySelector('#profile_image');

    userForm.addEventListener('submit', (e) => {
        if (userFirstName.value == '') {
            e.preventDefault();
            
            let errorFirstName = document.querySelector('.error-message-first-name');
            if (errorFirstName.innerText == ''){
                errorFirstName.innerHTML += 'Por favor, ingresa un nombre';
            }
            userFirstName.classList.toggle('form-input');
            userFirstName.classList.add('input-error');
        }
        
        if (userLastName.value == '') {
            e.preventDefault();
            
            let errorlastName = document.querySelector('.error-message-last-name');
            if (errorlastName.innerText == ''){
                errorlastName.innerHTML += 'Por favor, ingresa un apellido';
            }
            userLastName.classList.toggle('form-input');
            userLastName.classList.add('input-error');
        }

        if (userImage.value == '') {
            e.preventDefault();
            
            let errorUserImage = document.querySelector('.error-message-userImage');
            if (errorUserImage.innerText == ''){
                errorUserImage.innerHTML += 'Por favor, carga una imagen para el perfil';
            }
            userImage.classList.toggle('form-input');
            userImage.classList.add('input-error');
        }
    });
});
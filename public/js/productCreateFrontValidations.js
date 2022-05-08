window.addEventListener('load', () => {
    let formProductCreate = document.querySelector('.formProductCreate');
    let productName = document.querySelector('#productName');
    let productDescription = document.querySelector('#productDescription');
    let productImage = document.querySelector('#productImage');


    formProductCreate.addEventListener('submit', (e) => {
        if (productName.value == '') {
            e.preventDefault();
            let errorProductName = document.querySelector('.error-product-name');
            errorProductName.innerHTML += 'Debes completar el nombre del producto';
        } else if (productName.value.length < 5) {
            e.preventDefault();
            let errorProductName = document.querySelector('.error-product-name');
            errorProductName.innerHTML += 'El nombre del producto debe tener mas de 5 caracteres';
        }
        if (productDescription.value.length < 20) {
            e.preventDefault();
            let errorProductDescription = document.querySelector('.error-product-description');
            errorProductDescription.innerHTML += 'La descripción debe tener mas de 20 caracteres';
        }
        if (!(productImage.value.includes ('.jpg') || productImage.value.includes ('.jpeg') || productImage.value.includes ('.png') || productImage.value.includes ('.gif') || productImage.value.includes ('.JPG') || productImage.value.includes ('.JPEG') || productImage.value.includes ('.PNG') || productImage.value.includes ('.GIF'))) {
            e.preventDefault();
            let errorProductImage = document.querySelector('.error-product-image');
            errorProductImage.innerHTML += 'La imagen debe tener una extensión válida';
        }
    });
});
window.addEventListener('load', () => {
    let formProductCreate = document.querySelector('.formProductCreate');
    let productName = document.querySelector('#productName');

    formProductCreate.addEventListener('submit', (e) => {
        if (productName.value == '') {
            e.preventDefault();
            let errorProductName = document.querySelector('.error-product-name');
            errorProductName.innerHTML += 'Debes completar el nombre del producto';
        }
    });
});
window.addEventListener('load', () => {
    let headerSearchBardesktop = document.querySelector('.header-searchBar-desktop');
    let headerSearchBar = document.querySelector('#headerSearchBar');

    headerSearchBardesktop.addEventListener('submit', (e) => {
        if (headerSearchBar.value == '') {
            e.preventDefault();
            let searchBarError = document.querySelector('.error-searchBar');
            searchBarError.innerText = ''
            searchBarError.innerHTML += 'Este campo está vacío';
        }
    });
});
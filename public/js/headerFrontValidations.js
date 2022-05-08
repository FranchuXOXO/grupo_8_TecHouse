window.addEventListener('load', () => {
    let headerSearchBardesktop = document.querySelector('.header-searchBar-desktop');
    let headerSearchBar = document.querySelector('#headerSearchBar');

    headerSearchBardesktop.addEventListener('submit', (e) => {
        if (headerSearchBar.value == '') {
            e.preventDefault();
            let searchBarError = document.querySelector('.error-searchBar');
            searchBarError.innerHTML += 'Este Campo esta vacio';
        }
    });
});
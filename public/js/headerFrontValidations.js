window.addEventListener('load', () => {
    let searchForm = document.querySelector('.search-form');
    let headerSearchBar = document.querySelector('#headerSearchBar');

    searchForm.addEventListener('submit', (e) => {
        if (headerSearchBar.value == '') {
            e.preventDefault();
           alert("Debes escribir algo")
           headerSearchBar.focus()
            // let searchBarError = document.querySelector('.error-searchBar');
          //  searchBarError.innerText = ''
           // searchBarError.innerHTML += 'Este campo está vacío';
        }
    });
});
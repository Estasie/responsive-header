document.addEventListener('DOMContentLoaded', () => {
    const catalog_button = document.querySelector('#dropdown_button'),
        dropdown = document.querySelector('.dropdown');

    catalog_button.addEventListener('mouseover', () => {
        dropdown.classList.add('open_menu');
    });
    // catalog_button.addEventListener('mouseleave', () => {
    //     dropdown.classList.remove('open_menu');
    // });
});


// https://codepen.io/sean_codes/pen/WdzgdY
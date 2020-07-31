document.addEventListener('DOMContentLoaded', () => {

    const headerDropdown = document.querySelector('.header-bottom__dropdown'),
        headerMenu = document.querySelector('.header-bottom__navigation');

    headerDropdown.addEventListener('click', () => {
        headerMenu.classList.toggle('open');
    });
});
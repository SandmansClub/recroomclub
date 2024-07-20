document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.toggle-button');
    const sideMenu = document.querySelector('.side-menu');
    const wrapper = document.querySelector('.wrapper');
    const backdrop = document.querySelector('.backdrop');

    menuButton.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
        wrapper.classList.toggle('shifted');
        backdrop.classList.toggle('show'); // Show or hide backdrop
    });

    backdrop.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        wrapper.classList.remove('shifted');
        backdrop.classList.remove('show'); // Hide backdrop when clicked
    });
});

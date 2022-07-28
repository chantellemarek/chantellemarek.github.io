// scroll function for the navigation bar
window.addEventListener('scroll', function() {
    // Create variable for header to edit header
    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0);
});

// function for the hamburger navigation
function toggleMenu() {
    // toggle the menu
    var menuToggle = document.querySelector('.toggle');
    // menu
    var menu = document.querySelector('.menu');

    // add active class to menu
    menuToggle.classList.toggle('active');
    // 
    menu.classList.toggle('active');
}
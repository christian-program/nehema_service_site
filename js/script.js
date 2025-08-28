document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('header nav');

    // Gère l'affichage du menu mobile
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Gère les sous-menus sur mobile
    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                e.preventDefault(); // Empêche le lien de naviguer
                const parent = this.parentElement;
                parent.classList.toggle('active');
            }
        });
    });
});
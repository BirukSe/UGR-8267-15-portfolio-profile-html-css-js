document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    document.querySelector('.navigation').appendChild(menuContainer);

    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menu-icon');
    menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    menuContainer.appendChild(menuIcon);

    const nav = document.querySelector('.navigation ul');
    nav.style.display = 'none';

    menuIcon.addEventListener('click', function() {
        // Toggle the navigation menu
        if (nav.style.display === 'none') {
            nav.style.display = 'flex';
            nav.style.position='fixed';
        } else {
            nav.style.display = 'none';
        }
    });

   
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMenuIconVisibility() {
        if (mediaQuery.matches) {
            menuContainer.style.display = 'flex';
        } else {
            menuContainer.style.display = 'none';
            nav.style.display = 'flex'; 
        }
    }
    mediaQuery.addEventListener('change', handleMenuIconVisibility);
    handleMenuIconVisibility();
});

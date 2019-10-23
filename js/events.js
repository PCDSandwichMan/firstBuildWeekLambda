// Hamburger menu
const hamburgerMenu = document.getElementsByClassName('fa-bars')[0];
const menuModal = document.getElementById('navMenu');
const menuItems = document.getElementsByClassName('nc');
hamburgerMenu.addEventListener('click', () => {
  menuModal.classList.toggle('show');
});

if (window.outerWidth <= 918) {
  for (i = 0; i < menuItems.length; ++i) {
    menuItems[i].addEventListener('click', () => {
      menuModal.classList.toggle('show');
    });
  }
}

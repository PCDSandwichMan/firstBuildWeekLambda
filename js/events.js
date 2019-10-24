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

// Our Work Selection and filter
const filterBtns = document.getElementsByClassName('ourWork__filter');
const picOptions = document.getElementsByClassName('ourWork__example');
for (i = 0; i < filterBtns.length; ++i) {
  filterBtns[i].addEventListener('click', function() {
    // - Just handles animations for buttons
    for (i = 0; i < filterBtns.length; ++i) {
      filterBtns[i].classList.remove('active');
    }
    this.classList.toggle('active');
    // - handles filtering
    for (i = 0; i < picOptions.length; ++i) {
      
    }
  });
}

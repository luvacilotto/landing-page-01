const headerMenu = document.querySelector('.header');
var scrollTrigger = 50;
window.onscroll = () => {
  if (window.scroll >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    headerMenu.classList.add('scrolled');
  } else {
    headerMenu.classList.remove('scrolled');
  }
}
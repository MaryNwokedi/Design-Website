//Scroll menu //
window.addEventListener('scroll', function () {
  let header = document.querySelector('nav');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition)
})


// Menu Bar //    
const menu = document.querySelector('.mobile-bar');
const nav = document.querySelector('.nav-title');
const exit = document.querySelector('.exit');

menu.addEventListener('click', function (e) {
  nav.classList.toggle('hide-mobile');
  e.preventDefault();
});

exit.addEventListener('click', function (e) {
  nav.classList.add('hide-mobile');
  e.preventDefault();
});
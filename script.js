/* MOBILE HAMBURGER NAVIGATION */
/* TOGGLE MENU */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

let openMenu = false;

if(burger){
  burger.onclick = function(){
    openMenu = !openMenu;

    mobileMenu.classList.toggle('active');

    burger.innerHTML =
    openMenu ? '✕' : '☰';
  };
}

/* AUTO CLOSE MENU */
document
.querySelectorAll('.mobile-menu a')
.forEach(function(el){

  el.onclick = function(){
    mobileMenu.classList.remove('active');

    burger.innerHTML = '☰';

    openMenu = false;
  };

});

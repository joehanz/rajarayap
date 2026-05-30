/* =====================================================
   MOBILE MENU
===================================================== */

const burger =
document.getElementById('burger');

const mobileMenu =
document.getElementById('mobileMenu');

let openMenu=false;

if(burger){

burger.onclick=function(){

openMenu=!openMenu;

mobileMenu.classList.toggle(
'active'
);

burger.innerHTML=
openMenu ? '✕' : '☰';

};

}


/* =====================================================
   AUTO CLOSE MENU
===================================================== */

document
.querySelectorAll(
'.mobile-menu a'
)
.forEach(function(el){

el.onclick=function(){

mobileMenu.classList.remove(
'active'
);

burger.innerHTML='☰';

openMenu=false;

};

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar=
document.querySelector(
'.navbar'
);

window.addEventListener(
'scroll',
function(){

if(window.scrollY>50){

navbar.style.background=
'rgba(0,0,0,.95)';

navbar.style.backdropFilter=
'blur(15px)';

}
else{

navbar.style.background=
'rgba(0,0,0,.6)';

}

});


/* =====================================================
   MODAL SYSTEM
===================================================== */

function openModal(content){

let modal=
document.getElementById(
'postModal'
);

let modalBody=
document.getElementById(
'modalBody'
);

if(!modal)return;

modalBody.innerHTML=
content;

modal.style.display=
'flex';

}


function closeModal(){

let modal=
document.getElementById(
'postModal'
);

if(!modal)return;

modal.style.display=
'none';

}


/* =====================================================
   CLOSE MODAL OUTSIDE
===================================================== */

window.onclick=function(e){

let modal=
document.getElementById(
'postModal'
);

if(!modal)return;

if(e.target===modal){

closeModal();

}

};


/* =====================================================
   SIMPLE FADE
===================================================== */

window.addEventListener(
'load',
function(){

document.body.style.opacity='1';

});


/* =====================================================
   HOME PAGE NAVBAR CONTROL
===================================================== */

window.addEventListener("DOMContentLoaded", function () {

const isHome = document.body.classList.contains("home");

const navbar = document.querySelector(".navbar");

if (isHome && navbar) {
navbar.style.display = "none";
}

});

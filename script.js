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





      /* ===============================
         WATERMARK HALUS
      =============================== */
     var wm = document.createElement('div');

  wm.innerHTML = 'Web design by joehanz';

  wm.title = 'Providing website creation services at affordable prices';

  wm.onclick = function(){
    window.open('https://www.freelancer.co.id/u/Colokjitu','_blank');
  };

  wm.style.position = 'fixed';
  wm.style.bottom = '6px';
  wm.style.right = '5%';
  wm.style.opacity = '.25';
  wm.style.fontSize = '11px';
  wm.style.zIndex = '999999';
  wm.style.color = '#fff';
  wm.style.cursor = 'pointer';

  document.body.appendChild(wm);
    })();
    //]]>


 /* ===============================
         ACCORDION
      =============================== */
          const buttons=
          document.querySelectorAll(".accordion button");

          buttons.forEach(btn=>{

          btn.addEventListener("click",function(){

          const expanded=
          this.getAttribute("aria-expanded")==="true";

          buttons.forEach(b=>
          b.setAttribute("aria-expanded","false")
          );

          this.setAttribute(
          "aria-expanded",
          !expanded
          );

          });

          });


/* =====================================================
   FORM ADMIN → SPREADSHEET
===================================================== */

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzapZ2eOZ6js8EUxyaTgphq0EnVS7Yw66-aW30yuuDwG4bYQhQWJCHzLpTXkUOch1VN/exec";

const description = document.getElementById("description");
const charCount = document.getElementById("charCount");
const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");
const lihatPostinganBtn = document.getElementById("lihatPostingan");

// counter karakter
if(description && charCount){
  description.addEventListener("input", () => {
    charCount.textContent = `${description.value.length}/3000`;
  });
}

// preview gambar
if(imageInput && preview){
  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = "none";
    }
  });
}

// submit form
const postForm = document.getElementById("postForm");
if(postForm){
  postForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const desc = description.value.trim();
    const image = imageInput.files[0];

    if (!title || !desc || !image) {
      alert("Semua field wajib diisi!");
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Image = reader.result;

      const payload = {
        title: title,
        description: desc,
        image: base64Image
      };

      try {
        const response = await fetch(WEB_APP_URL, {
          method: "POST",
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.status === "success") {
          alert("Postingan berhasil disimpan dengan ID: " + result.id);
          if(lihatPostinganBtn){
            lihatPostinganBtn.style.display = "inline-block";
          }
        } else {
          alert("Error: " + result.message);
        }
      } catch(err){
        alert("Gagal kirim data: " + err);
      }
    };
    reader.readAsDataURL(image);
  });
}

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

  /* =====================================================
     SCRIPT NAME : Anti Klik Kanan & Watermark Halus
     FUNCTION    : Membatasi akses developer & klik kanan
     ===================================================== */
  //<![CDATA[
  (function () {

    /* ===============================
       KONFIGURASI
    =============================== */
    var REDIRECT_URL = "/akses-ditolak.html"; // ganti jika mau
    var DETECT_DELAY = 1200; // ms

    /* ===============================
       OVERLAY WARNING
    =============================== */
    function showWarning(msg) {
      if (document.getElementById('antiWarn')) return;
      var d = document.createElement('div');
      d.id = 'antiWarn';
      d.innerHTML = msg || '⚠️ Akses dibatasi. Aktivitas Anda tercatat.';
      d.style = `
        position:fixed;
        top:0;left:0;
        width:100%;height:100%;
        background:rgba(0,0,0,.92);
        color:#fff;
        z-index:999999;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        font-size:22px;
        font-family:Arial,sans-serif;
      `;
      document.body.appendChild(d);

      setTimeout(function () {
        location.href = REDIRECT_URL;
      }, 2500);
    }

    /* ===============================
       DISABLE KLIK KANAN
    =============================== */
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      showWarning('⚠️ Klik kanan dinonaktifkan');
    });

    /* ===============================
       DISABLE SHORTCUT KEY
    =============================== */
    document.addEventListener('keydown', function (e) {
      if (
        (e.ctrlKey && [65, 67, 83, 85, 88, 80].includes(e.keyCode)) || // A C S U X P
        (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || // I J C
        e.keyCode === 123 // F12
      ) {
        e.preventDefault();
        showWarning('⚠️ Akses developer tidak diizinkan');
      }
    });

    /* ===============================
       DETEKSI DEVTOOLS (TRICK CONSOLE)
    =============================== */
    setInterval(function () {
      var t = new Image();
      Object.defineProperty(t, 'id', {
        get: function () {
          showWarning('⚠️ DevTools terdeteksi');
          throw 'DevTools Blocked';
        }
      });
      console.log(t);
    }, DETECT_DELAY);

    /* ===============================
       DISABLE SELECT & DRAG
    =============================== */
    var css = document.createElement('style');
    css.innerHTML = `
      body {
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
      }
      img {
        pointer-events:none;
      }
    `;
    document.head.appendChild(css);

    /* ===============================
       WATERMARK HALUS
    =============================== */
    var wm = document.createElement('div');
    wm.innerHTML = '© tukarfollow.web.id';
    wm.style = `
      position:fixed;
      bottom:6px;
      right:8px;
      opacity:.25;
      font-size:11px;
      z-index:9999;
      pointer-events:none;
    `;
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

  const descInput = document.getElementById("description"); // ganti dari description
  const charCounter = document.getElementById("charCount"); // ganti dari charCount
  const imageInput = document.getElementById("image");
  const preview = document.getElementById("preview");
  const lihatPostinganBtn = document.getElementById("lihatPostingan");

  // counter karakter
  if(descInput && charCounter){
    descInput.addEventListener("input", () => {
      charCounter.textContent = descInput.value.length + "/3000";
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
      const desc = descInput.value.trim(); // pakai descInput
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
          description: desc, // tetap kirim sebagai description ke .gs
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

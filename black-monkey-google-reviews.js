/* ============================================================
   BLACK MONKEY — Widget de Reseñas de Google (auto-inyectable)
   Uso en Tienda Nube (bloque de HTML personalizado):

   <div id="bm-google-reviews"></div>
   <script src="https://cdn.jsdelivr.net/gh/TU_USUARIO/TU_REPO@COMMIT_HASH/black-monkey-google-reviews.js"></script>

   Reemplazá TU_USUARIO, TU_REPO y COMMIT_HASH según tu repo.
   ============================================================ */
(function () {
  var TARGET_ID = 'bm-google-reviews';
  var mount = document.getElementById(TARGET_ID);
  if (!mount) return;

  // ---- Reseñas reales de Google (Black Monkey) ----
  var BM_REVIEWS = [
    { name: "Alejandro Sebastian Norte", meta: "3 reseñas", stars: 5, time: "Hace 3 años", text: "Las remeras muy buenas y se cumplió con todo lo pactado calidad y precio." },
    { name: "Ariel Bonazza", meta: "5 reseñas · 1 foto", stars: 5, time: "Hace 2 años", text: "Remera personalizada, Batman - Joker, está buenísima, bárbara, justamente como la quería, rápida y cordial atención... ¡Muchas gracias Black Monkey! Vamos por más." },
    { name: "Juan Manuel Britos", meta: "5 reseñas", stars: 5, time: "Hace 3 años", text: "¡Excelente la calidad de los productos! Y me atendieron de primera. Lo recomiendo." },
    { name: "Gabriel Cury", meta: "Local Guide · 13 reseñas", stars: 4, time: "Hace 3 años", text: "Excelente calidad y diseño. Buena atención. Vale la pena. Altamente recomendable." },
    { name: "Carolina Verónica Martínez", meta: "8 reseñas", stars: 5, time: "Hace 3 años", text: "Excelente la calidad de las remeras. ¡Las estampas súper definidas!" },
    { name: "Pablo D'Aversa", meta: "Local Guide · 30 reseñas · 8 fotos", stars: 5, time: "Hace 3 años", text: "Excelente remera. Estampado perfecto. Talle exacto. Algodón de primera. ¡Son lo más!" },
    { name: "Martín Tabares", meta: "4 reseñas", stars: 5, time: "Hace 3 años", text: "Arte en tu remera... excelente calidad y presentación si es para regalar. Muy recomendable." },
    { name: "Martín Córdoba", meta: "Local Guide · 19 reseñas", stars: 5, time: "Hace 3 años", text: "¡Tremendas remeras! Excelente calidad. La impresión no se sale nunca ni se despega." },
    { name: "El Inmortal Banner", meta: "Local Guide · 47 reseñas · 222 fotos", stars: 5, time: "Hace 2 años", text: "Excelente remera. La calidad que usan es de primera, como su atención. Súper recomendables." },
    { name: "Manuel Rivero", meta: "2 reseñas", stars: 5, time: "Hace 10 meses", text: "Llevo varias compras y son los mejores: calidad, diseño, precio y atención. Súper recomendables." },
    { name: "Mauricio Giulianelli", meta: "1 reseña", stars: 5, time: "Hace 3 años", text: "Muy buenas remeras, los diseños súper originales, muy buena calidad. La semana que viene me compro otra. ¡Gracias Black Monkey!" },
    { name: "Facundo Exequiel Martín", meta: "Local Guide · 26 reseñas · 7 fotos", stars: 5, time: "Hace 3 años", text: "Excelentes remeras, la calidad del algodón es increíble, diseños únicos y por sobre todas las cosas la calidad de atención es genial. Gracias Black Monkey." },
    { name: "Guillermo Muñoz", meta: "4 reseñas · 2 fotos", stars: 5, time: "Hace 3 años", text: "Excelente calidad de la tela y el estampado es perfecto, superó mis expectativas. Puntualidad en la entrega, seguiré comprando. 100% recomendable." },
    { name: "Celeste Cerezuela", meta: "Local Guide · 14 reseñas", stars: 5, time: "Hace 2 años", text: "Excelente calidad de las remeras y del estampado. La experiencia de compra es muy buena. ¡Recomendadísimo!" },
    { name: "Víctor Daniel Di Menna", meta: "4 reseñas", stars: 5, time: "Hace 3 años", text: "Me gusta que captaron al toque lo que quería y lo plasmaron tal cual en la prenda. Calidad de estampa 100 puntos, diseño 100 puntos, atención súper cordial. Gracias." },
    { name: "Lorena Tellechea", meta: "10 reseñas", stars: 5, time: "Hace 2 años", text: "¡Muchísimas gracias! La remera de Meteoro es divina y me hicieron el aguante con la entrega porque era regalo para mi hijo. Mil millones de gracias." },
    { name: "Leandro Lucero", meta: "2 reseñas", stars: 5, time: "Hace 3 años", text: "Excelente calidad, atención personalizada. Pedí un diseño exclusivo y salió más linda de lo que esperaba. Párrafo aparte la calidad de las remeras premium." },
    { name: "César Brugnoni", meta: "5 reseñas", stars: 5, time: "Hace 2 años", text: "Excelente calidad en remeras. Prolijamente confeccionadas, suaves y con motivos únicos. Altamente recomendables." },
    { name: "Gabriela González", meta: "Local Guide · 39 reseñas · 25 fotos", stars: 5, time: "Hace 2 años", text: "Excelente producto. Muy buena calidad y los diseños son de los mejores en su categoría." },
    { name: "Tere Spadea", meta: "Local Guide · 36 reseñas · 47 fotos", stars: 5, time: "Hace 2 años", text: "¡La alegría que tengo! Me llegaron hoy 3 remeras y una más hermosa que la otra. Excelente la calidad y tremendamente hermosas quedaron las impresiones que elegí." },
    { name: "Guillermo Zorzi", meta: "Local Guide · 20 reseñas · 6 fotos", stars: 5, time: "Hace 3 años", text: "¡Excelente remeras! Me encantó cómo quedó la estampa. Muy buena relación precio-calidad. 100% recomendable." },
    { name: "Emilio S.", meta: "Local Guide · 34 reseñas", stars: 5, time: "Hace un año", text: "Excelente, muy buena calidad. Estampas originales muy bien hechas y con un detalle excelente, y la calidad de las remeras también." },
    { name: "Nacho Freaks", meta: "4 reseñas", stars: 5, time: "Hace 4 meses", text: "Tremendas remeras, muy recomendables." },
    { name: "Emilio Sabatino", meta: "6 reseñas · 12 fotos", stars: 5, time: "Hace un año", text: "Excelente todo. Me había equivocado con la imagen de una de las remeras y me lo solucionaron rapidísimo. Bien la entrega, bien atendido, muy buena calidad. Muy recomendables." },
    { name: "Gabriela Forciniti", meta: "Local Guide · 71 reseñas · 9 fotos", stars: 5, time: "Hace un año", text: "Excelente calidad. Me encantaron tanto las remeras como los estampados. 100% recomendables." },
    { name: "Iniaki Iranzi", meta: "Local Guide · 160 reseñas · 146 fotos", stars: 5, time: "Hace 5 meses", text: "Excelentes, calidad y diseño, súper originales." },
    { name: "Belén Andino", meta: "Local Guide · 40 reseñas · 27 fotos", stars: 5, time: "Hace 3 meses", text: "La calidad de la tela es excelente, el estampado más. Luego de los lavados sigue como la primera vez. Compré por segunda vez... ya estoy pensando en comprar otra." },
    { name: "Laura Coria", meta: "3 reseñas", stars: 5, time: "Hace 6 meses", text: "Compré y quedé encantada con todo. Hermosas las remeras, la calidad increíble al igual que la presentación de los envíos, súper prolijos y perfumados. Excelente atención." },
    { name: "Matías Piriz", meta: "1 reseña", stars: 5, time: "Hace 7 meses", text: "Excelente calidad, encima llegó rápido. Volvería a comprar." }
  ];

  var AVATAR_COLORS = ["#7B1FA2","#1A73E8","#D93025","#188038","#F9AB00","#E8710A","#616161","#8430CE"];
  var ROTATE_MS = 6000;

  // ---- Inyectar estilos (una sola vez, aunque haya varias instancias) ----
  if (!document.getElementById('bm-grw-styles')) {
    var style = document.createElement('style');
    style.id = 'bm-grw-styles';
    style.textContent = [
      '.bm-grw{--g-text:#202124;--g-grey:#70757a;--g-gold:#fbbc04;--g-border:#e8eaed;--g-blue:#1a73e8;',
      'max-width:560px;margin:40px auto;background:#fff;color:var(--g-text);border:1px solid var(--g-border);',
      'border-radius:12px;padding:20px 22px 16px;font-family:"Google Sans",Roboto,Arial,Helvetica,sans-serif;',
      'box-shadow:0 1px 6px rgba(32,33,36,.15);}',
      '.bm-grw__header{display:flex;align-items:center;gap:10px;padding-bottom:14px;margin-bottom:14px;border-bottom:1px solid var(--g-border);}',
      '.bm-grw__headtext{display:flex;flex-direction:column;}',
      '.bm-grw__brand{font-size:15px;font-weight:600;color:var(--g-text);}',
      '.bm-grw__summary{font-size:12.5px;color:var(--g-grey);display:flex;align-items:center;gap:4px;}',
      '.bm-grw__avgnum{font-weight:600;color:var(--g-text);}',
      '.bm-grw__avgstars{color:var(--g-gold);font-size:12px;letter-spacing:1px;}',
      '.bm-grw__stage{display:flex;align-items:flex-start;gap:10px;}',
      '.bm-grw__card{flex:1;min-height:150px;opacity:1;transition:opacity .3s ease;}',
      '.bm-grw__card.bm-grw--fade{opacity:0;}',
      '.bm-grw__row{display:flex;align-items:center;gap:12px;margin-bottom:6px;}',
      '.bm-grw__avatar{width:40px;height:40px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:500;}',
      '.bm-grw__who{display:flex;flex-direction:column;}',
      '.bm-grw__name{font-size:14px;font-weight:500;color:var(--g-text);}',
      '.bm-grw__meta{font-size:12px;color:var(--g-grey);}',
      '.bm-grw__starsrow{display:flex;align-items:center;gap:8px;margin:2px 0 8px;}',
      '.bm-grw__stars{color:var(--g-gold);font-size:14px;letter-spacing:2px;}',
      '.bm-grw__time{font-size:12px;color:var(--g-grey);}',
      '.bm-grw__text{font-size:14px;line-height:1.55;color:var(--g-text);margin:0;}',
      '.bm-grw__arrow{background:#fff;border:1px solid var(--g-border);color:var(--g-grey);width:30px;height:30px;min-width:30px;border-radius:50%;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;transition:box-shadow .2s,color .2s;margin-top:8px;}',
      '.bm-grw__arrow:hover{box-shadow:0 1px 4px rgba(32,33,36,.25);color:var(--g-blue);}',
      '.bm-grw__dots{display:flex;justify-content:center;gap:6px;margin-top:14px;}',
      '.bm-grw__dot{width:6px;height:6px;border-radius:50%;background:var(--g-border);cursor:pointer;transition:background .2s,transform .2s;}',
      '.bm-grw__dot.bm-grw__dot--active{background:var(--g-blue);transform:scale(1.3);}',
      '@media(max-width:480px){.bm-grw{padding:16px 14px 12px;}.bm-grw__text{font-size:13.5px;}}'
    ].join('');
    document.head.appendChild(style);
  }

  // ---- Inyectar markup ----
  mount.className = 'bm-grw';
  mount.innerHTML =
    '<div class="bm-grw__header">' +
      '<svg width="24" height="24" viewBox="0 0 48 48" aria-hidden="true">' +
        '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>' +
        '<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.02l7.73 6c4.51-4.18 7.09-10.36 7.09-17.49z"/>' +
        '<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"/>' +
        '<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>' +
      '</svg>' +
      '<div class="bm-grw__headtext">' +
        '<div class="bm-grw__brand">Black Monkey</div>' +
        '<div class="bm-grw__summary"><span class="bm-grw__avgnum">4.9</span><span class="bm-grw__avgstars">★★★★★</span><span>· Reseñas de Google</span></div>' +
      '</div>' +
    '</div>' +
    '<div class="bm-grw__stage">' +
      '<button class="bm-grw__arrow bm-grw__arrow--prev" aria-label="Reseña anterior">&#10094;</button>' +
      '<div class="bm-grw__card" id="bm-grw-card">' +
        '<div class="bm-grw__row"><div class="bm-grw__avatar" id="bm-grw-avatar"></div>' +
        '<div class="bm-grw__who"><div class="bm-grw__name" id="bm-grw-name"></div><div class="bm-grw__meta" id="bm-grw-meta"></div></div></div>' +
        '<div class="bm-grw__starsrow"><span class="bm-grw__stars" id="bm-grw-stars"></span><span class="bm-grw__time" id="bm-grw-time"></span></div>' +
        '<p class="bm-grw__text" id="bm-grw-text"></p>' +
      '</div>' +
      '<button class="bm-grw__arrow bm-grw__arrow--next" aria-label="Siguiente reseña">&#10095;</button>' +
    '</div>' +
    '<div class="bm-grw__dots" id="bm-grw-dots"></div>';

  // ---- Lógica de rotación ----
  var order = BM_REVIEWS.map(function (_, i) { return i; });
  for (var i = order.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = order[i]; order[i] = order[j]; order[j] = tmp;
  }

  var pos = 0;
  var timer = null;

  var cardEl = mount.querySelector('#bm-grw-card');
  var avatarEl = mount.querySelector('#bm-grw-avatar');
  var nameEl = mount.querySelector('#bm-grw-name');
  var metaEl = mount.querySelector('#bm-grw-meta');
  var starsEl = mount.querySelector('#bm-grw-stars');
  var timeEl = mount.querySelector('#bm-grw-time');
  var textEl = mount.querySelector('#bm-grw-text');
  var dotsEl = mount.querySelector('#bm-grw-dots');
  var prevBtn = mount.querySelector('.bm-grw__arrow--prev');
  var nextBtn = mount.querySelector('.bm-grw__arrow--next');

  function starString(n) {
    return '★★★★★☆☆☆☆☆'.slice(5 - n, 10 - n);
  }

  function initials(name) {
    var parts = name.replace(/[^\p{L}\s]/gu, '').trim().split(/\s+/);
    return (parts[0] ? parts[0][0] : '').toUpperCase();
  }

  function colorFor(idx) {
    return AVATAR_COLORS[idx % AVATAR_COLORS.length];
  }

  function buildDots() {
    dotsEl.innerHTML = '';
    order.forEach(function (_, idx) {
      var d = document.createElement('span');
      d.className = 'bm-grw__dot' + (idx === pos ? ' bm-grw__dot--active' : '');
      d.onclick = function () { goTo(idx); };
      dotsEl.appendChild(d);
    });
  }

  function render() {
    var realIdx = order[pos];
    var r = BM_REVIEWS[realIdx];
    avatarEl.textContent = initials(r.name);
    avatarEl.style.background = colorFor(realIdx);
    nameEl.textContent = r.name;
    metaEl.textContent = r.meta;
    starsEl.textContent = starString(r.stars);
    timeEl.textContent = r.time;
    textEl.textContent = r.text;
    Array.prototype.forEach.call(dotsEl.children, function (d, idx) {
      d.className = 'bm-grw__dot' + (idx === pos ? ' bm-grw__dot--active' : '');
    });
  }

  function goTo(idx) {
    pos = ((idx % order.length) + order.length) % order.length;
    cardEl.classList.add('bm-grw--fade');
    setTimeout(function () {
      render();
      cardEl.classList.remove('bm-grw--fade');
    }, 180);
    resetTimer();
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(function () { goTo(pos + 1); }, ROTATE_MS);
  }

  prevBtn.addEventListener('click', function () { goTo(pos - 1); });
  nextBtn.addEventListener('click', function () { goTo(pos + 1); });

  buildDots();
  render();
  resetTimer();
})();

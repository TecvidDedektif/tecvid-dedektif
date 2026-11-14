/* ============================================================
   Birlikte say: kelime büyük gösterilir, noktalar sırayla yanar.
   Sınıfça okuyup son noktaya kadar uzatmak için.

   TECVID.sayacKur(kap, konu)
   ============================================================ */

TECVID.sayacKur = function (kap, konu) {
  var T = TECVID, esc = T.esc;
  var sayilar = konu.say.sayilar;            // örneğin [4, 5]
  var secili = konu.kelimeler[0];
  var vurus = sayilar[0];
  var zamanlayici = null;
  var ARALIK = 700;                          // bir nokta kaç milisaniyede yanar

  kap.innerHTML =
    '<div class="sayac">' +
      '<h2>Lees samen en rek tot de laatste stip</h2>' +
      '<p class="giris tr" lang="tr">Birlikte oku, son noktaya kadar uzat.</p>' +
      '<div class="cipler" data-yer="cipler" aria-label="Kies een woord · Kelime seç"></div>' +
      '<div class="sayac-kelime"><div data-yer="kelime"></div><div class="aciklama" data-yer="aciklama"></div></div>' +
      '<div class="noktalar" data-yer="noktalar" aria-live="polite"></div>' +
      '<div class="sayac-satir">' +
        '<div class="secici" role="group" aria-label="Tellen · Hareke">' +
          sayilar.map(function (n, i) {
            return '<button type="button" data-sayi="' + n + '" aria-pressed="' + (i === 0) + '">' + n + ' tellen · ' + n + ' hareke</button>';
          }).join('') +
        '</div>' +
        '<button type="button" class="dugme ana" data-yer="basla">▶ Start<small>Başla</small></button>' +
      '</div>' +
    '</div>';

  function yer(ad) { return kap.querySelector('[data-yer="' + ad + '"]'); }

  // Kelime seçme düğmeleri
  konu.kelimeler.forEach(function (k, i) {
    var d = document.createElement('button');
    d.type = 'button';
    d.className = 'cip';
    d.lang = 'ar';
    d.setAttribute('aria-pressed', String(i === 0));
    d.textContent = T.kelime.duzYazi(k.yazi);
    d.addEventListener('click', function () {
      yer('cipler').querySelectorAll('.cip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      d.setAttribute('aria-pressed', 'true');
      secili = k;
      ciz();
    });
    yer('cipler').appendChild(d);
  });

  // Kaç hareke sayılacağını seçen düğmeler
  kap.querySelectorAll('.secici button').forEach(function (d) {
    d.addEventListener('click', function () {
      kap.querySelectorAll('.secici button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      d.setAttribute('aria-pressed', 'true');
      vurus = Number(d.dataset.sayi);
      ciz();
    });
  });

  function dur() {
    if (zamanlayici) { clearInterval(zamanlayici); zamanlayici = null; }
  }

  function ciz() {
    dur();
    var tur = T.turler[secili.tur];
    yer('kelime').innerHTML = T.kelime.ciz(secili, { renkli: true, boyut: 'clamp(64px,11vw,140px)' });
    yer('aciklama').innerHTML = T.kelimeAciklama(secili) + ' · ' + esc(tur.ad) + ' (' + esc(secili.kaynak) + ')';
    var noktalar = yer('noktalar');
    noktalar.innerHTML = '';
    for (var i = 1; i <= vurus; i++) {
      var n = document.createElement('span');
      n.className = 'nokta';
      n.textContent = i;
      noktalar.appendChild(n);
    }
  }

  yer('basla').addEventListener('click', function () {
    ciz();
    var noktalar = kap.querySelectorAll('.nokta'), k = 0;
    zamanlayici = setInterval(function () {
      if (k < noktalar.length) { noktalar[k].classList.add('yanik'); k++; }
      else dur();
    }, ARALIK);
  });

  ciz();
  return { dur: dur };
};

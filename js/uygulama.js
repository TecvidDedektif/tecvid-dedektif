/* ============================================================
   Uygulamayı başlatan dosya: ana ekran, konu sayfaları, gezinme.

   Adresin sonundaki # kısmı hangi sayfanın açık olduğunu söyler:
     #/                           ana ekran
     #/muttasil-munfasil          konunun ilk sekmesi
     #/muttasil-munfasil/oyna     konunun "Oyna" sekmesi
   ============================================================ */

(function () {
  var T = window.TECVID, esc = T.esc;
  var ust = document.getElementById('ust');       // sayfanın üst şeridi
  var govde = document.getElementById('govde');   // sayfanın gövdesi
  var hazirKonular = {};                          // sorunsuz yüklenen konular
  var sorunluDosyalar = {};                       // yüklenemeyen ya da yazım hatası olan dosyalar
  var acik = null;                                // şu an açık olan konu

  // Sekmelerin adları
  var BOLUMLER = {
    ogren: { nl: 'Leer', tr: 'Öğren' },
    bul: { nl: 'Zoek', tr: 'Bul' },
    oyna: { nl: 'Speel', tr: 'Oyna' },
    say: { nl: 'Tel mee', tr: 'Birlikte say' },
  };

  var QR_DUGMESI = '<button type="button" class="qr-dugme" data-qr-ac>QR<small>Telefon</small></button>';

  // ---------------------------------------------------------
  // 1. Konu dosyalarını yükle
  // ---------------------------------------------------------
  function dosyaListesi() {
    var liste = [];
    T.kategoriler.forEach(function (k) {
      k.konular.forEach(function (x) { if (x.dosya) liste.push(x.dosya); });
    });
    return liste;
  }

  function dosyalariYukle() {
    return Promise.all(dosyaListesi().map(function (ad) {
      return new Promise(function (bitti) {
        var s = document.createElement('script');
        s.src = 'konular/' + ad + '.js';
        s.onload = bitti;
        s.onerror = function () {
          sorunluDosyalar[ad] = true;
          T.hata('konular/' + ad + '.js dosyası bulunamadı.');
          bitti();
        };
        document.head.appendChild(s);
      });
    }));
  }

  // Konu dosyasında yazım hatası varsa (eksik virgül, tırnak) satır numarasıyla göster
  window.addEventListener('error', function (e) {
    var yol = e.filename || '';
    var i = yol.indexOf('/konular/');
    if (i === -1) return;
    var dosya = yol.slice(i + 1).split('?')[0];
    sorunluDosyalar[dosya.replace('konular/', '').replace('.js', '')] = true;
    T.hata(dosya + ', ' + e.lineno + '. satır: yazım hatası (' + e.message + '). Çoğu zaman bir önceki satırın sonunda virgül ya da tırnak eksiktir.');
  });

  // ---------------------------------------------------------
  // 2. Konuları kontrol et: hatalı kelimeler oyuna girmez, hata ana ekranda görünür
  // ---------------------------------------------------------
  function kelimeBul(konu, okunus) {
    return konu.kelimeler.filter(function (k) { return k.okunus === okunus; })[0];
  }

  function konuyuKontrolEt(dosya) {
    var konu = T.konular[dosya];
    function h(mesaj) { T.hata('konular/' + dosya + '.js: ' + mesaj); }

    if (!konu) {
      if (!sorunluDosyalar[dosya]) h('konu eklenemedi. Dosyadaki id, dosya adıyla aynı olmalı.');
      return;
    }
    if (!Array.isArray(konu.kelimeler)) { h('"kelimeler" listesi yok.'); return; }

    konu.kelimeler = konu.kelimeler.filter(function (k, i) {
      var kim = (i + 1) + '. kelime' + (k.okunus ? ' (' + k.okunus + ')' : '');
      if (!T.turler[k.tur]) { h(kim + ': "' + k.tur + '" diye bir tür yok. konular/turler.js dosyasına bak.'); return false; }
      try { T.kelime.coz(k.yazi); } catch (e) { h(kim + ': ' + e.message); return false; }
      ['okunus', 'nl', 'tr', 'kaynak'].forEach(function (alan) { if (!k[alan]) h(kim + ': "' + alan + '" eksik.'); });
      return true;
    });

    // Sekmeler: içeriği eksik olan sekme gösterilmez
    var gereken = { ogren: 'ogren', bul: 'bul', oyna: 'oyun', say: 'say' };
    konu.bolumler = (konu.bolumler || []).filter(function (b) {
      if (!BOLUMLER[b]) { h('"' + b + '" diye bir sekme yok.'); return false; }
      if (!konu[gereken[b]]) { h('"' + b + '" sekmesi için "' + gereken[b] + '" bölümü eksik.'); return false; }
      return true;
    });
    if (konu.oyun) {
      konu.oyun.secenekler = (konu.oyun.secenekler || []).filter(function (t) {
        if (!T.turler[t]) { h('oyun seçeneği "' + t + '" diye bir tür yok.'); return false; }
        return true;
      });
      konu.kelimeler.forEach(function (k) {
        if (konu.oyun.secenekler.indexOf(k.tur) === -1) h('"' + k.okunus + '" kelimesinin türü (' + k.tur + ') oyun seçenekleri arasında yok.');
      });
    }
    if (konu.ogren) {
      konu.ogren.kurallar = (konu.ogren.kurallar || []).filter(function (kural) {
        if (!T.turler[kural.tur]) { h('kural kartındaki "' + kural.tur + '" diye bir tür yok.'); return false; }
        if (!kelimeBul(konu, kural.ornek)) { h('kural kartının örneği "' + kural.ornek + '" kelimeler arasında yok.'); return false; }
        return true;
      });
    }
    if (!konu.kelimeler.length || !konu.bolumler.length) { h('gösterilecek kelime ya da sekme kalmadı.'); return; }
    hazirKonular[dosya] = konu;
  }

  // ---------------------------------------------------------
  // 3. Ana ekran
  // ---------------------------------------------------------
  function anaEkraniCiz() {
    konuyuKapat();
    document.title = 'Tecvid Dedektif';
    ust.innerHTML =
      '<div class="kap"><div class="marka"><h1>Tecvid Dedektif</h1>' +
      '<span class="alt-yazi">Tecvid oefenen<span class="tr" lang="tr"> · Tecvid alıştırmaları</span></span></div>' +
      QR_DUGMESI + '</div>';

    var html = '';
    if (T.hatalar.length) {
      html += '<div class="hata" role="alert"><b>İçerik dosyalarında düzeltilmesi gereken yerler var:</b><ul>' +
        T.hatalar.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div>';
    }
    html += '<h2>' + T.ikiDil({ nl: 'Kies een onderwerp', tr: 'Bir konu seç' }, ' · ') + '</h2><div class="kategoriler">';

    T.kategoriler.forEach(function (kat) {
      var kartlar = '', yakinda = '';
      kat.konular.forEach(function (x) {
        var konu = x.dosya && hazirKonular[x.dosya];
        if (konu) kartlar += konuKarti(konu);
        else if (x.yakinda) yakinda += '<span class="ad">' + esc(x.yakinda) + '</span>';
      });
      if (!kartlar && !yakinda) return;   // içi boş kategori gösterilmez
      html += '<section class="kategori"><h3>' + T.ikiDil(kat.kategori, ' · ') + '</h3>' +
        (kartlar ? '<div class="konu-kartlar">' + kartlar + '</div>' : '') +
        (yakinda ? '<p class="yakinda"><b>Binnenkort<span class="tr" lang="tr"> · Yakında</span></b>' + yakinda + '</p>' : '') +
        '</section>';
    });
    govde.innerHTML = html + '</div>';
  }

  function konuKarti(konu) {
    var ornek = kelimeBul(konu, konu.vitrin) || konu.kelimeler[0];
    var trAd = T.tr(konu.ad);
    return '<a class="konu-kart" href="#/' + konu.id + '">' +
      '<div class="sahne">' + T.kelime.ciz(ornek, { renkli: true }) + '</div>' +
      '<div class="bilgi"><div class="metin"><h4>' + T.nl(konu.ad) + '</h4>' +
      (trAd ? '<p class="ad-tr tr" lang="tr">' + trAd + '</p>' : '') +
      '<p>' + T.nl(konu.ozet) + '</p><p class="tr" lang="tr">' + T.tr(konu.ozet) + '</p></div>' +
      '<span class="basla">Begin<small>Başla</small></span></div></a>';
  }

  // ---------------------------------------------------------
  // 4. Konu sayfası
  // ---------------------------------------------------------
  function adimlarHtml(adimlar) {
    return '<div class="adimlar">' + adimlar.map(function (a, i) {
      return '<div class="adim"><span class="no">' + (i + 1) + '</span><div><p>' + T.nl(a) + '</p>' +
        '<p class="tr" lang="tr">' + T.tr(a) + '</p></div></div>';
    }).join('') + '</div>';
  }

  function oyunaGitDugmesi(konu) {
    return '<p class="devam"><a class="dugme ana" href="#/' + konu.id + '/oyna">Start het spel<small>Oyuna başla</small></a></p>';
  }

  // "Öğren" sekmesi: giriş, adımlar, kural kartları, not
  function ogrenHtml(konu) {
    var o = konu.ogren;
    var kurallar = o.kurallar.map(function (kural) {
      var tur = T.turler[kural.tur];
      var ornek = kelimeBul(konu, kural.ornek);
      return '<article class="kural">' +
        '<div class="kural-bas"><h3>' + esc(tur.uzunAd || tur.ad) + '</h3><span>' + T.ikiDil(kural.etiket, ' · ') + '</span></div>' +
        '<div class="sahne">' + T.kelime.ciz(ornek, { renkli: true }) +
          '<div class="aciklama">' + T.kelimeAciklama(ornek) + ' (' + esc(ornek.kaynak) + ')</div></div>' +
        '<div class="kural-metin"><p>' + T.nl(kural.metin) + '</p><p class="tr" lang="tr">' + T.tr(kural.metin) + '</p>' +
          (kural.uzatma ? '<span class="hap">✋ ' + T.ikiDil(kural.uzatma, ' · ') + '</span>' : '') + '</div>' +
        '</article>';
    }).join('');
    return '<h2>' + T.ikiDil(o.baslik, ' · ') + '</h2>' +
      '<p class="giris">' + T.ikiDil(o.giris) + '</p>' +
      (o.adimlar ? adimlarHtml(o.adimlar) : '') +
      '<div class="kurallar">' + kurallar + '</div>' +
      (o.not ? '<div class="not"><p>' + T.ikiDil(o.not) + '</p></div>' : '') +
      (konu.bolumler.indexOf('oyna') !== -1 ? oyunaGitDugmesi(konu) : '');
  }

  // "Bul" sekmesi: Kur'an sayfasında okumadan önce bulunacak kelimeler
  function bulHtml(konu) {
    var b = konu.bul;
    var bulunacaklar = konu.kelimeler.filter(function (k) { return b.turler.indexOf(k.tur) !== -1; }).map(function (k) {
      return '<div class="bulunacak">' + T.kelime.ciz(k, { renkli: true }) +
        '<div class="kaynak">' + esc(k.kaynak) + ' · ' + esc(T.turler[k.tur].ad) + '</div></div>';
    }).join('');
    return '<h2>' + T.ikiDil(b.baslik, ' · ') + '</h2>' +
      '<p class="giris">' + T.ikiDil(b.giris) + '</p>' +
      (b.adimlar ? adimlarHtml(b.adimlar) : '') +
      '<div class="bulunacaklar">' + bulunacaklar + '</div>' +
      (konu.bolumler.indexOf('oyna') !== -1 ? oyunaGitDugmesi(konu) : '') +
      (b.ogretmenNotu ? '<div class="ogretmen-notu tr" lang="tr"><p><b>Öğretmen için:</b> ' + T.tr(b.ogretmenNotu) + '</p></div>' : '');
  }

  function bolumOgesi(ad) { return govde.querySelector('.bolum[data-bolum="' + ad + '"]'); }

  function konuyuKur(konu) {
    konuyuKapat();
    document.title = T.nl(konu.ad) + ' · Tecvid Dedektif';

    var sekmeler = konu.bolumler.map(function (b, i) {
      return '<a class="sekme" data-bolum="' + b + '" href="#/' + konu.id + '/' + b + '">' + (i + 1) + ' ' + BOLUMLER[b].nl +
        '<small lang="tr">' + BOLUMLER[b].tr + '</small></a>';
    }).join('');
    ust.innerHTML =
      '<div class="kap"><div class="marka">' +
      '<a class="geri" href="#/">‹ Alle onderwerpen<span class="tr" lang="tr"> · Tüm konular</span></a>' +
      '<h1>' + T.nl(konu.ad) + '</h1>' +
      (T.tr(konu.ad) ? '<span class="alt-yazi tr" lang="tr">' + T.tr(konu.ad) + '</span>' : '') + '</div>' +
      '<nav class="sekmeler" aria-label="Onderdelen · Bölümler">' + sekmeler + '</nav>' +
      QR_DUGMESI + '</div>';

    govde.innerHTML = konu.bolumler.map(function (b) {
      return '<section class="bolum" data-bolum="' + b + '" hidden></section>';
    }).join('');

    acik = { konu: konu, bolum: null, oyun: null, sayac: null };
    konu.bolumler.forEach(function (b) {
      var oge = bolumOgesi(b);
      if (b === 'ogren') oge.innerHTML = ogrenHtml(konu);
      if (b === 'bul') oge.innerHTML = bulHtml(konu);
      if (b === 'oyna') acik.oyun = T.oyunKur(oge, konu);
      if (b === 'say') acik.sayac = T.sayacKur(oge, konu);
    });
  }

  function konuyuKapat() {
    if (acik && acik.sayac) acik.sayac.dur();
    acik = null;
  }

  function bolumuGoster(bolum) {
    acik.bolum = bolum;
    acik.konu.bolumler.forEach(function (b) { bolumOgesi(b).hidden = b !== bolum; });
    ust.querySelectorAll('.sekme').forEach(function (s) {
      if (s.dataset.bolum === bolum) s.setAttribute('aria-current', 'page');
      else s.removeAttribute('aria-current');
    });
    if (bolum === 'oyna' && !acik.oyun.basladiMi()) acik.oyun.baslat();
    if (bolum !== 'say' && acik.sayac) acik.sayac.dur();
  }

  // ---------------------------------------------------------
  // 5. Gezinme: adresteki # kısmına göre doğru sayfayı aç
  // ---------------------------------------------------------
  function yonlendir() {
    var parca = location.hash.split('/');       // '#/konu/bolum' -> ['#', 'konu', 'bolum']
    var konu = hazirKonular[parca[1]];
    if (!konu) {
      anaEkraniCiz();
    } else {
      if (!acik || acik.konu !== konu) konuyuKur(konu);
      bolumuGoster(konu.bolumler.indexOf(parca[2]) !== -1 ? parca[2] : konu.bolumler[0]);
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', yonlendir);

  // Oyunda klavyeden 1, 2, 3 ile cevap verme
  document.addEventListener('keydown', function (e) {
    if (!acik || acik.bolum !== 'oyna' || !qrPerdesi.hidden) return;
    var n = ['1', '2', '3'].indexOf(e.key);
    if (n !== -1) acik.oyun.tus(n);
  });

  // ---------------------------------------------------------
  // 6. QR penceresi
  // ---------------------------------------------------------
  var qrPerdesi = document.getElementById('qr-perde');
  var qrKapat = document.getElementById('qr-kapat');
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-qr-ac]')) { qrPerdesi.hidden = false; qrKapat.focus(); }
    else if (e.target === qrPerdesi || e.target === qrKapat) qrPerdesi.hidden = true;
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') qrPerdesi.hidden = true; });

  // ---------------------------------------------------------
  // Başlat
  // ---------------------------------------------------------
  dosyalariYukle().then(function () {
    dosyaListesi().forEach(konuyuKontrolEt);
    yonlendir();
  });
})();

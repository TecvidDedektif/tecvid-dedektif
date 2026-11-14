/* ============================================================
   Oyun: bir kelime gösterilir, çocuk türünü seçer.

   TECVID.oyunKur(kap, konu)
     kap:   oyunun içine çizileceği HTML öğesi
     konu:  konu dosyasındaki bilgiler (kelimeler ve oyun ayarı)
   ============================================================ */

TECVID.oyunKur = function (kap, konu) {
  var T = TECVID, esc = T.esc;
  var secenekler = konu.oyun.secenekler;     // örneğin ['muttasil', 'munfasil']
  var durum = { basladi: false, liste: [], sira: 0, puan: 0, cevaplandi: false };

  kap.innerHTML =
    '<div class="oyun">' +
      '<div class="oyun-ust"><span data-yer="sayi"></span><span data-yer="puan"></span></div>' +
      '<div class="cubuk" aria-hidden="true"><i data-yer="cubuk"></i></div>' +
      '<div data-yer="govde"></div>' +
    '</div>';

  function yer(ad) { return kap.querySelector('[data-yer="' + ad + '"]'); }
  function toplam() { return durum.liste.length; }

  // Her türden eşit sayıda kelime seçer, sonra karıştırır
  function kelimeSec() {
    var gruplar = secenekler.map(function (t) {
      return T.karistir(konu.kelimeler.filter(function (k) { return k.tur === t; }));
    });
    var hepsi = gruplar.reduce(function (n, g) { return n + g.length; }, 0);
    var adet = Math.min(konu.oyun.adet || hepsi, hepsi);
    var secilen = [];
    for (var i = 0; secilen.length < adet; i++) {
      gruplar.forEach(function (g) { if (g[i] && secilen.length < adet) secilen.push(g[i]); });
    }
    return T.karistir(secilen);
  }

  function ustuYaz() {
    var n = Math.min(durum.sira + 1, toplam());
    yer('sayi').innerHTML = 'Vraag ' + n + ' van ' + toplam() + ' · <span class="tr" lang="tr">Soru ' + n + ' / ' + toplam() + '</span>';
    yer('puan').innerHTML = 'Punten · <span class="tr" lang="tr">Puan</span>: ' + durum.puan;
    yer('cubuk').style.width = (durum.sira / toplam() * 100) + '%';
  }

  function soruyuGoster() {
    ustuYaz();
    var k = durum.liste[durum.sira];
    var dugmeler = secenekler.map(function (t) {
      var tur = T.turler[t];
      return '<button type="button" class="dugme" data-cevap="' + t + '">' + esc(tur.ad) +
        '<small>' + T.ikiDil(tur.ipucu, ' · ') + '</small></button>';
    }).join('');
    yer('govde').innerHTML =
      '<div class="soru-kelime"><div data-yer="kelime">' + T.kelime.ciz(k) + '</div>' +
      '<div class="kaynak">' + esc(k.kaynak) + '</div></div>' +
      '<p class="soru">' + T.ikiDil(konu.oyun.soru) + '</p>' +
      '<div class="secenekler' + (secenekler.length === 3 ? ' uc' : '') + '">' + dugmeler + '</div>' +
      '<div data-yer="sonuc"></div>';
    durum.cevaplandi = false;
    kap.querySelectorAll('.secenekler .dugme').forEach(function (d) {
      d.addEventListener('click', function () { cevapla(d.dataset.cevap, d); });
    });
  }

  function cevapla(cevap, basilan) {
    if (durum.cevaplandi) return;
    durum.cevaplandi = true;
    var k = durum.liste[durum.sira];
    var dogru = cevap === k.tur;
    if (dogru) durum.puan++;

    kap.querySelectorAll('.secenekler .dugme').forEach(function (d) {
      d.disabled = true;
      if (d.dataset.cevap === k.tur) d.classList.add('dogru');
      else if (d === basilan) d.classList.add('yanlis');
    });

    // Cevaptan sonra kelime renkli ve kutulu gösterilir
    yer('kelime').innerHTML = T.kelime.ciz(k, { renkli: true });

    var tur = T.turler[k.tur];
    var sonSoru = durum.sira + 1 >= toplam();
    yer('sonuc').innerHTML =
      '<div class="geri-bildirim ' + (dogru ? 'dogru' : 'yanlis') + '" role="status">' +
        '<div class="karar">' + (dogru ? 'Goed! · Doğru!' : 'Bijna! · Neredeyse!') + '</div>' +
        '<p>' + T.nl(tur.neden) + '</p><p class="tr" lang="tr">' + T.tr(tur.neden) + '</p>' +
        (k.not ? '<p class="kelime-notu">' + T.ikiDil(k.not, ' · ') + '</p>' : '') +
        '<p class="okunus">' + T.kelimeAciklama(k) + '</p>' +
      '</div>' +
      '<div class="sonraki"><button type="button" class="dugme ana" data-yer="sonraki">' +
        (sonSoru ? 'Uitslag ›<small>Sonuç</small>' : 'Volgende ›<small>Sonraki</small>') +
      '</button></div>';
    ustuYaz();
    var sonraki = yer('sonraki');
    sonraki.addEventListener('click', ilerle);
    sonraki.focus({ preventScroll: true });
  }

  function ilerle() {
    durum.sira++;
    if (durum.sira < toplam()) { soruyuGoster(); return; }
    bitisiGoster();
  }

  function bitisiGoster() {
    yer('cubuk').style.width = '100%';
    var p = durum.puan, t = toplam();
    var mesaj = p >= t - 1 ? 'Echte tecvid-detective! · <span class="tr" lang="tr">Gerçek bir tecvid dedektifi!</span>'
      : p >= Math.ceil(t * 0.6) ? 'Goed bezig, nog één ronde? · <span class="tr" lang="tr">Güzel, bir tur daha?</span>'
      : 'Kijk nog eens naar de hokjes en probeer opnieuw. · <span class="tr" lang="tr">Kutulara bir daha bak ve tekrar dene.</span>';
    yer('govde').innerHTML =
      '<div class="bitis"><div class="puan">' + p + ' / ' + t + '</div><p>' + mesaj + '</p>' +
      '<button type="button" class="dugme ana" data-yer="tekrar">Opnieuw spelen<small>Tekrar oyna</small></button></div>';
    yer('tekrar').addEventListener('click', baslat);
  }

  function baslat() {
    durum.basladi = true;
    durum.liste = kelimeSec();
    durum.sira = 0;
    durum.puan = 0;
    soruyuGoster();
  }

  // Klavyeden 1, 2, 3 tuşlarıyla cevap vermek için
  function tus(n) {
    if (!durum.basladi || durum.cevaplandi) return;
    var d = kap.querySelector('.secenekler .dugme[data-cevap="' + secenekler[n] + '"]');
    if (d) d.click();
  }

  return {
    baslat: baslat,
    tus: tus,
    basladiMi: function () { return durum.basladi; },
  };
};

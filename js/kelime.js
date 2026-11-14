/* ============================================================
   Arapça kelimeyi ekrana çizen kısım

   Konu dosyalarında kelime şöyle yazılır:   'يَ(آ) [أَ]يُّهَا'
     ( )  med harfi      mavi
     [ ]  hemze          kırmızı
     { }  sükûn, şedde   mor
   Boşluk, yeni bir kelimeye (yeni bir kutuya) geçildiğini gösterir.
   ============================================================ */

(function () {
  var T = window.TECVID;

  var ISARET = { '(': 'med', ')': 'med', '[': 'hemze', ']': 'hemze', '{': 'sukun', '}': 'sukun' };
  var ZWJ = '‍';                                   // harflerin bitişik kalmasını sağlayan görünmez işaret
  var HAREKE = /[ً-ٰٟۖ-ۭ]/g;   // hareke ve küçük işaretler
  var IKI_YONE_BAGLANAN = 'بتثجحخسشصضطظعغفقكلمنهيئى';     // kendinden sonraki harfe bağlanan harfler
  var HEMZE = 'ء';                                 // ء hiçbir harfe bağlanmaz

  // 'جَ(آ)[ءَ]'  ->  [ [ {yazi:'جَ', rol:''}, {yazi:'آ', rol:'med'}, {yazi:'ءَ', rol:'hemze'} ] ]
  // Parantezin açılanı ve kapananı karışsa da kabul edilir, çünkü
  // Arapça yazarken parantezler ekranda ters görünebilir.
  function coz(yazi) {
    if (typeof yazi !== 'string' || !yazi.trim()) throw new Error('"yazi" boş.');
    return yazi.trim().split(/\s+/).map(function (sozcuk) {
      var parcalar = [], metin = '', acik = null;
      Array.from(sozcuk).forEach(function (harf) {
        var rol = ISARET[harf];
        if (!rol) { metin += harf; return; }
        if (acik === null) {
          if (metin) parcalar.push({ yazi: metin, rol: '' });
          metin = ''; acik = rol;
        } else if (acik === rol) {
          if (!metin) throw new Error('"' + yazi + '" içinde boş bir işaret var.');
          parcalar.push({ yazi: metin, rol: rol });
          metin = ''; acik = null;
        } else {
          throw new Error('"' + yazi + '" içinde işaretler iç içe girmiş. Bir işareti kapatmadan diğerini açma.');
        }
      });
      if (acik !== null) throw new Error('"' + yazi + '" içinde kapatılmamış bir işaret var.');
      if (metin) parcalar.push({ yazi: metin, rol: '' });
      return parcalar;
    });
  }

  // Kelimenin işaretsiz hali: 'جَآءَ'
  function duzYazi(yazi) {
    return coz(yazi).map(function (parcalar) {
      return parcalar.map(function (p) { return p.yazi; }).join('');
    }).join(' ');
  }

  function harfler(metin) { return metin.replace(HAREKE, '').replace(/‍/g, ''); }
  function ileriBaglanir(metin) {
    var h = harfler(metin);
    return IKI_YONE_BAGLANAN.indexOf(h.charAt(h.length - 1)) !== -1;
  }
  function geriBaglanir(metin) {
    var ilk = harfler(metin).charAt(0);
    return ilk !== '' && ilk !== HEMZE;
  }

  // Kelimeyi HTML olarak verir.
  //   renkli: true  -> kutular, renkler ve (türde varsa) köprü görünür
  //   boyut:        -> yazı büyüklüğü (boş bırakılırsa CSS'teki büyüklük)
  function ciz(kelime, secenek) {
    secenek = secenek || {};
    var tur = T.turler[kelime.tur] || {};
    var html = '';
    coz(kelime.yazi).forEach(function (parcalar, sira) {
      if (sira > 0) html += '<span class="ara" aria-hidden="true"><span class="kopru"></span></span>';
      var ic = '';
      if (!secenek.renkli) {
        ic = T.esc(parcalar.map(function (p) { return p.yazi; }).join(''));
      } else {
        parcalar.forEach(function (p, i) {
          var t = p.yazi;
          // Renk için kelime parçalara bölünür. Harfler kopuk görünmesin diye araya ZWJ konur.
          if (i > 0 && ileriBaglanir(parcalar[i - 1].yazi) && geriBaglanir(p.yazi)) t = ZWJ + t;
          if (i < parcalar.length - 1 && ileriBaglanir(p.yazi) && geriBaglanir(parcalar[i + 1].yazi)) t = t + ZWJ;
          ic += p.rol ? '<span class="' + p.rol + '">' + T.esc(t) + '</span>' : T.esc(t);
        });
      }
      html += '<span class="kutu">' + ic + '</span>';
    });
    var sinif = 'kelime' + (secenek.renkli ? ' kutulu' : '') + (secenek.renkli && tur.kopru ? ' koprulu' : '');
    var stil = secenek.boyut ? ' style="font-size:' + secenek.boyut + '"' : '';
    return '<div class="' + sinif + '"' + stil + ' lang="ar">' + html + '</div>';
  }

  T.kelime = { coz: coz, duzYazi: duzYazi, ciz: ciz };
})();

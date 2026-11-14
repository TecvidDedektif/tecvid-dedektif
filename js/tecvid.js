/* ============================================================
   Tecvid Dedektif: çekirdek

   Bütün dosyalar TECVID adlı tek bir nesneyi kullanır.
   İçerik dosyaları (konular/ klasörü) buradaki üç fonksiyonla
   kendilerini kaydeder: turEkle, konuEkle, anaEkran.
   ============================================================ */

window.TECVID = {
  turler: {},        // 'muttasil' -> { ad, ipucu, neden, ... }
  konular: {},       // 'muttasil-munfasil' -> konu
  kategoriler: [],   // ana ekrandaki sıra
  hatalar: [],       // içerik dosyalarında bulunan hatalar (ana ekranda gösterilir)

  // ---- içerik dosyalarının kullandığı fonksiyonlar ----
  turEkle: function (id, tur) { tur.id = id; this.turler[id] = tur; },
  konuEkle: function (konu) { this.konular[konu.id] = konu; },
  anaEkran: function (kategoriler) { this.kategoriler = kategoriler; },

  // ---- yardımcılar ----
  hata: function (mesaj) {
    this.hatalar.push(mesaj);
    console.error('[Tecvid Dedektif] ' + mesaj);
  },

  // Metnin içindeki & ve < işaretlerini zararsız hale getirir
  esc: function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  },

  // Bir metin tek dilde ('abc') ya da iki dilde ({ nl: '...', tr: '...' }) yazılabilir
  nl: function (x) { return typeof x === 'string' ? x : (x && x.nl) || ''; },
  tr: function (x) { return typeof x === 'string' ? '' : (x && x.tr) || ''; },

  // Hollandaca metni, yanında (varsa) Türkçesiyle birlikte verir
  ikiDil: function (x, ayrac) {
    var tr = this.tr(x);
    if (!tr) return this.nl(x);
    return this.nl(x) + '<span class="tr" lang="tr">' + (ayrac ? '<span class="ayrac">' + ayrac + '</span>' : ' ') + tr + '</span>';
  },

  // Bir listeyi rastgele sıralar (asıl listeyi değiştirmez)
  karistir: function (liste) {
    var a = liste.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  },

  // Kelimenin altındaki satır: okunuş, Hollandaca, Türkçe
  kelimeAciklama: function (k) {
    return '<b>' + this.esc(k.okunus) + '</b> · ' + this.esc(k.nl) +
      ' · <span class="tr" lang="tr">' + this.esc(k.tr) + '</span>';
  },
};

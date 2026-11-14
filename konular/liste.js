/* ============================================================
   ANA EKRAN: kategoriler ve konuların sırası

   { dosya: 'abc' }      hazır konu. konular/abc.js dosyası yüklenir.
   { yakinda: 'Ad' }     henüz hazır değil. Ana ekranda "Yakında" diye görünür.

   Bir konuyu yayına almak için:
     1. konular/ klasörüne dosyasını ekle (örneğin medd-lazim.js)
     2. Aşağıda { yakinda: '...' } satırını { dosya: 'medd-lazim' } yap
   ============================================================ */

TECVID.anaEkran([
  {
    kategori: { nl: 'Verlengingen', tr: 'Medler' },
    konular: [
      { dosya: 'muttasil-munfasil' },
      { dosya: 'medd-lazim' },
      { yakinda: 'Medd-i Ârız' },
      { yakinda: 'Medd-i Lîn' },
    ],
  },
  {
    kategori: { nl: 'Koranpagina’s', tr: 'Kur’an sayfaları' },
    konular: [
      { dosya: 'yasin-sayfa-4' },
    ],
  },
  {
    kategori: { nl: 'Andere regels', tr: 'Diğer konular' },
    konular: [
      { yakinda: 'Kalkale' },
    ],
  },
]);

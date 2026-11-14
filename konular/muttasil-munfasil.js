/* ============================================================
   KONU: Medd-i Muttasıl ve Medd-i Munfasıl

   Bu dosya konunun bütün içeriğidir: açıklama metinleri ve kelimeler.
   Oyunun kodu js/ klasöründedir, burada kod yoktur.

   Kelime yazarken harfleri şu işaretlerin içine al:
     ( )  med harfi      mavi görünür
     [ ]  hemze          kırmızı görünür
     { }  sükûn, şedde   mor görünür
   Kelimelerin arasına boşluk koy. Her kelime ayrı bir kutu olur.

   Metinlerde nl: Hollandaca, tr: Türkçe.
   ============================================================ */

TECVID.konuEkle({
  id: 'muttasil-munfasil',            // dosya adıyla aynı olmalı
  ad: 'Muttasıl & Munfasıl',
  ozet: {
    nl: 'Staat de hemze in hetzelfde woord of in het volgende?',
    tr: 'Hemze aynı kelimede mi, sonraki kelimede mi?',
  },
  vitrin: 'câe',                      // ana ekranda görünen örnek kelime (okunuşu ile seçilir)
  bolumler: ['ogren', 'oyna', 'say'], // bu konunun sekmeleri

  // ---------- 1. sekme: Öğren ----------
  ogren: {
    baslik: { nl: 'Twee soorten rekken', tr: 'İki çeşit uzatma' },
    giris: {
      nl: 'Bij allebei staat een <b class="med">med-letter</b> (ا و ي) vlak voor een <b class="hemze">hemze</b> (ء أ إ ؤ ئ). De vraag is alleen: zitten ze in hetzelfde woord?',
      tr: 'İkisinde de med harfinden sonra hemze gelir. Tek soru şu: aynı kelimede mi?',
    },
    adimlar: [
      { nl: 'Zoek de <b class="med">med-letter</b>.', tr: 'Med harfini bul.' },
      { nl: 'Zoek de <b class="hemze">hemze</b> erna.', tr: 'Arkasından gelen hemzeyi bul.' },
      { nl: 'Hetzelfde woord? <b>Eén hokje.</b> Volgend woord? <b>Twee hokjes.</b>', tr: 'Aynı kelime mi? Tek kutu. Sonraki kelime mi? İki kutu.' },
    ],
    kurallar: [
      {
        tur: 'muttasil',
        etiket: { nl: 'Eén hokje', tr: 'Tek kutu' },
        ornek: 'câe',                 // aşağıdaki kelimelerden biri (okunuşu ile seçilir)
        metin: {
          nl: '<b class="med">Med-letter</b> en <b class="hemze">hemze</b> staan in <b>hetzelfde woord</b>.',
          tr: '<b>Med harfi</b> ile <b>hemze</b> aynı kelimede. “Yapışık ikizler.”',
        },
        uzatma: { nl: 'Rek 4 tellen, verplicht', tr: '4 hareke uzat, vâcib' },
      },
      {
        tur: 'munfasil',
        etiket: { nl: 'Twee hokjes + brug', tr: 'İki kutu + köprü' },
        ornek: 'yâ eyyühâ',
        metin: {
          nl: '<b class="med">Med-letter</b> aan het <b>einde</b> van een woord, <b class="hemze">hemze</b> aan het <b>begin</b> van het volgende.',
          tr: '<b>Med harfi</b> kelimenin sonunda, <b>hemze</b> sonraki kelimenin başında. “Komşu evler.”',
        },
        uzatma: { nl: 'Rek 4 tellen, toegestaan', tr: '4 hareke uzat, câiz' },
      },
    ],
    not: {
      nl: 'Het golfje boven de letter (<span class="ar">آ</span>) in je mushaf betekent: <b>rekken!</b>',
      tr: 'Mushafındaki harfin üstündeki dalga (medd işareti) “uzat” demektir.',
    },
  },

  // ---------- 2. sekme: Oyna ----------
  oyun: {
    secenekler: ['muttasil', 'munfasil'],   // düğmeler. Türler konular/turler.js dosyasında tanımlı
    adet: 10,                               // bir oyunda kaç soru sorulur
    soru: { nl: 'Zit de hemze in hetzelfde woord?', tr: 'Hemze aynı kelimede mi?' },
  },

  // ---------- 3. sekme: Birlikte say ----------
  say: {
    sayilar: [4, 5],                        // kaç harekeye kadar sayılabilir
  },

  // ---------- Kelimeler ----------
  // Her satır bir kelime. Yeni kelime eklemek için bir satırı kopyala ve değiştir.
  kelimeler: [
    { tur: 'muttasil', yazi: 'جَ(آ)[ءَ]', okunus: 'câe', nl: 'kwam', tr: 'geldi', kaynak: 'Nasr 1' },
    { tur: 'muttasil', yazi: 'شَ(آ)[ءَ]', okunus: 'şâe', nl: 'wilde', tr: 'diledi', kaynak: 'Kehf 39' },
    { tur: 'muttasil', yazi: 'السَّمَ(آ)[ءِ]', okunus: 'es-semâi', nl: 'de hemel', tr: 'gök', kaynak: 'Yâsîn 28' },
    { tur: 'muttasil', yazi: 'سَوَ(آ)[ءٌ]', okunus: 'sevâün', nl: 'gelijk', tr: 'eşit', kaynak: 'Yâsîn 10' },
    { tur: 'muttasil', yazi: 'يَشَ(آ)[ءُ]', okunus: 'yeşâü', nl: '(Hij) wil', tr: 'diler', kaynak: 'Yâsîn 47' },
    { tur: 'muttasil', yazi: 'مَ(آ)[ءً]', okunus: 'mâen', nl: 'water', tr: 'su', kaynak: 'Bakara 22' },
    { tur: 'muttasil', yazi: 'سُ(وٓ)[ءَ]', okunus: 'sûe', nl: 'het ergste', tr: 'en kötüsü', kaynak: 'Bakara 49' },
    { tur: 'muttasil', yazi: 'شُهَدَ(آ)[ءَ]', okunus: 'şühedâe', nl: 'getuigen', tr: 'şahitler', kaynak: 'Nisâ 135' },
    { tur: 'munfasil', yazi: 'يَ(آ) [أَ]يُّهَا', okunus: 'yâ eyyühâ', nl: 'o jullie', tr: 'ey', kaynak: 'Bakara 21' },
    { tur: 'munfasil', yazi: 'إِنَّ(آ) [أَ]عْطَيْنَاكَ', okunus: 'innâ a‘taynâke', nl: 'Wij gaven jou', tr: 'Biz sana verdik', kaynak: 'Kevser 1' },
    { tur: 'munfasil', yazi: 'فَقَالُ(وٓ)ا [إِ]نَّا', okunus: 'fe kâlû innâ', nl: 'zij zeiden: wij…', tr: 'dediler ki biz…', kaynak: 'Yâsîn 14' },
    { tur: 'munfasil', yazi: 'إِنَّ(آ) [إِ]لَيْكُمْ', okunus: 'innâ ileyküm', nl: 'wij … naar jullie', tr: 'biz size …', kaynak: 'Yâsîn 14' },
    { tur: 'munfasil', yazi: 'مَ(آ) [أَ]نتُمْ', okunus: 'mâ entüm', nl: 'jullie zijn slechts…', tr: 'siz ancak…', kaynak: 'Yâsîn 15' },
    { tur: 'munfasil', yazi: 'إِنِّ(يٓ) [إِ]ذًا', okunus: 'innî izen', nl: 'dan zou ik…', tr: 'o zaman ben…', kaynak: 'Yâsîn 24' },
    { tur: 'munfasil', yazi: 'فِ(يٓ) [أَ]نفُسِكُمْ', okunus: 'fî enfüsiküm', nl: 'in jullie zelf', tr: 'kendi içinizde', kaynak: 'Zâriyât 21' },
    { tur: 'munfasil', yazi: 'وَمَ(آ) [أَ]نزَلْنَا', okunus: 've mâ enzelnâ', nl: 'en Wij zonden niet neer', tr: 've indirmedik', kaynak: 'Yâsîn 28' },
  ],
});

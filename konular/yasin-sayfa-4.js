/* ============================================================
   KONU: Yâsîn Sûresi, 4. sayfa (41–54. âyetler)

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
  id: 'yasin-sayfa-4',                // dosya adıyla aynı olmalı
  ad: { nl: 'Yâsîn, pagina 4', tr: 'Yâsîn, 4. sayfa' },
  ozet: {
    nl: 'Zoek de lange medd’s vóór het lezen, speel het spel erna.',
    tr: 'Uzun medleri okumadan önce bul, okuduktan sonra oyna.',
  },
  vitrin: 'ilâ ehlihim',
  bolumler: ['bul', 'oyna'],

  // ---------- 1. sekme: Bul (okumadan önce) ----------
  bul: {
    baslik: { nl: 'Zoek de vier lange medd’s', tr: 'Dört uzun meddi bul' },
    giris: {
      nl: 'Âyet 41–54. Op deze pagina staan vier lange medd’s. Al de andere med-letters zijn gewoon <b>Tabiî</b> (2 tellen).',
      tr: '41–54. âyetler. Bu sayfada dört uzun medd var. Diğer med harfleri normal Tabiî (2 hareke).',
    },
    adimlar: [
      { nl: '<b>Vóór het lezen:</b> zoek deze woorden in je mushaf en zet er een potloodstreep onder.', tr: 'Okumadan önce: bu kelimeleri mushafında bul, altını kurşun kalemle çiz.' },
      { nl: '<b>Na het lezen:</b> speel het spel.', tr: 'Okuduktan sonra: oyunu oyna.' },
    ],
    turler: ['muttasil', 'munfasil'],       // bu türlerdeki kelimeler "bulunacaklar" olarak gösterilir
    ogretmenNotu: {
      tr: '47. âyetteki <span class="ar">أَطْعَمَهُۥٓ إِنْ</span> da munfasıl gibi uzatılır (zamir hâsı, sıla-i kebîre). Âyet sonlarında durulunca medd-i ârız olur; o konu 11. haftada. Sayfa bölümü standart mushafa göredir.',
    },
  },

  // ---------- 2. sekme: Oyna (okuduktan sonra) ----------
  oyun: {
    secenekler: ['tabii', 'muttasil', 'munfasil'],
    adet: 10,
    soru: {
      nl: 'Komt er een hemze na de med-letter? In hetzelfde woord?',
      tr: 'Med harfinden sonra hemze var mı? Aynı kelimede mi?',
    },
  },

  // ---------- Kelimeler ----------
  kelimeler: [
    { tur: 'muttasil', yazi: 'يَشَ(آ)[ءُ]', okunus: 'yeşâü', nl: '(Hij) wil', tr: 'diler', kaynak: 'Yâsîn 47' },
    { tur: 'munfasil', yazi: 'آمَنُ(وٓ)ا [أَ]نُطْعِمُ', okunus: 'âmenû e nut‘imu', nl: 'die geloven: zullen wij voeden…', tr: 'iman edenlere: biz mi doyuralım…', kaynak: 'Yâsîn 47',
      not: {
        nl: 'Let op: de hemze aan het begin van آمَنُوا staat vóór de med-letter, die telt niet.',
        tr: 'Dikkat: آمَنُوا’nın başındaki hemze med harfinden önce, o sayılmaz.',
      } },
    { tur: 'munfasil', yazi: 'وَ(لَآ) [إِ]لَىٰ', okunus: 've lâ ilâ', nl: 'en ook niet naar…', tr: 'ne de … -e', kaynak: 'Yâsîn 50' },
    { tur: 'munfasil', yazi: 'إِلَ(ىٰٓ) [أَ]هْلِهِمْ', okunus: 'ilâ ehlihim', nl: 'naar hun familie', tr: 'ailelerine', kaynak: 'Yâsîn 50' },
    { tur: 'tabii', yazi: 'قَ(ا)لُ(و)ا', okunus: 'kâlû', nl: 'zij zeiden', tr: 'dediler', kaynak: 'Yâsîn 52' },
    { tur: 'tabii', yazi: 'كَ(ا)نُ(و)ا', okunus: 'kânû', nl: 'zij waren', tr: 'idiler', kaynak: 'Yâsîn 46' },
    { tur: 'tabii', yazi: 'يَسْتَطِ(ي)عُ(و)نَ', okunus: 'yestatî‘ûne', nl: 'zij kunnen (niet)', tr: 'güç yetiremezler', kaynak: 'Yâsîn 50' },
    { tur: 'tabii', yazi: 'مَ(ا) وَعَدَ', okunus: 'mâ ve‘ade', nl: 'wat (Hij) beloofde', tr: 'vaat ettiği', kaynak: 'Yâsîn 52' },
    { tur: 'tabii', yazi: 'وَإِذَ(ا)', okunus: 've izâ', nl: 'en wanneer', tr: 've ne zaman ki', kaynak: 'Yâsîn 45',
      not: {
        nl: 'Let op: de hemze (إ) staat vóór de med-letter. Erna komt geen hemze.',
        tr: 'Dikkat: hemze (إ) med harfinden önce; sonrasında hemze yok.',
      } },
    { tur: 'tabii', yazi: 'قِ(ي)لَ', okunus: 'kîle', nl: 'er werd gezegd', tr: 'denildi', kaynak: 'Yâsîn 45' },
  ],
});

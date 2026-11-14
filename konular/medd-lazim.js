/* ============================================================
   KONU: Medd-i Lâzım

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
  id: 'medd-lazim',                   // dosya adıyla aynı olmalı
  ad: 'Medd-i Lâzım',
  ozet: {
    nl: 'Na de med-letter komt een şedde of sukûn: altijd lang rekken.',
    tr: 'Med harfinden sonra şedde ya da sükûn gelir: her zaman uzun uzatılır.',
  },
  vitrin: 'ed-dâllîn',                // ana ekranda görünen örnek kelime (okunuşu ile seçilir)
  bolumler: ['ogren', 'oyna', 'say'], // bu konunun sekmeleri

  // ---------- 1. sekme: Öğren ----------
  ogren: {
    baslik: { nl: 'De langste medd', tr: 'En uzun med' },
    giris: {
      nl: 'Je kent al de <b class="med">med-letters</b> (ا و ي). Nu kijk je naar de letter <b>direct erna</b>. Staat daar een <b class="sukun">şedde</b> (<span class="ar">ـّـ</span>) of een <b class="sukun">sukûn</b> (<span class="ar">ـْـ</span>)? Dan rek je lang, en altijd even lang.',
      tr: 'Med harflerini biliyorsun. Şimdi hemen arkasındaki harfe bak. Orada şedde ya da sükûn varsa uzun uzatırsın, her zaman aynı uzunlukta.',
    },
    adimlar: [
      { nl: 'Zoek de <b class="med">med-letter</b>.', tr: 'Med harfini bul.' },
      { nl: 'Kijk naar de letter <b>direct erna</b>.', tr: 'Hemen arkasındaki harfe bak.' },
      { nl: '<b class="hemze">Hemze</b>? Muttasıl of Munfasıl. <b class="sukun">Şedde</b> of <b class="sukun">sukûn</b>? <b>Lâzım!</b>', tr: 'Hemze mi? Muttasıl ya da munfasıl. Şedde ya da sükûn mu? Lâzım!' },
    ],
    kurallar: [
      {
        tur: 'lazim',
        etiket: { nl: 'Şedde of sukûn erna', tr: 'Arkasında şedde ya da sükûn' },
        ornek: 'ed-dâllîn',
        metin: {
          nl: '<b class="med">Med-letter</b>, en direct erna een letter met <b class="sukun">şedde</b> of <b class="sukun">sukûn</b>. Je kent dit woord uit de Fâtiha!',
          tr: 'Med harfinden hemen sonra şeddeli ya da sükûnlu bir harf. Bu kelimeyi Fâtiha’dan biliyorsun!',
        },
        uzatma: { nl: 'Rek 6 tellen, altijd', tr: '6 hareke uzat, her zaman (lâzım)' },
      },
      {
        tur: 'muttasil',
        etiket: { nl: 'Vergelijk: hemze erna', tr: 'Karşılaştır: arkasında hemze' },
        ornek: 'câet',
        metin: {
          nl: 'Bij Muttasıl komt er een <b class="hemze">hemze</b> na de med-letter. In Nâziât 34 staan ze naast elkaar: <span class="ar">جَآءَتِ الطَّآمَّةُ</span>',
          tr: 'Muttasıl’da med harfinden sonra hemze gelir. Nâziât 34’te ikisi yan yana: önce muttasıl, sonra lâzım.',
        },
        uzatma: { nl: 'Rek 4 tellen', tr: '4 hareke uzat' },
      },
    ],
    not: {
      nl: 'Ook de letters aan het begin van sommige sûre’s hebben Medd-i Lâzım: <span class="ar">يسٓ</span> lees je als Yâ-Sîîîn.',
      tr: 'Bazı sûrelerin başındaki harflerde de medd-i lâzım vardır: Yâsîn’in başı “Yâ-Sîîîn” diye okunur.',
    },
    ogretmenNotu: {
      tr: 'MEB kitabında medd-i lâzım “dört elif miktarı” uzatılır diye geçer. Uygulamada muttasılı hareke ile saydığımız için (4 hareke) lâzımı da hareke ile 6 olarak yazdık; sınıfta başka bir ölçü kullanıyorsanız bu dosyadaki “6” sayılarını değiştirin. Dört çeşidi: kelime-i müsakkale (<span class="ar">الضَّآلِّينَ</span>, <span class="ar">الْحَآقَّةُ</span>), kelime-i muhaffefe (Yûnus 51 ve 91’deki <span class="ar">آلْآنَ</span>), harf-i müsakkal (<span class="ar">الٓمٓ</span>’deki lâm), harf-i muhaffef (<span class="ar">نٓ</span>, <span class="ar">قٓ</span> ve <span class="ar">يسٓ</span>’deki sîn).',
    },
  },

  // ---------- 2. sekme: Oyna ----------
  // Lâzım kelimeleri, daha önce öğrenilen muttasıl ve munfasıl ile karışık sorulur.
  oyun: {
    secenekler: ['muttasil', 'munfasil', 'lazim'],
    adet: 9,                                // her türden 3 soru
    soru: { nl: 'Wat komt er na de med-letter?', tr: 'Med harfinden sonra ne geliyor?' },
  },

  // ---------- 3. sekme: Birlikte say ----------
  say: {
    sayilar: [6],                           // kaç harekeye kadar sayılır
    turler: ['lazim'],                      // sayaçta sadece bu türdeki kelimeler görünür
  },

  // ---------- Kelimeler ----------
  // Her satır bir kelime. Yeni kelime eklemek için bir satırı kopyala ve değiştir.
  kelimeler: [
    // Medd-i Lâzım
    { tur: 'lazim', yazi: 'الضَّ(آ){لِّ}ينَ', okunus: 'ed-dâllîn', nl: 'de dwalenden', tr: 'sapıtanlar', kaynak: 'Fâtiha 7' },
    { tur: 'lazim', yazi: 'الْحَ(آ){قَّ}ةُ', okunus: 'el-hâkka', nl: 'de Onvermijdelijke (de Laatste Dag)', tr: 'gerçekleşecek olan (kıyamet)', kaynak: 'Hâkka 1' },
    { tur: 'lazim', yazi: 'الطَّ(آ){مَّ}ةُ', okunus: 'et-tâmme', nl: 'de grote ramp (de Laatste Dag)', tr: 'büyük felaket (kıyamet)', kaynak: 'Nâziât 34' },
    { tur: 'lazim', yazi: 'الصَّ(آ){خَّ}ةُ', okunus: 'es-sâhha', nl: 'de oorverdovende schreeuw', tr: 'kulakları sağır eden ses', kaynak: 'Abese 33' },
    { tur: 'lazim', yazi: 'دَ(آ){بَّ}ةٍ', okunus: 'dâbbetin', nl: 'levend wezen', tr: 'canlı', kaynak: 'Hûd 6' },
    { tur: 'lazim', yazi: 'ءَ(آ){لْ}ـَٰٔنَ', okunus: 'â-l-âne', nl: 'nu pas?', tr: 'şimdi mi?', kaynak: 'Yûnus 91',
      not: {
        nl: 'Let op: de hemze aan het begin staat vóór de med-letter. Erna komt een sukûn: Lâzım.',
        tr: 'Dikkat: baştaki hemze med harfinden önce. Arkasında sükûn var: Lâzım.',
      } },

    // Tekrar: muttasıl ve munfasıl (oyunda lâzımdan ayırt etmek için)
    { tur: 'muttasil', yazi: 'جَ(آ)[ءَ]تِ', okunus: 'câet', nl: 'kwam', tr: 'geldi', kaynak: 'Nâziât 34' },
    { tur: 'muttasil', yazi: 'سَوَ(آ)[ءٌ]', okunus: 'sevâün', nl: 'gelijk', tr: 'eşit', kaynak: 'Yâsîn 10' },
    { tur: 'muttasil', yazi: 'يَشَ(آ)[ءُ]', okunus: 'yeşâü', nl: '(Hij) wil', tr: 'diler', kaynak: 'Yâsîn 47' },
    { tur: 'muttasil', yazi: 'السَّمَ(آ)[ءِ]', okunus: 'es-semâi', nl: 'de hemel', tr: 'gök', kaynak: 'Yâsîn 28' },
    { tur: 'munfasil', yazi: 'وَمَ(آ) [أَ]دْرَىٰكَ', okunus: 've mâ edrâke', nl: 'en wat doet jou weten', tr: 've sana ne bildirdi', kaynak: 'Hâkka 3' },
    { tur: 'munfasil', yazi: 'فَقَالُ(وٓ)ا [إِ]نَّا', okunus: 'fe kâlû innâ', nl: 'zij zeiden: wij…', tr: 'dediler ki biz…', kaynak: 'Yâsîn 14' },
    { tur: 'munfasil', yazi: 'مَ(آ) [أَ]نتُمْ', okunus: 'mâ entüm', nl: 'jullie zijn slechts…', tr: 'siz ancak…', kaynak: 'Yâsîn 15' },
  ],
});

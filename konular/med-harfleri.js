/* ============================================================
   KONU: Med harfleri ve Medd-i Tabiî

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
  id: 'med-harfleri',                 // dosya adıyla aynı olmalı
  ad: { nl: 'Med-letters', tr: 'Med harfleri ve Medd-i Tabiî' },
  ozet: {
    nl: 'Elif, vav en ye: de drie letters die een klank lang maken.',
    tr: 'Elif, vav ve ye: sesi uzatan üç harf. Bütün medlerin temeli.',
  },
  vitrin: 'ğâsikın',                  // ana ekranda görünen örnek kelime (okunuşu ile seçilir)
  bolumler: ['ogren', 'oyna', 'say'], // bu konunun sekmeleri

  // ---------- 1. sekme: Öğren ----------
  ogren: {
    baslik: { nl: 'De drie med-letters', tr: 'Üç med harfi' },
    giris: {
      nl: 'Een med-letter maakt de klank van de letter ervoor lang. Er zijn er drie: <span class="ar"><b class="med">ا</b> <b class="med">و</b> <b class="med">ي</b></span>. Elk hoort bij een eigen teken op de letter ervoor.',
      tr: 'Med harfi, kendinden önceki harfin sesini uzatır. Üç tanedir ve her birinin önünde kendi harekesi olur.',
    },
    adimlar: [
      { nl: 'Zoek een <span class="ar"><b class="med">ا</b></span>, <span class="ar"><b class="med">و</b></span> of <span class="ar"><b class="med">ي</b></span> zonder eigen teken.', tr: 'Kendi harekesi olmayan bir elif, vav ya da ye bul.' },
      { nl: 'Kijk naar het teken op de letter <b>ervoor</b>: üstün, ötre of esre?', tr: 'Önceki harfin harekesine bak: üstün mü, ötre mi, esre mi?' },
      { nl: 'Past het bij elkaar? Dan rek je <b>2 tellen</b>: Medd-i Tabiî.', tr: 'Uyuyorsa 2 hareke uzatırsın: Medd-i Tabiî.' },
    ],
    kurallar: [
      {
        tur: 'elif',
        etiket: { nl: 'Na üstün', tr: 'Üstünden sonra' },
        ornek: 'ğâsikın',
        metin: {
          nl: 'De letter ervoor heeft een <b>üstün</b>. Dan klinkt de <b class="med">elif</b> als een lange “â”.',
          tr: 'Önceki harf üstünlü. Elif uzun bir “â” sesi verir.',
        },
        uzatma: { nl: 'Rek 2 tellen', tr: '2 hareke uzat' },
      },
      {
        tur: 'vav',
        etiket: { nl: 'Na ötre', tr: 'Ötreden sonra' },
        ornek: 'eûzü',
        metin: {
          nl: 'De letter ervoor heeft een <b>ötre</b>. Dan klinkt de <b class="med">vav</b> als een lange “û”.',
          tr: 'Önceki harf ötreli. Vav uzun bir “û” sesi verir.',
        },
        uzatma: { nl: 'Rek 2 tellen', tr: '2 hareke uzat' },
      },
      {
        tur: 'ye',
        etiket: { nl: 'Na esre', tr: 'Esreden sonra' },
        ornek: 'ellezîne',
        metin: {
          nl: 'De letter ervoor heeft een <b>esre</b>. Dan klinkt de <b class="med">ye</b> als een lange “î”.',
          tr: 'Önceki harf esreli. Ye uzun bir “î” sesi verir.',
        },
        uzatma: { nl: 'Rek 2 tellen', tr: '2 hareke uzat' },
      },
    ],
    not: {
      nl: 'Dit is <b>Medd-i Tabiî</b>, de basis van alle medd’s. Komt er na de med-letter een <b class="hemze">hemze</b>, <b class="sukun">şedde</b> of <b class="sukun">sukûn</b>? Dan wordt het een andere medd. Die leer je in de volgende onderwerpen.',
      tr: 'Bu, Medd-i Tabiî’dir; bütün medlerin temeli. Med harfinden sonra hemze, şedde ya da sükûn gelirse başka bir med olur. Onları sonraki konularda öğreneceksin.',
    },
    ogretmenNotu: {
      tr: 'Örnekler çocukların ezberlediği sûrelerden (Fâtiha, İhlâs, Felak, Nâs) ve âyet ortasından seçildi. Âyet sonunda durulunca (örneğin <span class="ar">الرَّحِيمِ</span> ve <span class="ar">النَّاسِ</span>) medd-i ârız olur; o konu ileride. Mushaftaki küçük dik elif de (<span class="ar">الرَّحْمٰنِ</span>) med harfi gibi okunur. Harekeli vav ve ye (<span class="ar">وَ</span> ve <span class="ar">يَ</span>) med harfi değildir. Önceki harfi üstünlü sakin vav ve ye (<span class="ar">يَوْمِ</span> ve <span class="ar">عَلَيْهِمْ</span>) lîn harfidir; o da ileride.',
    },
  },

  // ---------- 2. sekme: Oyna ----------
  oyun: {
    secenekler: ['elif', 'vav', 'ye'],
    adet: 9,                                // her harften 3 soru
    soru: { nl: 'Welke med-letter zie je?', tr: 'Hangi med harfini görüyorsun?' },
  },

  // ---------- 3. sekme: Birlikte say ----------
  say: {
    sayilar: [2],                           // Medd-i Tabiî: 2 hareke
  },

  // ---------- Kelimeler ----------
  // Her satır bir kelime. Yeni kelime eklemek için bir satırı kopyala ve değiştir.
  kelimeler: [
    // Elif: üstünden sonra
    { tur: 'elif', yazi: 'غَ(ا)سِقٍ', okunus: 'ğâsikın', nl: 'de duisternis (van de nacht)', tr: 'karanlığı çöken gece', kaynak: 'Felak 3' },
    { tur: 'elif', yazi: 'حَ(ا)سِدٍ', okunus: 'hâsidin', nl: 'iemand die jaloers is', tr: 'hasetçi', kaynak: 'Felak 5' },
    { tur: 'elif', yazi: 'إِيَّ(ا)كَ', okunus: 'iyyâke', nl: 'alleen U', tr: 'yalnız sana', kaynak: 'Fâtiha 5' },
    { tur: 'elif', yazi: 'مَ(ا)', okunus: 'mâ', nl: 'wat (Hij schiep)', tr: '(yarattığı) şey', kaynak: 'Felak 2' },

    // Vav: ötreden sonra
    { tur: 'vav', yazi: 'أَعُ(و)ذُ', okunus: 'eûzü', nl: 'ik zoek bescherming', tr: 'sığınırım', kaynak: 'Nâs 1' },
    { tur: 'vav', yazi: 'صُدُ(و)رِ', okunus: 'sudûri', nl: 'de harten', tr: 'göğüsler, kalpler', kaynak: 'Nâs 5' },
    { tur: 'vav', yazi: 'الْمَغْضُ(و)بِ', okunus: 'el-mağdûbi', nl: 'wie Gods toorn kregen', tr: 'gazaba uğramışlar', kaynak: 'Fâtiha 7' },
    { tur: 'vav', yazi: 'يُ(و)لَدْ', okunus: 'yûled', nl: '(niet) geboren', tr: 'doğurulmadı', kaynak: 'İhlâs 3' },

    // Ye: esreden sonra
    { tur: 'ye', yazi: 'الَّذِ(ي)نَ', okunus: 'ellezîne', nl: 'degenen die', tr: 'o kimseler ki', kaynak: 'Fâtiha 7' },
    { tur: 'ye', yazi: 'قِ(ي)لَ', okunus: 'kîle', nl: 'er werd gezegd', tr: 'denildi', kaynak: 'Yâsîn 45' },
    { tur: 'ye', yazi: 'فِ(ى)', okunus: 'fî', nl: 'in', tr: 'içinde', kaynak: 'Nâs 5',
      not: {
        nl: 'Een ye aan het einde van een woord heeft vaak geen puntjes (ى). Het blijft een ye.',
        tr: 'Kelime sonundaki ye çoğu zaman noktasız yazılır (ى). Yine ye harfidir.',
      } },
  ],
});

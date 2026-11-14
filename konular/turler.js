/* ============================================================
   TÜRLER: oyundaki cevap seçenekleri

   Her türün bir adı, düğmede görünen kısa ipucu ve cevaptan
   sonra gösterilen açıklaması (neden) vardır.
   Kelime dosyalarındaki "tur" alanı buradaki adlardan biri olmalı.

   Yeni bir kural eklemek için (örneğin medd-i lâzım) aşağıya
   yeni bir TECVID.turEkle(...) bloğu yazılır.
   ============================================================ */

// ---- Med harfleri: hangi harf? ----
TECVID.turEkle('elif', {
  ad: 'Elif',
  uzunAd: 'Elif',
  ipucu: { nl: 'Na üstün', tr: 'Üstünden sonra' },
  neden: {
    nl: 'Een <b class="med">elif</b> na een letter met <b>üstün</b>: de klank wordt een lange “â” → <b>Medd-i Tabiî</b>, 2 tellen.',
    tr: 'Üstünlü harften sonra elif: ses uzun “â” olur → Medd-i Tabiî, 2 hareke.',
  },
});

TECVID.turEkle('vav', {
  ad: 'Vav',
  uzunAd: 'Vav',
  ipucu: { nl: 'Na ötre', tr: 'Ötreden sonra' },
  neden: {
    nl: 'Een <b class="med">vav</b> na een letter met <b>ötre</b>: de klank wordt een lange “û” → <b>Medd-i Tabiî</b>, 2 tellen.',
    tr: 'Ötreli harften sonra vav: ses uzun “û” olur → Medd-i Tabiî, 2 hareke.',
  },
});

TECVID.turEkle('ye', {
  ad: 'Ye',
  uzunAd: 'Ye',
  ipucu: { nl: 'Na esre', tr: 'Esreden sonra' },
  neden: {
    nl: 'Een <b class="med">ye</b> na een letter met <b>esre</b>: de klank wordt een lange “î” → <b>Medd-i Tabiî</b>, 2 tellen.',
    tr: 'Esreli harften sonra ye: ses uzun “î” olur → Medd-i Tabiî, 2 hareke.',
  },
});

// ---- Med çeşitleri: neden uzuyor? ----
TECVID.turEkle('tabii', {
  ad: 'Tabiî',
  uzunAd: 'Medd-i Tabiî',
  ipucu: { nl: 'Geen hemze', tr: 'Hemze yok' },
  neden: {
    nl: 'Na de <b class="med">med-letter</b> komt <b>geen hemze</b> → <b>Medd-i Tabiî</b>, 2 tellen.',
    tr: 'Med harfinden sonra hemze yok → Medd-i Tabiî, 2 hareke.',
  },
});

TECVID.turEkle('muttasil', {
  ad: 'Muttasıl',
  uzunAd: 'Medd-i Muttasıl',
  ipucu: { nl: 'Eén hokje', tr: 'Tek kutu' },
  neden: {
    nl: '<b class="med">Med-letter</b> en <b class="hemze">hemze</b> in <b>hetzelfde woord</b> → één hokje → <b>Muttasıl</b>, 4 tellen.',
    tr: 'Med harfi ile hemze aynı kelimede → tek kutu → Muttasıl, 4 hareke.',
  },
});

TECVID.turEkle('munfasil', {
  ad: 'Munfasıl',
  uzunAd: 'Medd-i Munfasıl',
  ipucu: { nl: 'Twee hokjes', tr: 'İki kutu' },
  neden: {
    nl: '<b class="med">Med-letter</b> aan het einde, <b class="hemze">hemze</b> in het <b>volgende woord</b> → twee hokjes → <b>Munfasıl</b>, 4 tellen.',
    tr: 'Med harfi kelime sonunda, hemze sonraki kelimede → iki kutu → Munfasıl, 4 hareke.',
  },
  kopru: true,   // iki kutunun arasına köprü çizilir
});

TECVID.turEkle('lazim', {
  ad: 'Lâzım',
  uzunAd: 'Medd-i Lâzım',
  ipucu: { nl: 'Şedde of sukûn', tr: 'Şedde ya da sükûn' },
  neden: {
    nl: 'Na de <b class="med">med-letter</b> komt een letter met <b class="sukun">şedde</b> of <b class="sukun">sukûn</b> → <b>Medd-i Lâzım</b>, 6 tellen.',
    tr: 'Med harfinden sonra şeddeli ya da sükûnlu harf → Medd-i Lâzım, 6 hareke.',
  },
});

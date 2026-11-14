/* ============================================================
   TÜRLER: oyundaki cevap seçenekleri

   Her türün bir adı, düğmede görünen kısa ipucu ve cevaptan
   sonra gösterilen açıklaması (neden) vardır.
   Kelime dosyalarındaki "tur" alanı buradaki adlardan biri olmalı.

   Yeni bir kural eklemek için (örneğin medd-i lâzım) aşağıya
   yeni bir TECVID.turEkle(...) bloğu yazılır.
   ============================================================ */

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

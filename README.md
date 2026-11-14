# Tecvid Dedektif

Çocuklar için tecvid oyunu. Hollandaca ve Türkçe, büyük ekranda ve telefonda çalışır.

**Canlı adres:** https://tecviddedektif.github.io/tecvid-dedektif/

## Şu an içinde ne var

Ana ekranda konular kategorilere ayrılmış. Her konu kendi sekmeleriyle açılır.

| Kategori | Konu | Sekmeler |
| --- | --- | --- |
| Medler | Med harfleri ve Medd-i Tabiî | Öğren, Oyna (elif, vav, ye), Birlikte say (2 hareke) |
| | Muttasıl & Munfasıl | Öğren, Oyna, Birlikte say |
| | Medd-i Lâzım | Öğren, Oyna (muttasıl ve munfasıl ile karışık), Birlikte say (6 hareke) |
| Kur'an sayfaları | Yâsîn, 4. sayfa | Bul, Oyna |
| | Medd-i Ârız, Lîn, Kalkale | Yakında |

## Dosyalar

```
index.html            sayfanın iskeleti
css/stil.css          görünüm: renkler, yazı tipleri, yerleşim
js/                   oyunun kodu (içerik eklerken dokunmana gerek yok)
  tecvid.js           çekirdek
  kelime.js           Arapça kelimeyi renkli ve kutulu çizer
  oyun.js             Oyna sekmesi
  sayac.js            Birlikte say sekmesi
  uygulama.js         ana ekran, sekmeler, gezinme
konular/              İÇERİK: senin çalışacağın yer
  liste.js            ana ekrandaki kategoriler ve sıra
  turler.js           cevap türleri (Elif, Vav, Ye, Tabiî, Muttasıl...)
  med-harfleri.js
  muttasil-munfasil.js
  medd-lazim.js
  yasin-sayfa-4.js
fonts/                yazı tipleri ve lisansları
qr.png                canlı adrese giden QR kodu
```

## Kelime yazma kuralı

Kelime düz Arapça yazılır, renklenecek harfler işaretlerin içine alınır:

| İşaret | Anlamı | Renk |
| --- | --- | --- |
| `( )` | med harfi | mavi |
| `[ ]` | hemze | kırmızı |
| `{ }` | sükûn, şedde | mor |

Kelimeler arasındaki boşluk yeni bir kutu demektir. Örnekler:

```js
{ tur: 'muttasil', yazi: 'جَ(آ)[ءَ]', okunus: 'câe', nl: 'kwam', tr: 'geldi', kaynak: 'Nasr 1' },
{ tur: 'munfasil', yazi: 'يَ(آ) [أَ]يُّهَا', okunus: 'yâ eyyühâ', nl: 'o jullie', tr: 'ey', kaynak: 'Bakara 21' },
```

Arapça yazarken parantezler ekranda ters görünebilir, önemli değil, uygulama ikisini de kabul eder.

## Yeni konu eklemek (Medd-i Lâzım böyle eklendi)

1. **Tür ekle.** `konular/turler.js` dosyasına `lazim` adında yeni bir `TECVID.turEkle(...)` bloğu yaz.
2. **Konu dosyası yap.** `konular/muttasil-munfasil.js` dosyasını kopyala, adını `medd-lazim.js` yap. İçinde `id: 'medd-lazim'` yaz, metinleri ve kelimeleri değiştir.
3. **Ana ekrana koy.** `konular/liste.js` içinde `{ yakinda: 'Medd-i Lâzım' }` satırını `{ dosya: 'medd-lazim' }` yap.

Sayaçta sadece bazı türler görünsün istersen konu dosyasındaki `say` bölümüne `turler: ['lazim']` yaz. Öğren sekmesine öğretmen notu için `ogren` bölümüne `ogretmenNotu: { tr: '...' }` ekle.

Bir yerde hata yaparsan (eksik virgül, yanlış tür adı, kapatılmamış parantez) ana ekranın üstünde kırmızı bir kutu çıkar ve hangi dosyanın kaçıncı satırında ne olduğunu Türkçe söyler. Hatalı kelime oyuna girmez, diğerleri çalışmaya devam eder.

Yeni bir âyet eklemeden önce metni güvenilir bir mushaftan kontrol edin.

## Gizlilik

Oyun hiçbir kişisel veri toplamaz. Üyelik, isim, çerez ve reklam yok. Sayfa başka hiçbir siteye istek göndermez, fontlar dahil her şey bu depodan yüklenir.

## Yol haritası

1. ~~Temel: depo ve canlı adres~~
2. ~~Düzenli yapı: ana ekran, kategoriler, konu dosyaları~~
3. Uygulama adı ve ikonu; telefona kurulabilir ve internetsiz çalışan uygulama
4. Yeni konular: ~~med harfleri~~, ~~medd-i lâzım~~, medd-i ârız, medd-i lîn, kalkale
5. Play Store ve App Store

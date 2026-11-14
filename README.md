# Tecvid Dedektif

Çocuklar için tecvid oyunu. Hollandaca ve Türkçe, büyük ekranda ve telefonda çalışır.

**Canlı adres:** https://tecviddedektif.github.io/tecvid-dedektif/

## Şu an içinde ne var

**Medd Dedektif**: medd-i muttasıl ve medd-i munfasıl. Dört bölüm:

| Bölüm | Ne yapar |
| --- | --- |
| Leer · Öğren | Kuralı renkli ve kutulu örneklerle gösterir |
| Speel · Oyna | 10 soruluk oyun: muttasıl mı, munfasıl mı? |
| Tel mee · Birlikte say | Uzatmayı birlikte saymak için sayaç |
| Yâsîn · 4. sayfa | Yâsîn 41–54. âyetlerdeki medler, üç seçenekli oyun |

## Dosyalar

| Dosya | Ne işe yarar |
| --- | --- |
| `index.html` | Oyunun tamamı: sayfa yapısı (HTML), görünüm (CSS) ve oyun mantığı (JavaScript) |
| `fonts/` | Yazı tipleri (Amiri, Bricolage Grotesque, Figtree) ve lisansları |
| `qr.png` | Canlı adrese giden QR kodu. Oyundaki "QR" düğmesi bunu gösterir |

## Kelime eklemek

Kelimeler `index.html` içinde iki listede durur: `ITEMS` (Oyna bölümü) ve `YITEMS` (Yâsîn bölümü). Her kelime bir satırdır:

```js
{ t:'mut', w:[[['جَ',''],[A,'m'],['ءَ','h']]], tl:'câe', nl:'kwam', tr:'geldi', src:'Nasr 1' },
```

- `t`: türü. `'mut'` muttasıl, `'mun'` munfasıl, `'tab'` tabiî
- `w`: kelimenin parçaları. `'m'` med harfi (mavi), `'h'` hemze (kırmızı), `''` normal
- `tl`: okunuşu, `nl`: Hollandaca anlamı, `tr`: Türkçe anlamı, `src`: sûre ve âyet

Yeni bir âyet eklemeden önce metni güvenilir bir mushaftan kontrol edin.

## Gizlilik

Oyun hiçbir kişisel veri toplamaz. Üyelik, isim, çerez ve reklam yok. Sayfa başka hiçbir siteye istek göndermez, fontlar dahil her şey bu depodan yüklenir.

## Yol haritası

1. Temel: depo ve canlı adres
2. Düzenli yapı: kelimeler ayrı veri dosyasında, uygulama adı ve ikonu
3. Telefona kurulabilir ve internetsiz çalışan uygulama
4. Yeni konular: medd-i lâzım, medd-i ârız, medd-i lîn, kalkale
5. Play Store ve App Store

# Coffee Shop

Coffee Shop, React ve TypeScript kullanılarak geliştirilen bir kahve e-ticaret uygulamasıdır.

Projenin amacı; component yapısı, props ve state kullanımı, ürün listeleme, filtreleme, sıralama ve responsive tasarım gibi temel frontend konularını gerçek bir e-ticaret senaryosu üzerinde uygulamaktır.

İlerleyen fazlarda React Router, ürün detay sayfası ve sepet yönetimi gibi özellikler projeye eklenecektir.

> **Mevcut durum:** Faz 0 ve Faz 1 tamamlandı. Faz 2'de React Router ve ürün detay sayfası geliştirilecektir.

---

## Proje Özeti

Uygulamada kullanıcıların:

- kahve ürünlerini inceleyebilmesi,
- kategorileri görebilmesi,
- ürünleri kategoriye göre filtreleyebilmesi,
- ürünleri fiyat ve isme göre sıralayabilmesi,
- ilerleyen fazlarda ürün detay sayfasına gidebilmesi,
- ilerleyen fazlarda ürünleri sepete ekleyip sepetini yönetebilmesi

hedeflenmektedir.

Proje kapsamında gerçek ödeme sistemi veya kullanıcı üyeliği bulunmamaktadır.

---

## Kullanılan Teknolojiler

- React
- TypeScript
- Vite
- CSS
- React State (`useState`)
- React Hooks (`useEffect`)
- Git / GitHub
- npm

---

## Kurulum

Projeyi bilgisayarınıza klonladıktan sonra proje klasörüne girin:

```bash
git clone <repository-url>
cd coffee-shop
```

Bağımlılıkları yükleyin:

```bash
npm install
```

---

## Çalıştırma

Development server'ı başlatmak için:

```bash
npm run dev
```

Vite tarafından verilen local adresi tarayıcıda açın.

Örnek:

```text
http://localhost:5173
```

---

## Özellikler

Şu ana kadar tamamlanan özellikler:

- Ana sayfa
- Responsive Header
- Hero alanı
- Kategori gösterimi
- Öne çıkan ürünler
- Ürün listeleme sayfası
- Kategori filtreleme
- Fiyata göre sıralama
- İsme göre sıralama
- Responsive tasarım

Sonraki fazlarda:

- React Router entegrasyonu
- Ürün detay sayfası
- Ürün kartından detay sayfasına yönlendirme
- Sepet yönetimi

geliştirilecektir.

---

## Kod Kalitesi Kontrolleri

Faz 1 sonunda aşağıdaki kontroller uygulanmıştır:

| Kontrol | Komut |
| --- | --- |
| ESLint | `npm run lint` |
| Production build | `npm run build` |
| Whitespace / diff kontrolü | `git diff --check` |

Kod üzerinde TypeScript ve ESLint kontrolleri başarıyla tamamlanmıştır.

---

# Geliştirme Süreci

## Faz 0 — React ve TypeScript'e Giriş

Faz 0'ın amacı React'in temel çalışma mantığını öğrenmek ve proje için başlangıç yapısını oluşturmaktı.

### Yapılanlar

- Vite + React + TypeScript projesi oluşturuldu.
- Vite ile gelen varsayılan demo içerikleri ve kullanılmayan assetler temizlendi.
- Functional component yapısı kullanıldı.
- Component'lere props ile veri aktarımı uygulandı.
- `useState` ile kullanıcı etkileşimleri uygulandı.
- `useEffect` kullanılarak sayfa başlığı `Coffee Shop` olarak ayarlandı.
- Ürün listeleri `map()` ile render edildi.
- Event handling mantığı üzerinde çalışıldı.
- Mock ürün verileri oluşturuldu.
- `Product` TypeScript modeli oluşturuldu.
- Header ve ProductCard gibi temel component'ler oluşturuldu.
- Git branch ve anlamlı commit düzeni kullanılmaya başlandı.

### Faz 0 Product Modeli

Faz 0 sırasında kullanılan temel ürün modeli:

```ts
export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}
```

Faz 1 sırasında kategori yapısı geliştirilerek `category` alanı özel bir `Category` tipi ile type-safe hale getirilmiştir.

---

## Faz 1 — Ana Sayfa ve Ürün Listeleme

Faz 1'in amacı uygulamanın ana kullanıcı arayüzünü oluşturmak, ürünleri görsel olarak listelemek ve filtreleme/sıralama işlemlerini geliştirmekti.

### Header

Responsive Header oluşturuldu.

Header içerisinde:

- Logo
- Ana Sayfa
- Ürünler
- Kategoriler
- Sepet

alanları yer almaktadır.

Navigasyon ve gerçek sepet işlevleri sonraki fazlarda geliştirilecektir.

---

### Hero

Kahve temalı Hero alanı oluşturuldu ve responsive tasarıma uygun hale getirildi.

Hero içerisinde:

- ana başlık,
- açıklama metni,
- CTA butonu,
- kahve temalı arka plan görseli

bulunmaktadır.

---

### Kategoriler

Aşağıdaki kategoriler görsel kartlar halinde gösterilmektedir:

- Espresso
- Filtre Kahve
- Soğuk Kahve
- Türk Kahvesi

Kategori verileri component içerisinde tekrar yazılmak yerine ayrı bir data dosyasında tutulmaktadır.

---

### Öne Çıkan Ürünler

Ana sayfada responsive ürün kartları oluşturuldu.

Ürün kartlarında:

- ürün görseli,
- kategori,
- ürün adı,
- fiyat,
- aksiyon butonları

gösterilmektedir.

Ürünler ayrı bir data dosyasından alınmakta ve `map()` kullanılarak render edilmektedir.

---

### Ürünler Sayfası

`src/pages/Products/Products.tsx` içerisinde ürün listeleme sayfası oluşturuldu.

Bu sayfa içerisinde:

- kategori filtreleme,
- fiyata göre sıralama,
- isme göre sıralama

işlevleri geliştirilmiştir.

> **Not:** Products sayfası henüz React Router üzerinden uygulamaya bağlanmamıştır. `/products` route'u Faz 2 kapsamında eklenecektir.

---

### Kategori Filtreleme

Mevcut filtre seçenekleri:

- Tümü
- Espresso
- Filtre Kahve
- Soğuk Kahve

Seçilen kategoriye göre ürün listesi dinamik olarak filtrelenmektedir.

---

### Sıralama

Mevcut sıralama seçenekleri:

- Varsayılan
- Fiyat: Düşük → Yüksek
- Fiyat: Yüksek → Düşük
- İsim: A → Z
- İsim: Z → A

Filtreleme ve sıralama işlemleri manuel olarak test edilmiştir.

---

### Category Modeli

Faz 1 sırasında kategori isimlerini merkezi ve type-safe tutmak için `Category` union tipi oluşturuldu:

```ts
export type Category =
  | 'Espresso'
  | 'Filtre Kahve'
  | 'Soğuk Kahve'
  | 'Türk Kahvesi'
```

Ürün modelindeki `category` alanı da bu tipe bağlandı:

```ts
export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: Category
  stock: number
}
```

Bu yapı sayesinde ürünlerde yanlış kategori isimlerinin kullanılması TypeScript seviyesinde engellenmektedir.

---

### Responsive Tasarım

Uygulama farklı ekran genişliklerinde kontrol edilmiştir:

- Mobile: 320px
- Tablet: 768px
- Desktop

Responsive düzen aşağıdaki alanlarda uygulanmıştır:

- Header
- Hero
- kategori alanı
- ürün kartları
- ürün listeleme sayfası

Mobil cihazlarda içerikler daha küçük ekranlara uygun şekilde yeniden düzenlenmektedir.

---

## TypeScript Kullanımı

Projede TypeScript aktif olarak kullanılmaktadır.

Özellikle:

- component prop tipleri,
- `Product` tipi,
- `Category` union tipi,
- `Record<Category, string>` ile kategori görsel eşlemesi

kullanılmaktadır.

Örneğin kategori kartlarının görselleri:

```ts
Record<Category, string>
```

yapısı kullanılarak kategori isimleriyle type-safe şekilde eşleştirilmektedir.

Ürünlerin `category` alanı da doğrudan `Category` tipine bağlanmıştır.

---

## Component Yapısı

Şu ana kadar oluşturulan temel proje yapısı:

```text
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── CategoryCard/
│   └── ProductCard/
│
├── pages/
│   └── Products/
│
├── data/
│   ├── categories.ts
│   └── products.ts
│
├── types/
│   ├── category.ts
│   └── product.ts
│
├── App.tsx
└── index.css
```

Görsel assetler:

```text
public/images/
```

altında tutulmaktadır.

---

## Tasarım

Uygulamada sıcak kahve tonlarına dayalı özgün bir görsel dil kullanılmıştır.

Temel tasarım yaklaşımı:

- koyu espresso renkli Header,
- kahve temalı Hero görseli,
- serif başlıklar,
- kahverengi ve turuncu vurgu renkleri,
- açık krem içerik alanları,
- responsive ürün kartları,
- sade ve okunabilir kullanıcı arayüzü.

Proje kapsamı dışında ekstra carousel, dark mode, parallax veya benzeri özellikler eklenmemiştir.

---

# Faz Durumu

## Faz 0

- [x] React projesi çalışıyor.
- [x] TypeScript aktif olarak kullanılıyor.
- [x] En az 3 farklı component oluşturuldu.
- [x] Props ile component'lere veri aktarılıyor.
- [x] `useState` ile kullanıcı etkileşimi yönetiliyor.
- [x] Ürün listesi `map()` ile oluşturuluyor.
- [x] Component'ler sorumluluklarına göre ayrılıyor.

## Faz 1

- [x] Header oluşturuldu.
- [x] Ana sayfa oluşturuldu.
- [x] Hero alanı oluşturuldu.
- [x] Kategori alanı oluşturuldu.
- [x] Ürün kartları oluşturuldu.
- [x] Ürünler sayfası oluşturuldu.
- [x] Ürünler listelenebiliyor.
- [x] Kategori filtreleme çalışıyor.
- [x] Fiyat sıralaması çalışıyor.
- [x] İsim sıralaması çalışıyor.
- [x] Responsive tasarım uygulandı.
- [ ] Ürün kartından ürün detayına yönlendirme

Son madde React Router ve ürün detay sayfası ile birlikte Faz 2'de tamamlanacaktır.

---

## Bilinen Eksikler / Sonraki Fazlar

Şu anda bilinçli olarak sonraki fazlara bırakılan maddeler:

- React Router entegrasyonu
- `/products` route'u
- `/products/:id` ürün detay route'u
- ürün detay sayfası
- ürün kartından ürün detayına yönlendirme
- adet seçimi
- gerçek sepete ekleme işlemi
- global sepet state yönetimi
- sepet sayfası
- loading / error / empty state senaryolarının tamamlanması

Bu özellikler proje dokümanındaki sonraki fazlara göre sırayla geliştirilecektir.

---

## Git Kullanımı

Proje Git kullanılarak fazlara ayrılmış branch'ler üzerinde geliştirilmektedir.

Kullanılan branch'lerden bazıları:

```text
feature/phase-0-react-basics
feature/phase-1-home-products
```

Değişiklikler tek bir büyük commit yerine mantıksal ve anlaşılır commit'ler halinde tutulmaktadır.

Faz 1 sonunda çalışma ağacı temiz durumdadır ve kod kalite kontrolleri uygulanmıştır.
# Coffee Shop

Coffee Shop, React ve TypeScript kullanılarak geliştirilen bir kahve e-ticaret uygulamasıdır.

Projenin amacı; component yapısı, props ve state kullanımı, ürün listeleme, filtreleme, sıralama ve responsive tasarım gibi temel frontend konularını gerçek bir e-ticaret senaryosu üzerinde uygulamaktır.

Faz 2 ile React Router, sayfalar arası navigasyon, ürün detay sayfası ve kategori route'ları projeye eklenmiştir. İlerleyen fazlarda gerçek sepet yönetimi ve kullanıcı deneyimi durumları geliştirilecektir.

> **Mevcut durum:** Faz 0, Faz 1 ve Faz 2 tamamlandı. Gerçek `Sepete Ekle` işlevi ve merkezi sepet yönetimi Faz 3'ün başlangıcında geliştirilecektir.

---

## Proje Özeti

Uygulamada kullanıcıların:

- kahve ürünlerini inceleyebilmesi,
- kategorileri görebilmesi,
- ürünleri kategoriye göre filtreleyebilmesi,
- ürünleri fiyat ve isme göre sıralayabilmesi,
- ürün detay sayfasına gidebilmesi,
- kategori kartlarından ilgili kategori ürünlerine ulaşabilmesi,
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
- React Router
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
- React Router entegrasyonu
- Sayfalar arası navigasyon
- `/products` ürün listeleme route'u
- `/products/:id` dinamik ürün detay route'u
- Ürün kartından ürün detay sayfasına yönlendirme
- Ürün detayında ürün bilgilerinin gösterimi
- Geçersiz ürün ID'si için bulunamadı durumu
- Ürün detayında adet seçimi
- `/categories/:category` dinamik kategori route'u
- Kategori kartlarından kategori sayfasına yönlendirme
- Geçersiz kategori için bulunamadı durumu
- Header'dan kategori alanına smooth scroll navigasyonu
- `/cart` route'u ve Cart sayfası altyapısı
- Responsive ürün detay tasarımı
- Responsive tasarım

Sonraki fazlarda:

- Gerçek sepete ekleme işlemi
- Global sepet state yönetimi
- Sepette adet artırma / azaltma
- Ürünü sepetten silme
- Sepet toplamlarının hesaplanması
- Loading / error / empty state senaryolarının tamamlanması

geliştirilecektir.

---

## Kod Kalitesi Kontrolleri

Faz 2 sonunda aşağıdaki kontroller tekrar uygulanmıştır:

| Kontrol | Komut |
| --- | --- |
| ESLint | `npm run lint` |
| Production build | `npm run build` |
| Whitespace / diff kontrolü | `git diff --check` |

Faz 2 sonunda ESLint, production build ve whitespace / diff kontrolleri başarıyla tamamlanmıştır.

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

## Faz 2 — Routing ve Ürün Detay Sayfası

Faz 2'de React Router kullanılarak sayfalar arası navigasyon ve ürün detay akışı tamamlandı.

### Yapılanlar

- `react-router-dom` projeye eklendi ve `BrowserRouter` yapılandırıldı.
- Ana sayfa içeriği `Home` sayfasına taşındı.
- Aşağıdaki route'lar oluşturuldu:

```text
/                       → Ana sayfa
/products               → Ürünler sayfası
/products/:id           → Ürün detay sayfası
/categories/:category   → Kategoriye ait ürünler
/cart                    → Sepet sayfası altyapısı
```

- Header içerisindeki Ana Sayfa, Ürünler, Kategoriler ve Sepet navigasyonları bağlandı.
- `ProductCard` üzerinden ilgili ürün detay sayfasına geçiş eklendi.
- `useParams()` ile ürün ID'sine göre ürün detayları gösterildi.
- Geçersiz ürün ID'sinde bulunamadı durumu eklendi.
- Ürün detayında görsel, kategori, ad, açıklama, fiyat, stok ve adet seçimi gösterildi.
- Adet artırma / azaltma işlemleri eklendi ve adet `1` değerinin altına düşmeyecek şekilde sınırlandı.
- Kategori kartları `/categories/:category` route'una bağlandı ve ilgili kategori ürünleri listelendi.
- Geçersiz kategori için bulunamadı durumu eklendi.
- Ürün detay sayfası responsive hale getirildi.
- `/cart` route'u ve temel Cart sayfası oluşturuldu.

> **Not:** Gerçek sepete ekleme, global sepet state yönetimi, sepet içi adet güncelleme, ürün silme ve toplam fiyat hesaplama işlemleri Faz 3 kapsamında geliştirilecektir.

### Faz 2 Kontrolleri

```bash
npm run lint
npm run build
git diff --check
```

Kontroller başarıyla tamamlandı.

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
│   ├── Home/
│   │   └── Home.tsx
│   ├── Products/
│   ├── ProductDetail/
│   │   ├── ProductDetail.tsx
│   │   └── ProductDetail.css
│   ├── Category/
│   │   └── Category.tsx
│   └── Cart/
│       └── Cart.tsx
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
├── index.css
└── main.tsx
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

## Faz 2

- [x] React Router kullanılıyor.
- [x] Sayfalar arası navigation çalışıyor.
- [x] `/` ana sayfa route'u çalışıyor.
- [x] `/products` ürün listeleme route'u çalışıyor.
- [x] `/products/:id` dinamik ürün detay route'u çalışıyor.
- [x] Ürün ID'sine göre doğru ürün detay sayfası açılıyor.
- [x] Geçersiz ürün ID'sinde bulunamadı durumu gösteriliyor.
- [x] Ürün detayında ürün bilgileri gösteriliyor.
- [x] Kullanıcı ürün adedini değiştirebiliyor.
- [x] Ürün adedi 1'in altına düşmüyor.
- [x] Ürün kartından ürün detay sayfasına yönlendirme çalışıyor.
- [x] `/categories/:category` dinamik kategori route'u çalışıyor.
- [x] Kategori kartından ilgili kategori sayfasına yönlendirme çalışıyor.
- [x] Geçersiz kategori için bulunamadı durumu gösteriliyor.
- [x] Header navigasyonu route'lara bağlandı.
- [x] Header'daki Kategoriler bağlantısı kategori alanına smooth scroll yapıyor.
- [x] `/cart` route'u ve Cart sayfası altyapısı oluşturuldu.
- [x] Ürün detay sayfasına responsive tasarım uygulandı.
- [ ] Sepete Ekle butonu gerçek sepet state'ine bağlı

Son madde gerçek sepet yönetimiyle birlikte Faz 3'ün başlangıcında tamamlanacaktır.

---

## Bilinen Eksikler / Sonraki Fazlar

Şu anda bilinçli olarak sonraki fazlara bırakılan maddeler:

- gerçek sepete ekleme işlemi
- global sepet state yönetimi
- aynı ürün tekrar eklendiğinde quantity artırma
- sepet içerisinde adet artırma / azaltma
- ürünü sepetten silme
- sepet ara toplamı ve toplam fiyat hesaplama
- Header'daki gerçek sepet ürün adedi
- sepet empty state'i
- loading / error / empty state senaryolarının tamamlanması

Bu özellikler proje dokümanındaki sonraki fazlara göre sırayla geliştirilecektir.

---

## Git Kullanımı

Proje Git kullanılarak fazlara ayrılmış branch'ler üzerinde geliştirilmektedir.

Kullanılan branch'lerden bazıları:

```text
feature/phase-0-react-basics
feature/phase-1-home-products
feature/phase-2-routing-product-detail
```

Değişiklikler tek bir büyük commit yerine mantıksal ve anlaşılır commit'ler halinde tutulmaktadır.

Faz 2 sonunda çalışma ağacı temiz durumdadır ve kod kalite kontrolleri uygulanmıştır.

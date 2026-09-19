# Coffee Shop

Coffee Shop, React ve TypeScript kullanılarak geliştirilen bir kahve e-ticaret uygulamasıdır.

Projenin amacı; component yapısı, props ve state kullanımı, ürün listeleme, filtreleme, sıralama ve responsive tasarım gibi temel frontend konularını gerçek bir e-ticaret senaryosu üzerinde uygulamaktır.

Faz 2 ile React Router, sayfalar arası navigasyon, ürün detay sayfası ve kategori route'ları projeye eklenmiştir. Faz 3 ile gerçek sepet yönetimi ve merkezi sepet state'i tamamlanmıştır. Faz 4 ile loading, error, empty state senaryoları ve son responsive kullanıcı deneyimi kontrolleri tamamlanmıştır.

> **Mevcut durum:** Faz 0, Faz 1, Faz 2, Faz 3 ve Faz 4 tamamlandı. Projenin zorunlu fazları tamamlanmış durumdadır.

---

## Proje Özeti

Uygulamada kullanıcıların:

- kahve ürünlerini inceleyebilmesi,
- kategorileri görebilmesi,
- ürünleri kategoriye göre filtreleyebilmesi,
- ürünleri fiyat ve isme göre sıralayabilmesi,
- ürün detay sayfasına gidebilmesi,
- kategori kartlarından ilgili kategori ürünlerine ulaşabilmesi,
- ürünleri sepete ekleyip sepetini yönetebilmesi

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
- React Context API
- Custom Hook (`useCart`)
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
- Hero alanı ve çalışan CTA
- Kategori gösterimi
- Öne çıkan ürünler
- Ürün listeleme sayfası
- Kategori filtreleme
- Fiyata göre sıralama
- İsme göre sıralama
- React Router entegrasyonu
- Sayfalar arası navigasyon
- Dinamik ürün detay ve kategori route'ları
- Ürün detayında adet seçimi
- Merkezi sepet state yönetimi
- Ürünleri sepete ekleme
- Sepette adet artırma / azaltma
- Ürünü sepetten silme
- Sepet toplamını hesaplama
- Header'da toplam ürün adedini gösterme
- Boş sepet durumu
- Sepetin tamamını temizleme
- Ürün listeleme ve kategori sayfalarında loading skeleton
- Ürün yükleme hatalarında error state
- Hata durumunda `Tekrar Dene` aksiyonu
- Filtre / kategori sonucu boş olduğunda empty state
- Mobile / tablet / desktop responsive tasarım
- Mobil sepet kullanılabilirlik düzenlemeleri

Zorunlu proje fazları tamamlanmıştır. `localStorage`, gerçek API entegrasyonu ve testler bonus kapsamda bırakılmıştır.

---

## Kod Kalitesi Kontrolleri

Faz 4 sonunda aşağıdaki kontroller uygulanmıştır:

| Kontrol | Komut |
| --- | --- |
| ESLint | `npm run lint` |
| Production build | `npm run build` |
| Whitespace / diff kontrolü | `git diff --check` |

ESLint, production build ve whitespace / diff kontrolleri başarıyla tamamlanmıştır.

Ayrıca temel kullanıcı akışı desktop, tablet ve mobile görünümlerde manuel olarak test edilmiş ve browser console üzerinde gereksiz error / warning bulunmadığı kontrol edilmiştir.

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

## Faz 3 — Sepet Yönetimi

Faz 3'te gerçek sepet yönetimi Context API kullanılarak uygulama genelinde merkezi hale getirildi.

### Yapılanlar

- `CartContext` ve `CartProvider` oluşturuldu.
- `CartItem` tipi ile sepetteki ürünlere `quantity` bilgisi eklendi.
- `ProductDetail` ve `ProductCard` üzerindeki `Sepete Ekle` butonları gerçek sepet state'ine bağlandı.
- Aynı ürün tekrar eklendiğinde yeni satır oluşturmak yerine ürün adedi artırıldı.
- Header'daki sepet adedi `totalItemCount` ile gerçek sepet state'ine bağlandı.
- Cart sayfasında ürün görseli, ürün adı, birim fiyat, adet ve satır toplamı gösterildi.
- Sepette ürün adedi artırma / azaltma ve ürün silme işlemleri eklendi.
- `totalPrice` ile sepet toplamı hesaplandı.
- Sepet boşken empty state ve `/products` yönlendirmesi eklendi.
- `clearCart()` ile sepetin tamamını temizleme işlemi eklendi.
- Cart sayfası responsive hale getirildi.

> **Not:** Sepetin sayfa yenilendiğinde korunmasını sağlayan `localStorage` entegrasyonu proje dokümanında bonus olarak belirtildiği için eklenmemiştir.

### Faz 3 Kontrolleri

```bash
npm run lint
npm run build
git diff --check
```

Kontroller başarıyla tamamlandı.

---

## Faz 4 — Kullanıcı Deneyimi ve Hata Yönetimi

Faz 4'te uygulamanın yalnızca normal kullanım senaryosunda değil; veri yükleme, hata, boş sonuç ve farklı ekran boyutları gibi kullanıcı deneyimi durumlarında da düzgün çalışması sağlandı.

### Yapılanlar

- Ürün filtreleme sonucunda liste boş olduğunda `Bu kategoride ürün bulunamadı.` empty state'i eklendi.
- Geçerli fakat ürünü bulunmayan kategori sayfalarında aynı empty state gösterildi.
- Geçersiz kategori için mevcut `Kategori bulunamadı` davranışı korunmaya devam edildi.
- Ürün kataloğu ve kategori verileri genişletildi.
- Products sayfasındaki kategori seçenekleri merkezi `categories` verisinden `map()` ile oluşturulur hale getirildi.
- Hero alanındaki `KAHVEMİ SEÇ` CTA butonu kategori alanına smooth scroll yapacak şekilde bağlandı.
- Mock ürün verilerini Promise üzerinden döndüren `productService.ts` servis katmanı oluşturuldu.
- `/products` ve `/categories/:category` sayfalarına loading state eklendi.
- Loading sırasında ürün kartlarının yapısına uygun skeleton kartlar gösterildi.
- Ürün verilerinin yüklenememesi durumunda error state eklendi.
- Error state içerisinde `Ürünleri yüklerken bir problem oluştu.` mesajı ve `Tekrar Dene` butonu gösterildi.
- `Tekrar Dene` aksiyonu ürünleri yeniden yükleyecek şekilde bağlandı.
- Async ürün yükleme işlemlerinde component unmount veya kategori değişimi sonrasında gereksiz state güncellemelerini önlemek için iptal kontrolü uygulandı.
- Mobil Cart görünümü yeniden düzenlendi.
- Mobilde miktar butonları dokunmatik kullanıma daha uygun boyuta getirildi.
- `Sepeti Temizle`, adet kontrolleri, satır toplamı ve silme aksiyonlarının mobil yerleşimi iyileştirildi.
- Uygulama mobile, tablet ve desktop ekran boyutlarında manuel olarak kontrol edildi.
- `/`, `/products`, `/products/:id`, `/categories/:category` ve `/cart` sayfalarının responsive davranışları test edildi.
- Ürün bulunamayan kategori, geçersiz ürün ID'si, loading ve error/retry senaryoları manuel olarak test edildi.
- Browser console üzerinde gereksiz error / warning bulunmadığı kontrol edildi.

### Loading State

Ürün verileri yüklenirken gerçek ürün kartları yerine skeleton kartlar gösterilmektedir.

Loading state aşağıdaki sayfalarda uygulanmaktadır:

```text
/products
/categories/:category
```

Ürünler yüklendiğinde skeleton alanı otomatik olarak gerçek ürün kartlarıyla değiştirilir.

---

### Error State ve Tekrar Dene

Ürün verilerinin alınamadığı durumda kullanıcıya:

```text
Ürünleri yüklerken bir problem oluştu.
[ Tekrar Dene ]
```

gösterilmektedir.

`Tekrar Dene` butonuna basıldığında:

```text
error state
↓
loading skeleton
↓
ürünlerin yeniden yüklenmesi
```

akışı çalışmaktadır.

Error ve retry davranışı hem Products hem de Category sayfalarında manuel olarak test edilmiştir.

---

### Empty State

Filtre veya kategori sonucunda ürün bulunamadığında:

```text
Bu kategoride ürün bulunamadı.
```

mesajı gösterilmektedir.

Geçersiz kategori davranışı bu durumdan ayrı tutulmuştur:

```text
Kategori bulunamadı
Aradığınız kategori mevcut değil.
```

---

### Responsive ve Kullanılabilirlik Kontrolleri

Faz 4 sonunda uygulama yeniden:

- Mobile
- Tablet
- Desktop

görünümlerinde kontrol edilmiştir.


### Faz 4 Kontrolleri

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
- `CartItem` tipi ve sepet Context değerlerinin TypeScript ile modellenmesi

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
│       ├── Cart.tsx
│       └── Cart.css
│
├── context/
│   ├── CartContext.ts
│   └── CartProvider.tsx
│
├── services/
│   └── productService.ts
│
├── data/
│   ├── categories.ts
│   └── products.ts
│
├── types/
│   ├── cart.ts
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

## Faz 3

- [x] Ürün sepete eklenebiliyor.
- [x] Aynı ürün tekrar eklendiğinde quantity artırılıyor.
- [x] Ürün adedi artırılabiliyor.
- [x] Ürün adedi azaltılabiliyor.
- [x] Ürün sepetten silinebiliyor.
- [x] Sepet toplamı doğru hesaplanıyor.
- [x] Sepetteki toplam ürün sayısı Header'da gösteriliyor.
- [x] Sepet boşken empty state gösteriliyor.
- [x] Sepet state'i farklı sayfalardan erişilebilir durumda.
- [x] Sepet state'i Context API ile yönetiliyor.
- [x] Sepetin tamamı `clearCart()` ile temizlenebiliyor.

Faz 3 kabul kriterlerinin tamamı karşılanmıştır.

## Faz 4

- [x] Loading state mevcut.
- [x] Ürün yüklenirken skeleton gösteriliyor.
- [x] Error state mevcut.
- [x] Hata durumunda `Tekrar Dene` aksiyonu çalışıyor.
- [x] Filtre sonucunda empty state gösteriliyor.
- [x] Geçerli fakat ürünü bulunmayan kategoride empty state gösteriliyor.
- [x] Mobile görünüm düzgün çalışıyor.
- [x] Tablet görünüm düzgün çalışıyor.
- [x] Desktop görünüm düzgün çalışıyor.
- [x] Mobil sepet kullanılabilir durumda.
- [x] Dokunmatik aksiyon alanları küçük ekranlara uygun hale getirildi.
- [x] Hata durumunda uygulama bozulmadan kullanıcıya uygun state gösteriliyor.
- [x] Geçersiz ürün ID'sinde uygun bulunamadı ekranı gösteriliyor.
- [x] Console'da gereksiz error / warning bulunmuyor.

Faz 4 kabul kriterlerinin tamamı karşılanmıştır.

---

## Bilinen Eksikler / Bonus Geliştirmeler

Projenin zorunlu Faz 0–4 gereksinimleri tamamlanmıştır.

Aşağıdaki geliştirmeler proje dokümanında bonus / isteğe bağlı özellikler olarak bırakılmıştır:

- gerçek API entegrasyonu,
- `localStorage` ile sepetin sayfa yenilemelerinde korunması,
- component / sepet davranışları için otomatik testler.

Bu bonus özellikler mevcut zorunlu proje kapsamına dahil edilmemiştir.

---

## Git Kullanımı

Proje Git kullanılarak fazlara ayrılmış branch'ler üzerinde geliştirilmektedir.

Kullanılan branch'lerden bazıları:

```text
feature/phase-0-react-basics
feature/phase-1-home-products
feature/phase-2-routing-product-detail
feature/phase-3-cart-management
feature/phase-4-user-experience
```

Değişiklikler tek bir büyük commit yerine mantıksal ve anlaşılır commit'ler halinde tutulmaktadır.

Faz 4 geliştirmeleri `feature/phase-4-user-experience` branch'i üzerinde loading, error, empty state, katalog / kategori güncellemeleri ve responsive iyileştirmeler ayrı mantıksal commit'ler halinde geliştirilmiştir.

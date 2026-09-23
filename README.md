# Coffee Shop

Coffee Shop, React ve TypeScript kullanılarak geliştirilen bir kahve e-ticaret uygulamasıdır.

Projenin amacı; component yapısı, props ve state kullanımı, ürün listeleme, filtreleme, sıralama ve responsive tasarım gibi temel frontend konularını gerçek bir e-ticaret senaryosu üzerinde uygulamaktır.

Faz 2 ile React Router, sayfalar arası navigasyon, ürün detay sayfası ve kategori route'ları projeye eklenmiştir. Faz 3 ile gerçek sepet yönetimi ve merkezi sepet state'i tamamlanmıştır. Faz 4 ile loading, error, empty state senaryoları ve son responsive kullanıcı deneyimi kontrolleri tamamlanmıştır. Bonus API Integration kapsamında ürün ve kategori verileri JSON Server üzerinden sunulan API endpoint'lerine bağlanmıştır. Bonus LocalStorage kapsamında sepet verileri browser `localStorage` alanında saklanarak sayfa yenilemelerinde korunur hale getirilmiştir.

> **Mevcut durum:** Faz 0, Faz 1, Faz 2, Faz 3 ve Faz 4 tamamlandı. Projenin zorunlu fazları, Bonus API Integration ve Bonus LocalStorage tamamlanmış durumdadır. Kalan bonus geliştirme otomatik testlerdir.

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
- Fetch API
- JSON Server
- Web Storage API (`localStorage`)
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

API entegrasyonu tamamlandığı için uygulamayı çalıştırırken JSON Server ve Vite development server birlikte açık olmalıdır.

İlk terminalde mock API'yi başlatın:

```bash
npm run api
```

API aşağıdaki adres üzerinden çalışır:

```text
http://localhost:3001
```

İkinci terminalde frontend development server'ı başlatın:

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
- JSON Server tabanlı mock API entegrasyonu
- `GET /products`, `GET /products/:id` ve `GET /categories` endpoint'leri
- `fetch` ile ürün ve kategori verilerinin alınması
- API response ve HTTP hata durumlarının yönetilmesi
- Ürün detayının ID üzerinden API'den alınması
- API'den gelen ürün ve kategori verilerinin TypeScript ile modellenmesi
- Sepetin `localStorage` içerisinde saklanması
- Uygulama açıldığında sepetin `localStorage` üzerinden geri yüklenmesi
- Sepet değişikliklerinin otomatik olarak `localStorage` ile senkronize edilmesi
- Sayfa yenilemelerinde sepet içeriğinin ve ürün adetlerinin korunması

Zorunlu proje fazları, Bonus API Integration ve Bonus LocalStorage tamamlanmıştır. Otomatik testler kalan bonus geliştirmedir.

---

## Kod Kalitesi Kontrolleri

Tüm fazlar, API Integration ve LocalStorage sonunda aşağıdaki kontroller uygulanmıştır:

| Kontrol | Komut |
| --- | --- |
| ESLint | `npm run lint` |
| Production build | `npm run build` |
| Whitespace / diff kontrolü | `git diff --check` |

ESLint, production build ve whitespace / diff kontrolleri başarıyla tamamlanmıştır.

Ayrıca temel kullanıcı akışı desktop, tablet ve mobile görünümlerde manuel olarak test edilmiş ve browser console üzerinde gereksiz error / warning bulunmadığı kontrol edilmiştir. Bonus API Integration sırasında API açık / kapalı senaryoları, ürün ve kategori endpoint'leri, 404 ürün durumu ve hata sonrası yeniden deneme akışı manuel olarak test edilmiştir. Bonus LocalStorage sırasında sepete ürün ekleme, adet değiştirme ve sayfa yenileme sonrasında sepet verilerinin korunması da manuel olarak doğrulanmıştır.

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

## Bonus — API Entegrasyonu

Bonus API Integration kapsamında proje içerisindeki statik / mock ürün servis yapısı JSON Server üzerinden çalışan API endpoint'lerine bağlandı. Bu geliştirme sırasında mevcut kullanıcı arayüzü ve Faz 0–4 davranışları korunarak yalnızca verinin alınma yöntemi değiştirildi.

### Yapılanlar

- `json-server` development dependency olarak projeye eklendi.
- Proje kök dizininde `db.json` oluşturuldu.
- Mevcut ürün ve kategori verileri JSON Server tarafından API olarak sunulur hale getirildi.
- `package.json` içerisine `npm run api` script'i eklendi.
- `productService.ts` içerisindeki mock Promise yapısı `fetch` tabanlı API istekleriyle değiştirildi.
- Tüm ürünleri almak için `GET /products` endpoint'i kullanıldı.
- Tek bir ürünün detayını almak için `GET /products/:id` endpoint'i kullanıldı.
- Kategori listesini almak için `GET /categories` endpoint'i kullanıldı.
- API cevaplarında `response.ok` kontrolü uygulanarak başarısız HTTP cevapları error state'e yönlendirildi.
- Ürün detayında `404` cevabı ayrı yönetilerek mevcut `Ürün bulunamadı` davranışı korundu.
- JSON Server tarafından string olarak dönebilen ürün ID'leri mevcut `Product` modeline uygun şekilde `number` tipine normalize edildi.
- Products sayfasında ürün ve kategori istekleri `Promise.all()` ile birlikte yönetildi.
- Kategori dropdown'u statik kategori kaynağı yerine API'den gelen kategori verileriyle oluşturuldu.
- Product Detail sayfası ürün bilgisini ID üzerinden API'den alacak şekilde güncellendi.
- Mevcut loading, error, retry ve empty state davranışları API entegrasyonu sonrasında korunmaya devam edildi.
- API kapatılarak gerçek hata senaryosu manuel olarak test edildi.
- API tekrar açıldıktan sonra Products sayfasındaki `Tekrar Dene` akışının verileri yeniden yüklediği doğrulandı.

### API Endpoint'leri

| Method | Endpoint | Kullanım |
| --- | --- | --- |
| GET | `/products` | Tüm ürünleri getirir. |
| GET | `/products/:id` | ID'ye göre tek ürün getirir. |
| GET | `/categories` | Kategori listesini getirir. |

Local API adresi:

```text
http://localhost:3001
```

Örnek endpoint'ler:

```text
http://localhost:3001/products
http://localhost:3001/products/1
http://localhost:3001/categories
```

### Fetch ve API Response Yönetimi

API istekleri browser'ın yerleşik `fetch` API'si kullanılarak gerçekleştirilmektedir.

Servis katmanında başarısız HTTP cevapları kontrol edilmektedir:

```ts
if (!response.ok) {
  throw new Error('Ürünler alınamadı.')
}
```

Ürün detayında bulunamayan ürünler için `404` durumu ayrı ele alınmaktadır:

```ts
if (response.status === 404) {
  return null
}
```

Bu sayede teknik API hatası ile bulunamayan ürün senaryosu birbirinden ayrılmıştır.

### API Verilerinin TypeScript ile Modellenmesi

JSON Server response yapısını mevcut proje tipleriyle uyumlu hale getirmek için API'ye özel tipler kullanılmıştır:

```ts
type ApiProduct = Omit<Product, 'id'> & {
  id: string | number
}

type ApiCategory = {
  id: string | number
  name: Category
}
```

Ürün ID'si uygulamanın mevcut `Product` modeline uygun şekilde normalize edilmektedir:

```ts
function normalizeProduct(product: ApiProduct): Product {
  return {
    ...product,
    id: Number(product.id),
  }
}
```

Bu yapı sayesinde API response'u ile uygulama içerisindeki type-safe `Product` modeli arasında uyum sağlanmıştır.

### Loading ve Error State Kontrolleri

API entegrasyonu sonrasında mevcut kullanıcı deneyimi state'leri korunmuştur.

Products sayfasında:

```text
API isteği
↓
loading skeleton
↓
ürünlerin gösterilmesi
```

Hata durumunda:

```text
Ürünleri yüklerken bir problem oluştu.
[ Tekrar Dene ]
```

Product Detail sayfasında API isteği beklenirken `Ürün yükleniyor...` mesajı gösterilmektedir. API erişilemez durumdaysa hata ekranı, ürün ID'si bulunamazsa mevcut `Ürün bulunamadı` ekranı gösterilmektedir.


### Bonus API Kontrolleri

```bash
npm run lint
npm run build
git diff --check
git status
```

Kontroller başarıyla tamamlandı ve çalışma ağacının temiz olduğu doğrulandı.

---

## Bonus — LocalStorage

Bonus LocalStorage kapsamında mevcut sepet yönetimi değiştirilmeden sepet verilerinin browser `localStorage` alanında kalıcı olarak tutulması sağlandı. Bu geliştirme ile kullanıcı sayfayı yenilediğinde veya uygulamayı tekrar açtığında mevcut sepet içeriği korunmaktadır.

### Yapılanlar

- `CartProvider.tsx` içerisinde sepet verileri için merkezi bir storage key tanımlandı.
- Sepet state'inin başlangıç değeri `localStorage` içerisindeki mevcut sepet verisinden okunacak şekilde güncellendi.
- `localStorage` içerisinde kayıtlı sepet bulunmadığında mevcut boş sepet davranışı korunarak başlangıç değeri `[]` olarak kullanılmaya devam edildi.
- Kayıtlı JSON sepet verisi `CartItem[]` yapısına dönüştürülerek mevcut Context API state'i ile kullanıldı.
- `cartItems` değişiklikleri `useEffect` ile izlenerek her sepet güncellemesinde `localStorage` otomatik olarak güncellenir hale getirildi.
- Mevcut `addToCart`, `increaseQuantity`, `decreaseQuantity`, `removeFromCart` ve `clearCart` fonksiyonlarının çalışma mantığı değiştirilmedi.
- Header'daki toplam ürün sayısı ve Cart sayfasındaki toplam fiyat hesaplamaları mevcut Context state'i üzerinden çalışmaya devam etti.
- Sepete ürün ekleme, adet artırma / azaltma, ürün silme ve sepeti temizleme işlemleri sonrasında güncel sepet state'inin storage'a yazılması sağlandı.
- Sayfa yenileme sonrasında ürünlerin, ürün adetlerinin ve Header sepet sayacının korunması manuel olarak test edildi.

### LocalStorage Anahtarı

Sepet verileri aşağıdaki storage key ile saklanmaktadır:

```ts
const CART_STORAGE_KEY = 'cart'
```

Browser storage içerisindeki değer JSON formatında tutulmaktadır.

### Uygulama Açılışında Sepetin Yüklenmesi

`useState` için lazy initializer kullanılarak `localStorage` yalnızca başlangıç state'i oluşturulurken okunmaktadır:

```ts
const [cartItems, setCartItems] = useState<CartItem[]>(() => {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY)

  if (!storedCart) {
    return []
  }

  return JSON.parse(storedCart) as CartItem[]
})
```

Bu akış:

```text
uygulama açılır
↓
localStorage kontrol edilir
↓
kayıtlı cart varsa okunur
↓
CartContext başlangıç state'i oluşturulur
```

şeklinde çalışmaktadır.

### Sepet Değişikliklerinin Kaydedilmesi

Sepet state'i her değiştiğinde güncel değer `localStorage` alanına yazılmaktadır:

```ts
useEffect(() => {
  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cartItems),
  )
}, [cartItems])
```

Bu nedenle aşağıdaki mevcut sepet işlemleri storage'a otomatik olarak yansır:

- ürünü sepete ekleme,
- aynı ürünün quantity değerini artırma,
- ürün adedini artırma,
- ürün adedini azaltma,
- ürünü sepetten kaldırma,
- sepetin tamamını temizleme.

### Sayfa Yenileme Davranışı

LocalStorage entegrasyonu öncesinde Cart Context state'i sayfa yenilendiğinde başlangıç değerine dönüyordu.

Bonus sonrasında akış:

```text
sepete ürün eklenir
↓
cartItems güncellenir
↓
localStorage güncellenir
↓
sayfa yenilenir
↓
cart localStorage'dan tekrar okunur
↓
sepet içeriği korunur
```

şeklinde çalışmaktadır.

---

## TypeScript Kullanımı

Projede TypeScript aktif olarak kullanılmaktadır.

Özellikle:

- component prop tipleri,
- `Product` tipi,
- `Category` union tipi,
- `Record<Category, string>` ile kategori görsel eşlemesi
- `CartItem` tipi ve sepet Context değerlerinin TypeScript ile modellenmesi,
- `ApiProduct` ve `ApiCategory` tipleriyle API response'larının modellenmesi,
- API'den gelen ürün ID'sinin `Product` modeline uygun şekilde normalize edilmesi

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

Mock API veri kaynağı proje kök dizinindeki:

```text
db.json
```

dosyasında tutulmaktadır.

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

## Bonus API Integration

- [x] JSON Server projeye eklendi.
- [x] `db.json` mock API veri kaynağı oluşturuldu.
- [x] `GET /products` endpoint'i kullanılıyor.
- [x] `GET /products/:id` endpoint'i kullanılıyor.
- [x] `GET /categories` endpoint'i kullanılıyor.
- [x] API istekleri `fetch` ile gerçekleştiriliyor.
- [x] API response yönetimi uygulanıyor.
- [x] Loading state API istekleriyle çalışıyor.
- [x] Error handling uygulanıyor.
- [x] `404` ürün bulunamadı durumu ayrı yönetiliyor.
- [x] API verileri TypeScript ile modelleniyor.
- [x] JSON Server'dan gelen ürün ID'leri `number` tipine normalize ediliyor.
- [x] API açık / kapalı senaryoları manuel olarak test edildi.
- [x] Hata sonrası `Tekrar Dene` akışı doğrulandı.
- [x] `npm run lint`, `npm run build` ve `git diff --check` kontrolleri başarıyla tamamlandı.

Bonus API Integration tamamlanmıştır.

## Bonus LocalStorage

- [x] Sepet `localStorage` içerisine kaydediliyor.
- [x] Uygulama açıldığında kayıtlı sepet `localStorage` üzerinden okunuyor.
- [x] Sepet değiştiğinde `localStorage` otomatik olarak güncelleniyor.
- [x] Sayfa yenilendiğinde sepet içeriği korunuyor.
- [x] Ürün quantity değerleri sayfa yenileme sonrasında korunuyor.
- [x] Header'daki toplam ürün adedi kayıtlı sepet state'i ile doğru gösteriliyor.
- [x] Mevcut sepete ekleme, adet artırma / azaltma, silme ve temizleme davranışları korunuyor.
- [x] `npm run lint`, `npm run build` ve `git diff --check` kontrolleri başarıyla tamamlandı.

Bonus LocalStorage tamamlanmıştır.

---

## Bilinen Eksikler / Bonus Geliştirmeler

Projenin zorunlu Faz 0–4 gereksinimleri tamamlanmıştır.

Bonus geliştirmelerin mevcut durumu:

- [x] API Integration — JSON Server, `fetch`, API response yönetimi, loading / error handling ve TypeScript API modelleme tamamlandı.
- [x] LocalStorage — sepetin kaydedilmesi, uygulama açılışında geri yüklenmesi ve sepet değişikliklerinde storage'ın güncellenmesi tamamlandı.
- [ ] ProductCard ve sepet davranışları için otomatik testler.

Bonus API Integration ve Bonus LocalStorage tamamlanmıştır. Kalan bonus geliştirme otomatik testlerdir.

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
feature/api-integration
feature/local-storage
```

Değişiklikler tek bir büyük commit yerine mantıksal ve anlaşılır commit'ler halinde tutulmaktadır.

Faz 4 geliştirmeleri `feature/phase-4-user-experience` branch'i üzerinde loading, error, empty state, katalog / kategori güncellemeleri ve responsive iyileştirmeler ayrı mantıksal commit'ler halinde geliştirilmiştir.

Bonus API Integration geliştirmeleri `feature/api-integration` branch'i üzerinde JSON Server altyapısı, ürün detay API entegrasyonu ve kategori API entegrasyonu ayrı mantıksal commit'ler halinde geliştirilmiştir.

Bonus LocalStorage geliştirmeleri `feature/local-storage` branch'i üzerinde mevcut Cart Context yapısı korunarak sepetin browser storage'a kaydedilmesi ve uygulama açılışında geri yüklenmesi şeklinde geliştirilmiştir.

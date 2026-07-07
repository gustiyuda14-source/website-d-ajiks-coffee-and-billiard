# D'Ajiks Coffee & Billiard — Website

Website resmi untuk D'Ajiks Coffee & Billiard, coffee shop & billiard lounge di Kendari.

## 1. Identitas Visual

Sumber: analisis visual Instagram & TikTok ([analisis_sosmed.md](./analisis_sosmed.md)) + aset brand lokal (logo, foto interior, label produk literan). Menu-menu existing (Signature, Main Course, Minuman) memakai template Canva generik (oranye/hijau/biru) dan **tidak dijadikan acuan warna** — itu bukan identitas brand, hanya template lepas.

### Palet Warna

| Token | Hex | Peran |
|---|---|---|
| `forest-black` | `#111111` | Background utama (dark mode default) |
| `forest-green` | `#1A3E2F` | Background sekunder, card, section alternatif |
| `gold` | `#C9A227` | Aksen signature — CTA, ikon, highlight teks, treatment logo |
| `gold-light` | `#E8C766` | Hover/active state dari gold |
| `walnut` | `#7A4B32` | Aksen hangat dari furnitur kayu asli venue — tag kategori, border foto |
| `ivory` | `#F3EDE3` | Teks di atas background gelap, section terang jika diperlukan |
| `near-black` | `#161512` | Teks di atas background terang |

**Mood:** dark-moody, elegant, masculine, tetap energetic & premium — selaras dengan cover highlight IG (hijau tua + logo emas) dan label produk literan (hitam/hijau tua/karamel).

**Dark mode adalah default**, bukan opsi — ini mengikuti identitas digital asli brand di sosial media, sekaligus membedakan dari website coffee shop lain yang rata-rata bertema terang.

### Tipografi
- **Heading/Display: Cinzel** — serif Romawi klasik, dipilih atas permintaan eksplisit sebagai literatur utama. Dipakai di semua heading, navigasi, tombol, dan angka harga agar identitas tipografis terasa dominan di seluruh situs.
- **Body/UI: Jost** — sans geometris bernuansa art-deco, dipasangkan dengan Cinzel supaya paragraf panjang (deskripsi, menu) tetap enak dibaca tanpa kehilangan karakter premium.
- Kedua font dimuat via `next/font/google` (self-hosted otomatis, tanpa render-blocking).

### Logo
- **Light version** (hitam di atas putih, `LOGO UTAMA D AJIKS COFFEE.jpeg` → `public/brand/logo-light.jpg`) — cadangan untuk print/dokumen resmi.
- **Gold version** (`LOGO EMAS D AJIKS.jpeg`, disediakan langsung oleh user) — di-crop jadi dua turunan:
  - `public/brand/logo-gold-icon.jpg` — crop fokus ke mark trefoil, dipakai di badge bulat Navbar (`object-position: top`, di-scale supaya teks tidak ikut kepotong ke dalam frame)
  - `public/brand/logo-gold-full.jpg` — crop lockup lengkap (ikon + "D'AJIKS" + "COFFEE & BILLIARD"), dipakai di Footer
  - `src/app/icon.png` — favicon, di-generate dari crop ikon yang di-pad jadi kanvas persegi `#111111` (konvensi file khusus Next.js App Router)

## 2. Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript, struktur `src/`
- **Styling:** Tailwind CSS, dark theme sebagai default (bukan via `next-themes`, langsung di-hardcode sebagai satu-satunya tema)
- **UI Primitives:** komponen custom ringan (`Button`, `Badge`, `SectionHeading`) — bukan shadcn/ui, supaya tidak ada dependency CLI tambahan untuk kebutuhan yang sederhana
- **Icon:** `lucide-react`
- **Font loading:** `next/font/google` (Cinzel + Jost, self-hosted otomatis)
- **Gambar:** `next/image`, aset dioptimasi dari file lokal via `sips`
- **Deploy:** Vercel
- **Status build:** `npm run build` sukses, 7 route ter-generate statis, diverifikasi visual di browser (Playwright headless) — lihat bagian 7

## 3. Struktur Arsitektur

```
src/
  app/
    layout.tsx            # font Cinzel+Jost, metadata, JSON-LD LocalBusiness
    globals.css           # design tokens, dark theme base
    page.tsx              # Home
    menu/page.tsx
    billiard/page.tsx
    gallery/page.tsx
    about/page.tsx
    contact/page.tsx
  components/
    layout/               # Navbar, Footer, WhatsAppFloatButton
    sections/             # Hero, AmbianceGallery, MenuHighlight, CommunitySection,
                          # ValueProps, BilliardPricing, LocationCta
    menu/                 # MenuTabs (client component, tab kategori menu)
    ui/                   # Button, Badge, SectionHeading
  lib/
    constants.ts          # nomor WA, link sosial, jam operasional, wa.me helper
    menu-data.ts          # data menu terstruktur (bukan gambar mentah)
    utils.ts              # cn() helper (clsx + tailwind-merge)
public/
  images/
    ambiance/             # foto interior/venue asli (hero, dining, billiard, crew)
    products/             # foto kopi & produk literan
    menu/                 # scan papan menu asli (referensi/unduhan)
    menu-items/           # foto produk per item menu (product shot + action shot), dipakai photo card di /menu
    promo/                # render dish promosi (11 gambar)
  brand/
    logo-light.jpg        # logo hitam-di-putih asli
```

## 4. Sitemap & Urutan Konten

Urutan section Home mengikuti prioritas jenis konten dari analisis sosmed (Ambiance > UGC/Event > Menu/Promo > Testimoni):

1. **Home (`/`)** — Hero (ambiance venue), Ambiance/Vibe gallery teaser, Menu highlight (Signature Drinks), Community/Event snapshot, Testimoni, Billiard pricing teaser, CTA reservasi WhatsApp, lokasi
2. **Menu (`/menu`)** — tab: Coffee, Ice Coffee, Non-Coffee, Signature, Main Course, Snack, Produk Literan
3. **Billiard (`/billiard`)** — info meja, price list (Rp25.000/jam 10.00–18.00, Rp40.000/jam 18.00–02.00), CTA reservasi via WA dengan pesan pre-filled
4. **Gallery (`/gallery`)** — foto interior & ambiance (masonry)
5. **About (`/about`)** — cerita brand
6. **Contact (`/contact`)** — peta, alamat, jam, WA, IG, TikTok

## 5. Kontak & Sosial

| Channel | Detail |
|---|---|
| WhatsApp Business | +62 851-2196-0870 (`wa.me/6285121960870`) |
| Instagram | [@d.ajikscoffeenbiliard](https://www.instagram.com/d.ajikscoffeenbiliard) |
| TikTok | [@d_ajikscoffeenbil](https://www.tiktok.com/@d_ajikscoffeenbil) |
| Alamat | Jl. Brigadir Jenderal Katamso, Lepo-Lepo, Kendari, Sulawesi Tenggara 90116 ([Google Maps](https://maps.app.goo.gl/CyZqHQoejrfvWH8J6)) |

## 6. Pembagian Tugas — Claude Code & Gemini Antigravity

Dua agen bekerja di proyek yang sama dengan batas tanggung jawab yang tegas, supaya tidak ada operasi yang tumpang tindih atau saling menimpa pekerjaan. Prinsipnya: **Claude Code = isi (kode & konten aplikasi), Gemini Antigravity = jalur (repo, deploy, infra).**

### Ringkasan

| Area | Claude Code | Gemini Antigravity |
|---|---|---|
| Arsitektur & struktur project | ✅ | — |
| Kode aplikasi (komponen, halaman, styling) | ✅ | — |
| Data konten (menu, harga, teks) | ✅ | — |
| Optimasi & penempatan aset gambar | ✅ | — |
| Perbaikan bug / iterasi fitur | ✅ | — |
| `git init` / `git commit` | ❌ (hanya jika user minta eksplisit) | ✅ |
| Pembuatan repo GitHub | — | ✅ |
| `git push` / manajemen branch | ❌ | ✅ |
| Link & konfigurasi project Vercel | ❌ | ✅ |
| Environment variables di Vercel | — | ✅ |
| Deploy (preview & production) | ❌ | ✅ |
| Domain custom (jika ada) | — | ✅ |
| Rollback saat deploy gagal | — | ✅ |

### Tupoksi Claude Code
- Merancang & menulis seluruh kode aplikasi (Next.js, komponen, styling, struktur folder)
- Menerjemahkan aset visual (foto, menu, harga) menjadi data terstruktur (`menu-data.ts`, `constants.ts`)
- Menjaga konsistensi desain terhadap palet warna & tipografi di bagian 1
- Testing lokal (`npm run build`, cek tampilan) sebelum menyerahkan hasil
- **Tidak** menyentuh git remote, tidak push, tidak deploy — kecuali diminta eksplisit oleh user

### Tupoksi Gemini Antigravity
- Inisialisasi & mengelola repository git (init, commit, push)
- Membuat/mengelola repo GitHub dengan nama `website-d-ajiks-coffee-and-billiard`
- Menghubungkan repo ke project Vercel, mengatur environment variables bila diperlukan
- Menjalankan deploy (preview untuk setiap perubahan, production setelah dikonfirmasi user)
- Menangani rollback bila deploy production bermasalah
- Melaporkan balik ke user: URL repo, URL deploy, status build

### Alur Kerja
1. Claude Code menulis/mengubah kode di working directory ini
2. User me-review hasil kerja Claude Code
3. Setelah disetujui, **Gemini Antigravity** yang menjalankan commit + push ke repo `website-d-ajiks-coffee-and-billiard`
4. Gemini Antigravity deploy ke Vercel (preview → production)
5. Siklus berulang untuk setiap fitur/perubahan berikutnya

### Status Repo Saat Ini (terverifikasi)
- **Repo GitHub:** `gustiyuda14-source/website-d-ajiks-coffee-and-billiard` (public) — sudah dibuat oleh Gemini Antigravity.
- **Isi repo:** baru 1 commit ("Initial commit: Analisis desain sosmed") berisi `analisis_sosmed.md` saja. Kode aplikasi, README, dan aset (logo/menu/foto) di direktori lokal ini **belum ter-push**.
- **Remote lokal:** direktori kerja ini masih `git init` tanpa commit dan tanpa remote terkonfigurasi — belum tersambung ke repo di atas.
- **Vercel:** **belum ada project/deployment** untuk website ini (dicek dari daftar project tim `ajiks` — tidak ada yang cocok).

## 7. Status

- [x] Analisis brand & palet warna (aset lokal + sosmed)
- [x] Arsitektur & README
- [x] Pembagian tugas Claude Code & Gemini Antigravity
- [x] Setup project Next.js + Tailwind (Claude Code)
- [x] Transkrip data menu ke `menu-data.ts` (Claude Code)
- [x] Build semua komponen & 6 halaman: Home, Menu, Billiard, Gallery, About, Contact (Claude Code)
- [x] Font Cinzel + Jost terpasang sebagai identitas tipografi utama (Claude Code)
- [x] `npm run build` sukses, diverifikasi visual di browser headless — tidak ada console error (Claude Code)
- [x] Logo emas asli terpasang di Navbar (badge ikon), Footer (lockup lengkap), dan favicon (Claude Code)
- [x] 15 foto produk (product shot + action shot) dioptimasi ke `public/images/menu-items/`, menu jadi hybrid photo card + daftar klasik, kolase kipas signature di Home (Claude Code)
- [x] Lightbox foto menu (klik kartu → foto penuh, tutup via backdrop/X/ESC), marquee brand ticker di Home, emblem Grab asli di section GrabFood CTA (`public/images/partners/`) (Claude Code)
- [x] Batch foto ke-2: suasana nongki (HEIC→JPG) + outdoor + barista ke ambiance/Gallery, best seller Aren/Pandan/Betutu/Nasi Jinggo bertag, americano splash baru, 5 botol literan → Sharing Seliter full photo-card (Claude Code)
- [x] Hardening security header (`next.config.mjs`): CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS, `poweredByHeader: false` — diverifikasi zero console/CSP error di semua halaman + interaktivitas (lightbox, ESC, WA button) tetap jalan (Claude Code)
- [x] Alamat presisi (Jl. Brigadir Jenderal Katamso, Lepo-Lepo, Kendari 90116) + embed Google Maps di section Home (LocationCta) dan halaman Contact, tombol "Buka di Google Maps"/"Petunjuk Arah", alamat konsisten di Footer, JSON-LD LocalBusiness dilengkapi streetAddress + geo coordinates (Claude Code)
- [x] Fix bug `metadataBase` (mengarah ke domain 404, semua link-preview rusak sejak awal) → domain production benar `dajiks.vercel.app` (dikonfirmasi via `vercel project ls`); tiap halaman (Home/Menu/Billiard/Gallery/Contact/About) sekarang punya og:title/description/image sendiri lewat `lib/seo.ts`, bukan share satu gambar generik (Claude Code)
- [x] Repo remote tersambung & kode ter-push ke `gustiyuda14-source/website-d-ajiks-coffee-and-billiard`, deploy production aktif di Vercel (`dajiks.vercel.app`, auto-deploy tiap push ke `main`)

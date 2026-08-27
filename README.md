# iCraftDS - Interactive Web Platform

iCraftDS adalah *platform* profil perusahaan (*company profile*) dan ekosistem digital interaktif yang dirancang dengan pendekatan visual 3D Isometrik modern. Sistem navigasinya mensimulasikan *Single Page Application* (SPA) dengan perpaduan *in-page Bottom Sheets* dan halaman terpisah berdesain *Vibrant Light Theme*.

## 🎨 Konsep Desain (Design System)

Desain web ini mengusung tema **Modern Professional Enterprise** (terinspirasi dari *startup* elit seperti Stripe, Apple, dan Vercel), yang secara spesifik menghindari gaya "AI-generated" yang berlebihan (seperti neon glow tebal atau *dark mode* generik).

### 1. Warna (Color Palette)
- **Primary Gradient**: Cyan ke Royal Blue (`#00f0ff` ➔ `#1472FF`) — Digunakan pada aksen tombol, hover statis, dan interaksi utama.
- **Background**: Putih Solid (`#ffffff`) hingga Off-White (`#f4f4f6`, `#f8fafc`) — Menciptakan nuansa bersih, lapang, dan profesional.
- **Text & Typography**: 
  - Slate Dark (`#0f172a`, `#111111`) untuk *Heading* dan teks utama.
  - Slate Gray (`#64748b`, `#94a3b8`) untuk sub-teks dan label.
- **Borders & Shadows**: Garis batas sangat tipis (`1px solid rgba(0,0,0,0.05)`) dan *drop shadow* yang sangat halus (`box-shadow: 0 15px 30px rgba(0,0,0,0.04)`) untuk memberikan efek melayang (*elevated*) tanpa terlihat norak.

### 2. Tipografi (Typography)
- **Fredoka** *(Global Primary Font)*: Diterapkan di seluruh halaman (Heading, Paragraph, Button) untuk memberikan kesan ramah, membulat (*rounded*), namun tetap modern.
- **JetBrains Mono**: Digunakan secara spesifik untuk aksen teknis, label "*badge*", dan elemen bergaya *coding/terminal*.

---

## 🧩 Komponen Utama (Core Components)

Proyek ini dibangun menggunakan **Vanilla HTML, CSS, dan JavaScript** murni tanpa *framework* (bebas dari React/Vue/Tailwind), demi performa instan dan kendali DOM absolut.

### 1. 3D Isometric Engine (`index.html`)
Latar belakang interaktif yang dibangun menggunakan transformasi CSS 3D (`rotateX`, `rotateZ`).
- Memiliki fitur **Dynamic Zoom** melalui *mouse wheel* / *scroll*, di mana seluruh koordinat 3D diperbesar (*scale*) dengan interpolasi linear (`lerp`) agar sangat mulus.

### 2. Radial Menu Navigation
Sistem navigasi utama di beranda tidak menggunakan *navbar* konvensional, melainkan menu melingkar (*radial menu*) bergaya *Glassmorphism*. 
- Link keluar dari tengah layar dengan efek transisi transparan (*backdrop-filter: blur*).

### 3. In-Page Bottom Sheets
Komponen antarmuka yang meluncur dari bawah layar (`translateY(100%)` ➔ `translateY(0)`).
- Digunakan untuk fitur **Contact Us** dan **Our Clients**.
- Menghindari *loading* pindah halaman.
- Dilengkapi logika JS pintar yang secara otomatis mendeteksi ukuran layar dan **mendorong Kapsul Tombol UI ke atas** agar tidak tertutup oleh *sheet*.

### 4. Bento Grid System
Tata letak berbasis *CSS Grid* asimetris yang sedang tren.
- Digunakan luas pada halaman **About** dan **Our Clients**.
- Memungkinkan kartu (*cards*) mengambil porsi luas yang berbeda (`grid-column: span 2`) untuk menonjolkan data atau statistik tertentu.

### 5. Floating Capsule UI
Tombol interaksi utama (IC Market, IC Game-Z, Buy Us Coffee) dibungkus dalam sebuah *pill/capsule* putih yang melayang di bagian bawah tengah layar. Kapsul ini merespons secara dinamis (*elevate*) ketika *Bottom Sheet* terbuka.

---

## 📁 Struktur Direktori

Sistem telah di-*refactor* agar sangat bersih (*production-ready*), bebas dari skrip automasi sisa pengerjaan.

```text
/
├── index.html          # Halaman Utama (3D Isometric + Radial Menu + Bottom Sheets)
├── about.html          # Halaman Tentang Kami (Bento Grid, Timeline)
├── portfolio.html      # Galeri Pekerjaan / Proyek
├── pricing.html        # Daftar Harga Layanan (Hosting/Web)
├── icmarket.html       # Layanan IC Market
├── internship.html     # Program Magang (Pendaftaran)
├── buyuscoffee.html    # Halaman Dukungan/Donasi
└── README.md           # Dokumentasi Proyek
```

## 🚀 Instalasi & Deployment
Karena murni tersensi dari HTML/CSS/JS Statis:
1. Tidak perlu Node.js, `npm install`, atau proses *build* (seperti Webpack/Vite).
2. Langsung jalankan via ekstensi *Live Server* di VSCode.
3. Siap di-*deploy* langsung ke Vercel, Netlify, GitHub Pages, atau layanan Hosting tradisional mana pun (cukup unggah seluruh file ke dalam folder `public_html`).

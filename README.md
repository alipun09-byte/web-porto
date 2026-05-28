# Portofolio Next.js + Netlify

Proyek ini sekarang menggunakan Next.js dengan struktur folder yang rapi:

- `app/` untuk halaman utama dan layout
- `components/` untuk komponen UI yang dapat digunakan ulang
- `data/` untuk semua konten portofolio dalam format JavaScript
- `public/` untuk aset statis seperti gambar
- `netlify.toml` untuk konfigurasi build Netlify

## Cara menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` untuk melihat halaman.

## Build dan deploy

Netlify sudah dikonfigurasi untuk deploy output statis Next.js.

```bash
npm run build
```

### Pengaturan Netlify

- `Build command`: `npm run build`
- `Publish directory`: `out`

Netlify akan menghasilkan folder `out` dari `next export` dan menggunakannya sebagai situs statis.

## Struktur file utama

- `app/layout.js` → HTML global dan metadata
- `app/page.js` → halaman beranda portofolio
- `app/globals.css` → gaya global dan responsif
- `components/Nav.js` → navigasi header mobile-friendly
- `components/WorkCard.js` → tampilan proyek di bagian Works
- `data/portfolio.js` → semua teks, gambar, dan daftar konten

## Update otomatis

Jika repo sudah terhubung dengan Netlify, setiap push ke `main` akan memicu build dan deploy otomatis.

## Catatan

File HTML lama disimpan di `legacy/index.html` untuk referensi.
